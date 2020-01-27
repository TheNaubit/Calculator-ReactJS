import React from 'react';

// Import the style of this component
import './app.scss';

// And also the calculator component
import Calculator from './../calculator/calculator';

function App() {
  return (
    <div className="app">
      <div className="calculator-wrapper">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
