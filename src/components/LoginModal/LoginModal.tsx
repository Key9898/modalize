import { useState } from 'react';
import { Modal } from '../Modal';
import { AlertCircle, CheckCircle } from 'lucide-react';
import type { LoginModalProps } from '../../types';

/**
 * Pre-built login modal with email/password form.
 */
export function LoginModal({
  isOpen,
  onClose,
  onSubmit,
  onForgotPassword,
  onSignup,
  title = 'Welcome Back',
  loading = false,
  error,
  successMessage,
  showRememberMe = false,
  socialLogins,
}: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
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

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              disabled={loading}
              autoComplete="current-password"
            />
          </div>

          <div className="flex items-center justify-between">
            {showRememberMe && (
              <label className="label cursor-pointer gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm checkbox-primary"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                />
                <span className="label-text text-xs">Remember me</span>
              </label>
            )}
            {onForgotPassword && (
              <button
                type="button"
                className="btn btn-link btn-xs text-primary no-underline hover:underline p-0"
                onClick={onForgotPassword}
              >
                Forgot password?
              </button>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading && <span className="loading loading-spinner loading-sm" />}
            Sign In
          </button>

          {socialLogins && socialLogins.length > 0 && (
            <>
              <div className="divider text-xs text-base-content/50">OR</div>
              <div className="flex flex-col gap-2">
                {socialLogins.map(social => (
                  <button
                    key={social.provider}
                    type="button"
                    className="btn btn-outline btn-sm w-full capitalize"
                    onClick={social.onClick}
                    disabled={loading}
                  >
                    {social.icon && <span className="mr-2">{social.icon}</span>}
                    Continue with {social.provider}
                  </button>
                ))}
              </div>
            </>
          )}

          {onSignup && (
            <p className="text-center text-sm text-base-content/60">
              Don't have an account?{' '}
              <button
                type="button"
                className="btn btn-link btn-xs text-primary no-underline hover:underline p-0"
                onClick={onSignup}
              >
                Sign up
              </button>
            </p>
          )}
        </form>
      </Modal.Body>
    </Modal>
  );
}
