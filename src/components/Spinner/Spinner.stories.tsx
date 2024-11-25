import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';
import { useTheme } from '@emotion/react';

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
  args: {},
};
