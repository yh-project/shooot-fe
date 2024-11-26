import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';
import { useTheme } from '@emotion/react';
import { SpinnerColors, SpinnerSizes } from './Spinner.types';

const meta = {
  title: 'UI/Common/Spinner',
  component: Spinner,
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
  argTypes: {},
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
  args: {
    size: 'medium',
    color: 'primary',
  },
  render: (args) => {
    const theme = useTheme();
    return (
      <div
        style={{
          padding: '1rem',
          backgroundColor: theme.palette.background['200'],
        }}
      >
        <Spinner {...args} />
      </div>
    );
  },
};

const sizeList: SpinnerSizes[] = ['small', 'medium', 'large'];
export const Sizes: Story = {
  args: { ...Primary.args },
  render: (args) => {
    const theme = useTheme();
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1rem',
          backgroundColor: theme.palette.background['100'],
        }}
      >
        {sizeList.map((size, idx: number) => (
          <Spinner key={idx} {...args} size={size} />
        ))}
      </div>
    );
  },
};

const colorList: SpinnerColors[] = [
  'primary',
  'secondary',
  'get',
  'post',
  'put',
  'patch',
  'delete',
  'grey',
  'danger',
  'warning',
  'light',
  'dark',
];
export const Colors: Story = {
  args: { ...Primary.args },
  render: (args) => {
    const theme = useTheme();
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1rem',
          backgroundColor: theme.palette.background['100'],
        }}
      >
        {colorList.map((color, idx: number) => (
          <Spinner key={idx} {...args} color={color} />
        ))}
      </div>
    );
  },
};
