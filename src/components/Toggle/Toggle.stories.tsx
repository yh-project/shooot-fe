import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';
import { ToggleColors, ToggleSizes } from './Toggle.types';

const meta = {
  title: 'UI/Common/Toggle',
  component: Toggle,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['!autodocs'],
  argTypes: {
    color: {
      description: '적용할 토글 dot 색상',
    },
    size: {
      description: '적용할 토글 크기',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  args: {
    color: 'primary',
    size: 'medium',
  },
};

const sizeList: ToggleSizes[] = ['small', 'medium', 'large'];
const colorList: ToggleColors[] = [
  'primary',
  'secondary',
  'get',
  'post',
  'put',
  'patch',
  'delete',
  'grey',
];

export const Sizes: Story = {
  args: { ...Primary.args },
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {sizeList.map((size) => (
        <Toggle key={size} {...args} size={size} />
      ))}
    </div>
  ),
};

export const Colors: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {colorList.map((color, idx: number) => (
        <Toggle key={idx} {...args} color={color} />
      ))}
    </div>
  ),
};
