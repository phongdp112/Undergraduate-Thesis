import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/DashBoard';
import DevicePage from './pages/DevicePage';
import LoginPage from './pages/LoginPage';
import ProtectRoute from './routes/ProtectRoute';
import Stm32Page from './pages/Stm32Page';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>

        <Route element={<ProtectRoute/>}>
        <Route path="/stm32" element={<Stm32Page />}/>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/device-sensor" element={<DevicePage/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
