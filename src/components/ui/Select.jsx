// src/components/ui/Select.jsx
import React, { useState } from 'react';

export const Select = ({ children, onValueChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onValueChange) onValueChange(e.target.value);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="" disabled>Select an option</option>
      {children}
    </select>
  );
};

export const SelectContent = ({ children }) => {
  return <>{children}</>;
};

export const SelectItem = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

export const SelectTrigger = ({ id, children }) => {
  return (
    <div id={id} className="relative">
      {children}
    </div>
  );
};

export const SelectValue = ({ placeholder }) => {
  return <span>{placeholder}</span>;
};
