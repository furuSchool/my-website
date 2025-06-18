// components/CodeToggle.tsx
import React, { useState, FC } from 'react';

interface CodeToggleProps {
  children: string;
  language?: string;
  title?: string;
}

const CodeToggle: FC<CodeToggleProps> = ({ children, language, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="my-2">
      <h4
        onClick={() => setIsOpen(!isOpen)}
        style={{ margin: 0 }} // h4のデフォルトマージンをリセット
      >
        <span>{isOpen ? '▼' : '▶︎'} {title || 'Code Example'}</span>
      </h4>
      {isOpen && (
        <div className="ml-5 mt-1 border-l border-gray-300 pl-4">
          <div className="mb-2">
            <pre className="m-0 p-4 overflow-auto bg-[var(--ifm-code-background)] text-[var(--ifm-code-color)] text-[0.9em] leading-tight rounded">
              <code className={`language-${language || 'text'}`}>
                {children}
              </code>
            </pre>
          </div>
          <hr className="border-t border-gray-100 mt-2" style={{ border: 'none' }} />
        </div>
      )}
    </div>
  );
};

export default CodeToggle;