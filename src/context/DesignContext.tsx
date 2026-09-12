"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type DesignContextType = {
  activeDesign: number;
  setActiveDesign: (id: number) => void;
};

const DesignContext = createContext<DesignContextType | undefined>(undefined);

export function DesignProvider({ children }: { children: ReactNode }) {
  const [activeDesign, setActiveDesign] = useState<number>(22);

  return (
    <DesignContext.Provider value={{ activeDesign, setActiveDesign }}>
      {children}
    </DesignContext.Provider>
  );
}

export function useDesign() {
  const context = useContext(DesignContext);
  if (context === undefined) {
    throw new Error("useDesign must be used within a DesignProvider");
  }
  return context;
}
