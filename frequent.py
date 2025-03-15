import json

# Load the JSON data
with open('marvinthon33.json', 'r') as f:
    data = json.load(f)

# Initialize a dictionary to count calls
caller_counts = {}

# Analyze the call logs
for device in data['CallLog']:
    for date in data['CallLog'][device]:
        for time in data['CallLog'][device][date]:
            call_info = data['CallLog'][device][date][time]
            call_type = call_info['callType']
            contact_name = call_info['contactName']

            # Count outgoing and missed calls
            if call_type in ['Outgoing', 'Missed']:
                if contact_name in caller_counts:
                    caller_counts[contact_name] += 1
                else:
                    caller_counts[contact_name] = 1

# Filter frequent callers (more than 1 call)
frequent_callers = {name: count for name, count in caller_counts.items() if count > 1}

# Write to TypeScript file
with open('frequent.ts', 'w') as ts_file:
    ts_file.write("export const frequentCallers = ")
    json.dump(frequent_callers, ts_file)
    ts_file.write(";\n")

print("Frequent callers have been written to frequent.ts")