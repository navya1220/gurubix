import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesignBoxes from './components/DesignBoxes/DesignBoxes';
import TestDetails from "./components/TestDetails/TestDetails";
import InstructionPage from './components/InstructionPage/InstructionPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesignBoxes />} />
        <Route path="/tests/:category" element={<TestDetails />} />
        <Route path="/instructions/:testId" element={<InstructionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
