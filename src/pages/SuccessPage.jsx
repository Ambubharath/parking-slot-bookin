import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/sucess.css';

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slot, id } = location.state || {};

  // Redirect to ReceiptPage after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/receipt', { state: { slot, id } });
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate, slot, id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-3xl font-bold mb-4">✅ Slot {slot} Confirmed!</h1>
      <p className="text-xl">Redirecting to Receipt...</p>
    </div>
  );
};

export default SuccessPage;
