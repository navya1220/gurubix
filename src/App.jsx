import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesignBoxes from './components/DesignBoxes/DesignBoxes';
import TestDetails from "./components/TestDetails/TestDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesignBoxes />} />
        <Route path="/tests/:category" element={<TestDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
