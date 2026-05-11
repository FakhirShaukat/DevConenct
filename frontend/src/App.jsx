import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main.jsx'
import SelectionPage from './pages/SelectionPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DeveloperDash from './pages/DeveloperDash.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import SignUp from './pages/SignUp.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/selectionpage" element={<SelectionPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/developerdashboard" element={<DeveloperDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
