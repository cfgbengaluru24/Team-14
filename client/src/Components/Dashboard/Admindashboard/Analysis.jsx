import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import Barchart from './Barchart'

const Analysis = () => {
  const [isGraphical, setIsGraphical] = useState(true);

  const toggleView = () => {
    setIsGraphical(!isGraphical);
  };

  const renderGraphicalAnalysis = () => {
    return (
      <div className="graphical-analysis">
        <h2>Graphical Analysis</h2>
        <Barchart/>
      </div>
    );
  };

  const renderManualAnalysis = () => {
    return (
      <div className="manual-analysis">
        <h2>Manual Analysis</h2>
        <div>
          <h3>Individual Patient</h3>
          <p>Comparison with previous data...</p>
          {/* Replace with actual manual data */}
        </div>
        <div>
          <h3>All Students</h3>
          <p>Comparison with previous data...</p>
          {/* Replace with actual manual data */}
        </div>
      </div>
    );
  };

  return (
    <div className="analysis-container">
      <div className="toggle-container">
        <button onClick={toggleView}>
          {isGraphical ? 'Switch to Manual' : 'Switch to Graphical'}
        </button>
      </div>
      {isGraphical ? renderGraphicalAnalysis() : renderManualAnalysis()}
    </div>
  );
};

export default Analysis;
