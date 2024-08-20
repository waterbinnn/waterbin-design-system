import Button from '@/components/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { ReactComponent as IconDownload } from '@/assets/icons/download.svg';
import { ButtonType } from '@/components/Button/ButtonType';
import { colorName } from '@/styles';

const buttonKinds = [
  'filled',
  'outlined',
  'link',
  'icon',
  'iconText',
  'tag',
  'text',
] as const;

const buttonTypes = ['button', 'submit', 'reset'] as const;

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: colorName,
      description: 'Select the color of the button.',
    },
    kind: {
      control: { type: 'select' },
      options: buttonKinds,
      description: 'Select the style of the button.',
    },
    children: {
      control: { type: 'text' },
      description: 'The content inside the button.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the button if true.',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show a loading spinner if true.',
    },
    rounded: {
      control: { type: 'boolean' },
      description: 'Make the button corners rounded if true.',
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['start', 'end'],
      description: 'Position of the icon inside the button.',
    },
    type: {
      control: { type: 'select' },
      options: buttonTypes,
      description: 'The HTML type attribute for the button.',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: Partial<ButtonType> = {
  color: 'blue',
  disabled: false,
  loading: false,
  rounded: false,
  block: false,
  type: 'button',
};

export const Filled: Story = {
  args: {
    ...defaultArgs,
    kind: 'filled',
    children: 'Filled',
  },
};

export const Outlined: Story = {
  args: {
    ...defaultArgs,
    kind: 'outlined',
    children: 'Outlined',
    color: 'green',
  },
};

export const IconText: Story = {
  args: {
    ...defaultArgs,
    kind: 'iconText',
    children: '버튼',
    icon: <IconDownload />,
    iconPosition: 'start',
    iconColor: 'yellow',
  },
};

export const Icon: Story = {
  args: {
    ...defaultArgs,
    kind: 'icon',
    icon: <IconDownload />,
    color: 'transparent',
    iconColor: 'black',
  },
};

export const Tag: Story = {
  args: {
    ...defaultArgs,
    kind: 'tag',
    children: 'Tag',
  },
};

export const Link: Story = {
  args: {
    ...defaultArgs,
    kind: 'link',
    children: 'Link',
  },
};

export const Text: Story = {
  args: {
    ...defaultArgs,
    kind: 'text',
    children: 'Text',
  },
};
