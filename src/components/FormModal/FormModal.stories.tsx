import type { Meta, StoryObj } from '@storybook/react';
import { FormModal } from './FormModal';
import { useModal } from '../../hooks/useModal';

const meta: Meta<typeof FormModal> = {
  title: 'Components/App/FormModal',
  component: FormModal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormModal>;

export const Default: Story = {
  render: args => {
    const { isOpen, open, close } = useModal(true);
    return (
      <>
        <button className="btn" onClick={open}>
          Open Form
        </button>
        <FormModal {...args} isOpen={isOpen} onClose={close}>
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="John Doe"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="john@example.com"
              />
            </div>
          </div>
        </FormModal>
      </>
    );
  },
  args: {
    title: 'Edit Profile',
    submitText: 'Save Changes',
    onSubmit: () => alert(`Form Submitted`),
  },
};
