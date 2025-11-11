'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (key: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Current valid key - change this when you want to invalidate all sessions
const VALID_KEY = 'agambaaqv2025vc';

// Generate a simple hash of the key for version checking
function getKeyHash(key: string): string {
  // Simple hash function - you can use a more sophisticated one if needed
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    const char = key.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash.toString();
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated on page load
    const savedAuth = localStorage.getItem('agv_auth');
    if (savedAuth) {
      try {
        const authData = JSON.parse(savedAuth);
        const currentKeyHash = getKeyHash(VALID_KEY);
        
        // Verify that the stored key hash matches the current key hash
        // If the key was changed, the hash won't match and we'll invalidate the session
        if (authData.isAuthenticated && authData.keyHash === currentKeyHash) {
          setIsAuthenticated(true);
        } else {
          // Key has changed or hash doesn't match - invalidate session
          localStorage.removeItem('agv_auth');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error parsing saved auth data:', error);
        localStorage.removeItem('agv_auth');
        setIsAuthenticated(false);
      }
    }
    setLoading(false);
  }, []);

  const login = async (key: string): Promise<boolean> => {
    if (key === VALID_KEY) {
      setIsAuthenticated(true);
      
      // Save to localStorage with the current key hash
      // This allows us to detect when the key changes
      const keyHash = getKeyHash(VALID_KEY);
      localStorage.setItem('agv_auth', JSON.stringify({
        isAuthenticated: true,
        keyHash: keyHash
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
