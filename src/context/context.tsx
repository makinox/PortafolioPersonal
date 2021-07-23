import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext({
  isDark: false,
  HandleIsDark: () => {},
});

export const AppProvider = ({ children }: { children: any }) => {
  const [isDark, setIsDark] = useState<boolean>(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  function HandleIsDark(): void {
    setIsDark((prev) => {
      localStorage.setItem('isDark', JSON.stringify(!prev));
      return !prev;
    });
  }

  function CheckStorageState(): void {
    try {
      const darkResult = localStorage.getItem('isDark');
      if (darkResult !== null) {
        setIsDark(JSON.parse(darkResult));
      }
    } catch (error) {
      return console.error({ error: true, message: error });
    }
  }

  useEffect(CheckStorageState, []);

  return (
    <AppContext.Provider
      value={{
        isDark,
        HandleIsDark,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
