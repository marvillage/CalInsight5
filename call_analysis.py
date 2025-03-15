import json
from collections import defaultdict

# Load JSON data
with open('marvinthon33.json') as f:
    data = json.load(f)

# Initialize counters
call_counts = defaultdict(int)
frequent_callers = defaultdict(int)

# Analyze call logs
for device, logs in data['CallLog'].items():
    for date, entries in logs.items():
        for time, details in entries.items():
            call_type = details['callType']
            contact_name = details['contactName']
            
            # Count calls by type
            if call_type in ['Outgoing', 'Missed']:
                call_counts[call_type] += 1
            
            # Count frequent callers
            frequent_callers[contact_name] += 1

# Display results
print("Call Counts:")
for call_type, count in call_counts.items():
    print(f"{call_type}: {count}")

print("\nFrequent Callers:")
for caller, count in frequent_callers.items():
    if count > 1:  # Adjust threshold as needed
        print(f"{caller}: {count} calls")