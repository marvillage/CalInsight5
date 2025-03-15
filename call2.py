import json

# Load JSON data from the provided file
with open('marvinthon33.json', 'r') as file:
    data = json.load(file)

# Initialize counters for call types
call_stats = {
    "Outgoing": 0,
    "Missed": 0,
    "TotalCalls": 0,
    "FrequentCallers": {}
}

# Analyze the call logs
for device, logs in data['CallLog'].items():
    for date, entries in logs.items():
        for time, details in entries.items():
            call_type = details['callType']
            contact_name = details['contactName']

            # Count outgoing and missed calls
            if call_type in call_stats:
                call_stats[call_type] += 1
            
            # Count total calls
            call_stats["TotalCalls"] += 1
            
            # Count frequent callers
            if call_type == "Outgoing":
                if contact_name in call_stats["FrequentCallers"]:
                    call_stats["FrequentCallers"][contact_name] += 1
                else:
                    call_stats["FrequentCallers"][contact_name] = 1

# Prepare TypeScript output
typescript_output = f"""
// CallTypeAnalysis.ts

export const callTypeStats = {{
    Outgoing: {call_stats['Outgoing']},
    Missed: {call_stats['Missed']},
    TotalCalls: {call_stats['TotalCalls']},
    FrequentCallers: {json.dumps(call_stats['FrequentCallers'], indent=4)}
}};
"""

# Write the TypeScript output to a file
with open('CallTypeAnalysis.ts', 'w') as ts_file:
    ts_file.write(typescript_output)

print("Call type analysis has been written to CallTypeAnalysis.ts")