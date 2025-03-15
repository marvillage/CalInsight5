export const callRiskData = {
    "TECNO LH8n": {
      "19 Oct 2024": {
        "00:32:31": {
          date: "19 Oct 2024",
          name: "Snehil Shah",
          duration: "57 sec",
          riskAnalysis: {
            highLatencyRisk: true,
            packetLossRisk: false,
            interruptionRisk: "Low",
            connectionStabilityRisk: "Medium",
            responseDelayRisk: "Low",
            MOSRisk: "Low",
            overallRiskLevel: "Medium",
            riskFactors: ["Latency Spike", "Moderate Jitter"],
            recommendedActions: [
              "Optimize network settings",
              "Monitor future calls for latency trends"
            ]
          }
        },
        "01:15:43": {
          date: "19 Oct 2024",
          name: "Gaurav Mishra",
          duration: "1 min 23 sec",
          riskAnalysis: {
            highLatencyRisk: false,
            packetLossRisk: true,
            interruptionRisk: "Medium",
            connectionStabilityRisk: "High",
            responseDelayRisk: "Medium",
            MOSRisk: "Medium",
            overallRiskLevel: "High",
            riskFactors: ["Packet Loss", "High Jitter"],
            recommendedActions: [
              "Check network hardware",
              "Limit concurrent network usage",
              "Follow up on next call quality"
            ]
          }
        },
        "02:10:25": {
          date: "19 Oct 2024",
          name: "Abhishek Jain",
          duration: "45 sec",
          riskAnalysis: {
            highLatencyRisk: true,
            packetLossRisk: false,
            interruptionRisk: "High",
            connectionStabilityRisk: "Medium",
            responseDelayRisk: "High",
            MOSRisk: "Medium",
            overallRiskLevel: "High",
            riskFactors: ["Latency", "Multiple Interruptions"],
            recommendedActions: [
              "Ensure stable network connection",
              "Advise user to reset router",
              "Monitor next few calls closely"
            ]
          }
        },
        "02:45:59": {
          date: "19 Oct 2024",
          name: "Sumedh Patel",
          duration: "1 min 12 sec",
          riskAnalysis: {
            highLatencyRisk: false,
            packetLossRisk: true,
            interruptionRisk: "Medium",
            connectionStabilityRisk: "Low",
            responseDelayRisk: "Low",
            MOSRisk: "Low",
            overallRiskLevel: "Low",
            riskFactors: ["Packet Loss"],
            recommendedActions: [
              "Monitor for further packet loss",
              "Verify network health for next call"
            ]
          }
        },
        "03:20:14": {
          date: "19 Oct 2024",
          name: "Ravi Kumar",
          duration: "2 min 5 sec",
          riskAnalysis: {
            highLatencyRisk: true,
            packetLossRisk: true,
            interruptionRisk: "High",
            connectionStabilityRisk: "High",
            responseDelayRisk: "Medium",
            MOSRisk: "Low",
            overallRiskLevel: "High",
            riskFactors: ["Latency", "Packet Loss", "Multiple Interruptions"],
            recommendedActions: [
              "Reset network devices",
              "Provide feedback to employee",
              "Analyze trends for recurring issues"
            ]
          }
        }
      }
    }
  };
  