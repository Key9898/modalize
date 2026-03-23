import type { Meta, StoryObj } from '@storybook/react';
import { SignupModal } from './SignupModal';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof SignupModal> = {
  title: 'Components/Auth/SignupModal',
  component: SignupModal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SignupModal>;

export const Default: Story = {
  render: args => {
    const { isOpen, open, close } = useModal(true);
    return (
      <>
        <button className="btn" onClick={open}>Open Signup</button>
        <SignupModal 
           {...args} 
           isOpen={isOpen} 
           onClose={close} 
        />
      </>
    );
  },
  args: {
    title: 'Create an Account',
    showTerms: true,
    onSubmit: data => alert(`Signup submitted: ${data.email}`),
    onLogin: () => alert('Login clicked')
  },
};
