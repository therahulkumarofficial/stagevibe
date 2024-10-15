// src/components/ui/use-toast.jsx
import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = ({ title, description }) => {
    setToast({ title, description });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {toast && (
        <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded shadow-lg">
          <strong>{toast.title}</strong>
          <p>{toast.description}</p>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
