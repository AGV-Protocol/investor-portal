'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (key: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated on page load
    const savedAuth = localStorage.getItem('agv_auth');
    if (savedAuth) {
      try {
        const authData = JSON.parse(savedAuth);
        if (authData.isAuthenticated) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error parsing saved auth data:', error);
        localStorage.removeItem('agv_auth');
      }
    }
    setLoading(false);
  }, []);

  const login = async (key: string): Promise<boolean> => {
    // Simple key-based authentication - key must be 'agv2025vc'
    if (key === 'agv2025vc') {
      setIsAuthenticated(true);
      
      // Save to localStorage
      localStorage.setItem('agv_auth', JSON.stringify({
        isAuthenticated: true
      }));
      
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('agv_auth');
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      login,
      logout,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
