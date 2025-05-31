import HomeApplianceServices, { services } from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ACServicePage from './Components/services/Acservice';
import FridgeService from './Components/services/FridgeService';
import WashingService from './Components/services/WashingService';

import React from 'react';
import AircoolerService from './Components/services/AircoolerService';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeApplianceServices />} />
      <Route path="/washing-service" element={<WashingService />} />
      <Route path="/fridge-service" element={<FridgeService />} />
      <Route path="/ac-service" element={<ACServicePage/>} />
      <Route path="/aircooler-service" element={<AircoolerService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
