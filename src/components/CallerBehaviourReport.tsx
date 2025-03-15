import React from 'react';
import './CallerBehaviourReport.scss';
import { BehaviorReport } from '../../CallerBehaviourReport';

const CallerBehaviourReport: React.FC = () => {
    return (
        <div className="behavior-report-container">
            <h2>Shahswat's Employee Behavior Report</h2>
            <table className="behavior-report-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Interactions</th>
                        <th>Politeness</th>
                        <th>Responsiveness</th>
                        <th>Helpfulness</th>
                        <th>Overall Score</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {BehaviorReport.map((report, index) => (
                        <tr key={index}>
                            <td>{report.date}</td>
                            <td>{report.interactionCount}</td>
                            <td>{report.politenessScore.toFixed(2)}</td>
                            <td>{report.responsivenessScore.toFixed(2)}</td>
                            <td>{report.helpfulnessScore.toFixed(2)}</td>
                            <td>{report.overallScore.toFixed(2)}</td>
                            <td>{report.comments}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CallerBehaviourReport;
