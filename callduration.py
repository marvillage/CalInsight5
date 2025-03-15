import json
import pandas as pd

# Load the call log data from the provided JSON file
file_path = 'marvinthon33.json'
with open(file_path, 'r') as f:
    call_log_data = json.load(f)

# Extracting call data
call_data = []
for device, dates in call_log_data["CallLog"].items():
    for date, logs in dates.items():
        for time, details in logs.items():
            call_data.append({
                "callDate": details["callDate"],
                "callDuration": details["callDuration"],
                "callTime": details["callTime"],
                "callType": details["callType"],
                "contactName": details["contactName"],
                "phNumber": details["phNumber"]
            })

# Convert the call data into a DataFrame
df = pd.DataFrame(call_data)

# Convert duration to seconds for calculations
def convert_duration_to_seconds(duration):
    try:
        if "sec" in duration:
            return int(duration.split(" ")[0])
        elif "min" in duration:
            min_sec = duration.split(" ")
            return int(min_sec[0]) * 60 + (int(min_sec[2]) if len(min_sec) > 2 else 0)
        return 0
    except:
        return 0

# Add a new column for duration in seconds
df['callDurationSec'] = df['callDuration'].apply(convert_duration_to_seconds)

# Convert call time to a 24-hour format and extract the hour
df['callHour'] = pd.to_datetime(df['callTime'], errors='coerce').dt.hour

# 1. Duration on different dates
duration_by_date = df.groupby('callDate')['callDurationSec'].sum()

# 2. Peak hour for calls
peak_hour = df['callHour'].value_counts().idxmax()

# 3. Average call duration
average_duration = df['callDurationSec'].mean()

# 4. Calls during morning shift (6 AM - 12 PM)
morning_shift = df[(df['callHour'] >= 6) & (df['callHour'] < 12)]
total_morning_calls = morning_shift.shape[0]
morning_duration = morning_shift['callDurationSec'].sum()

# 5. Calls during evening shift (12 PM - 6 PM)
evening_shift = df[(df['callHour'] >= 12) & (df['callHour'] < 18)]
total_evening_calls = evening_shift.shape[0]
evening_duration = evening_shift['callDurationSec'].sum()

# 6. Calls during night shift (6 PM - 6 AM)
night_shift = df[(df['callHour'] >= 18) | (df['callHour'] < 6)]
total_night_calls = night_shift.shape[0]
night_duration = night_shift['callDurationSec'].sum()

# Prepare the stats in a dictionary
call_stats = {
    "durationByDate": {str(key): int(value) for key, value in duration_by_date.items()},
    "peakHour": int(peak_hour),
    "averageCallDurationSec": round(average_duration, 2),
    "morningShift": {
        "totalCalls": int(total_morning_calls),
        "totalDurationSec": int(morning_duration)
    },
    "eveningShift": {
        "totalCalls": int(total_evening_calls),
        "totalDurationSec": int(evening_duration)
    },
    "nightShift": {
        "totalCalls": int(total_night_calls),
        "totalDurationSec": int(night_duration)
    }
}

# Convert the stats to a TypeScript file format
ts_stats_file_path = 'callStats.ts'
ts_stats_content = "export const callStats = " + json.dumps(call_stats, indent=2) + ";"
with open(ts_stats_file_path, 'w') as ts_stats_file:
    ts_stats_file.write(ts_stats_content)

print("Call stats successfully saved to TypeScript file:", ts_stats_file_path)
