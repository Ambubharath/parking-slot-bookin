import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import MainPage from './pages/MainPage';
import BookingPage from './pages/BookingPage';
import SlotPage from './pages/SlotPage';
import SuccessPage from './pages/SuccessPage';
import ReceiptPage from './pages/ReceiptPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/booking/:id" element={<BookingPage />} />
      <Route path="/slot/:id" element={<SlotPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/receipt" element={<ReceiptPage />} />
    </Routes>
  );
}

export default App;
