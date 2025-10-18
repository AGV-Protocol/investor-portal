'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiKey, FiEye, FiEyeOff } from 'react-icons/fi';
import Button from './Button';
import Card from './Card';

interface KeyFormProps {
  onLogin: (key: string) => Promise<boolean>;
  loading?: boolean;
}

export default function KeyForm({ onLogin, loading = false }: KeyFormProps) {
  const [key, setKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const success = await onLogin(key);
      if (!success) {
        setError('Invalid access key. Please try again.');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#223256]/5 to-[#4FACFE]/5 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <Card className="p-8 shadow-xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#223256] to-[#4FACFE] rounded-full flex items-center justify-center mx-auto mb-4">
              <FiKey className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              AGV Investor Portal
            </h2>
            <p className="text-muted-foreground">
              Enter your access key to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="key" className="block text-sm font-medium text-foreground mb-2">
                Access Key
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiKey className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="key"
                  name="key"
                  type={showKey ? 'text' : 'password'}
                  required
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                  placeholder="Enter your access key"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowKey(!showKey)}
                >
                  {showKey ? (
                    <FiEyeOff className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                  ) : (
                    <FiEye className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
              >
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isSubmitting || loading}
            >
              {isSubmitting ? 'Authenticating...' : 'Access Portal'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              For access credentials, please contact the AGV team.
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
