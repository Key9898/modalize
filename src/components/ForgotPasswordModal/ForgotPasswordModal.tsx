import { useState } from 'react';
import { Modal } from '../Modal';
import { CheckCircle, AlertCircle } from 'lucide-react';
import type { ForgotPasswordModalProps } from '../../types';

/**
 * Pre-built forgot password modal.
 */
export function ForgotPasswordModal({
  isOpen,
  onClose,
  onSubmit,
  onLogin,
  title = 'Reset Password',
  loading = false,
  error,
  successMessage,
  radius,
}: ForgotPasswordModalProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" radius={radius}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        {successMessage ? (
          <div className="flex flex-col items-center text-center py-12 px-2">
            <CheckCircle className="h-16 w-16 text-success mb-6" />
            <h3 className="text-xl font-bold mb-3 tracking-tight">Check your email</h3>
            <p className="text-base-content/60 leading-relaxed text-sm">{successMessage}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p className="text-sm text-base-content/70">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>

            {error && (
              <div className="alert alert-error text-sm">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                disabled={loading}
                autoComplete="email"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading && (
                <span className="loading loading-spinner loading-sm" />
              )}
              Send Reset Link
            </button>
          </form>
        )}

        {onLogin && (
          <p className="text-center text-sm text-base-content/60 mt-4">
            Remember your password?{' '}
            <button
              type="button"
              className="btn btn-link btn-xs text-primary no-underline hover:underline p-0"
              onClick={onLogin}
            >
              Sign in
            </button>
          </p>
        )}
      </Modal.Body>
    </Modal>
  );
}
