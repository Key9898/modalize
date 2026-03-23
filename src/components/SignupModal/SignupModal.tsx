import { useState } from 'react';
import { Modal } from '../Modal';
import { AlertCircle, CheckCircle } from 'lucide-react';
import type { SignupModalProps, SignupData } from '../../types';

/**
 * Pre-built signup/registration modal.
 */
export function SignupModal({
  isOpen,
  onClose,
  onSubmit,
  onLogin,
  title = 'Create Account',
  loading = false,
  error,
  successMessage,
  showTerms = false,
  termsUrl = '#',
  privacyUrl = '#',
  fields = ['name', 'email', 'password', 'confirmPassword'],
  radius,
}: SignupModalProps) {
  const [formData, setFormData] = useState<SignupData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const updateField = (field: keyof SignupData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const passwordsMatch =
    formData.password === formData.confirmPassword ||
    formData.confirmPassword === '';

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" radius={radius}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="alert alert-error text-sm">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}
          {successMessage && (
            <div className="alert alert-success text-sm text-success-content">
              <CheckCircle className="h-5 w-5 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {fields.includes('name') && (
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={e => updateField('name', e.target.value)}
                disabled={loading}
                autoComplete="name"
              />
            </div>
          )}

          {fields.includes('email') && (
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={e => updateField('email', e.target.value)}
                required
                disabled={loading}
                autoComplete="email"
              />
            </div>
          )}

          {fields.includes('password') && (
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                value={formData.password}
                onChange={e => updateField('password', e.target.value)}
                required
                disabled={loading}
                autoComplete="new-password"
                minLength={8}
              />
            </div>
          )}

          {fields.includes('confirmPassword') && (
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={`input input-bordered w-full ${!passwordsMatch ? 'input-error' : ''}`}
                value={formData.confirmPassword}
                onChange={e => updateField('confirmPassword', e.target.value)}
                required
                disabled={loading}
                autoComplete="new-password"
              />
              {!passwordsMatch && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    Passwords do not match
                  </span>
                </label>
              )}
            </div>
          )}

          {showTerms && (
            <label className="label cursor-pointer justify-start gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-sm checkbox-primary"
                checked={acceptTerms}
                onChange={e => setAcceptTerms(e.target.checked)}
              />
              <span className="label-text text-xs">
                I agree to the{' '}
                <a href={termsUrl} className="link link-primary" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href={privacyUrl} className="link link-primary" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </span>
            </label>
          )}

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading || !passwordsMatch || (showTerms && !acceptTerms)}
          >
            {loading && <span className="loading loading-spinner loading-sm" />}
            Create Account
          </button>

          {onLogin && (
            <p className="text-center text-sm text-base-content/60">
              Already have an account?{' '}
              <button
                type="button"
                className="btn btn-link btn-xs text-primary no-underline hover:underline p-0"
                onClick={onLogin}
              >
                Sign in
              </button>
            </p>
          )}
        </form>
      </Modal.Body>
    </Modal>
  );
}
