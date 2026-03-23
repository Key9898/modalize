import type { Meta, StoryObj } from '@storybook/react';
import { ForgotPasswordModal } from './ForgotPasswordModal';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof ForgotPasswordModal> = {
  title: 'Components/Auth/ForgotPasswordModal',
  component: ForgotPasswordModal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ForgotPasswordModal>;

export const Default: Story = {
  render: args => {
    const { isOpen, open, close } = useModal(true);
    return (
      <>
        <button className="btn" onClick={open}>Open Forgot Password</button>
        <ForgotPasswordModal 
           {...args} 
           isOpen={isOpen} 
           onClose={close} 
        />
      </>
    );
  },
  args: {
    onSubmit: email => alert(`Reset link sent to: ${email}`),
    onLogin: () => alert('Back to Login')
  },
};
