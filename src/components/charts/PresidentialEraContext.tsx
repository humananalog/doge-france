"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "doge-france.show-presidential-eras";

type PresidentialEraContextValue = {
  showEras: boolean;
  setShowEras: (value: boolean) => void;
  toggleEras: () => void;
  hydrated: boolean;
};

const PresidentialEraContext = createContext<PresidentialEraContextValue | null>(
  null,
);

export function PresidentialEraProvider({ children }: { children: ReactNode }) {
  const [showEras, setShowErasState] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === "0" || raw === "false") {
        setShowErasState(false);
      } else if (raw === "1" || raw === "true") {
        setShowErasState(true);
      }
    } catch {
      /* private mode / blocked storage */
    }
    setHydrated(true);
  }, []);

  const setShowEras = useCallback((value: boolean) => {
    setShowErasState(value);
    try {
      localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, []);

  const toggleEras = useCallback(() => {
    setShowErasState((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ showEras, setShowEras, toggleEras, hydrated }),
    [showEras, setShowEras, toggleEras, hydrated],
  );

  return (
    <PresidentialEraContext.Provider value={value}>
      {children}
    </PresidentialEraContext.Provider>
  );
}

export function usePresidentialEras() {
  const ctx = useContext(PresidentialEraContext);
  if (!ctx) {
    throw new Error("usePresidentialEras must be used within PresidentialEraProvider");
  }
  return ctx;
}
