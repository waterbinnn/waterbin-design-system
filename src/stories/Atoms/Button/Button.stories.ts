import { Button } from '@/components/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    color: {
      control: { type: 'radio' },
    },
    kind: {
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    loading: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    color: 'blue',
    kind: 'filled',
    children: '버튼',
    disabled: false,
    loading: false,
  },
};
