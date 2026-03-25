import type { Meta, StoryObj } from '@storybook/react';
import { LoginModal } from './LoginModal';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof LoginModal> = {
  title: 'Components/Auth/LoginModal',
  component: LoginModal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Default: Story = {
  render: args => {
    const { isOpen, open, close } = useModal(true);
    return (
      <>
        <button className="btn" onClick={open}>
          Open Login
        </button>
        <LoginModal {...args} isOpen={isOpen} onClose={close} />
      </>
    );
  },
  args: {
    title: 'Welcome Back',
    showRememberMe: true,
    socialLogins: [
      { provider: 'google', onClick: () => alert('Google login clicked') },
    ],
    onSubmit: data => alert(`Login submitted: ${data.email}`),
    onForgotPassword: () => alert('Forgot password clicked'),
    onSignup: () => alert('Signup clicked'),
  },
};
