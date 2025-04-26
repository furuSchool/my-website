import { useState } from 'react';

export default function Toggle({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-2">
      <h4
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center gap-1"
      >
        <span>{open ? '▼' : '▶︎'} {title}</span>
      </h4>
      {open && (
        <div className="ml-5 mt-1 border-l border-gray-300 pl-4">
          <div className="mb-2">
            {children}
          </div>
          <hr className="border-t border-gray-100 mt-2" />
        </div>
      )}
    </div>
  );
}