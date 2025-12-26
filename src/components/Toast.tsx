import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const ToastContext = createContext<{ notify: (message: string) => void } | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<string | null>(null);

  const notify = useCallback((nextMessage: string) => {
    setMessage(nextMessage);
    setTimeout(() => setMessage(null), 2400);
  }, []);

  const value = useMemo(() => ({ notify }), [notify]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {message ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-4 inset-x-0 mx-auto flex max-w-md justify-center px-4 sm:px-6"
        >
          <div className="rounded-full bg-slate-900/90 px-4 py-2 text-sm text-white shadow-lg backdrop-blur dark:bg-slate-100/90 dark:text-slate-900">
            {message}
          </div>
        </div>
      ) : null}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};
