import { useState } from 'react';

export default function Button({ label }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-stone-500 p-2 rounded-full px-4 relative shadow-lg">
      <p className="text-center">{label}</p>
      <button
        className={`text-stone-800 bg-stone-100 rounded-full absolute -top-3 w-full left-1.5 shadow-lg transform transition-transform duration-200 ease-in-out ${isActive ? 'translate-y-1 -translate-x-1' : ''} flex items-center justify-center`}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onMouseLeave={() => setIsActive(false)}
        style={{ whiteSpace: 'nowrap', minWidth: '100px', outline: 'none' }}  // Removing focus outline
      >
        {label}
      </button>
    </div>
  );
}
