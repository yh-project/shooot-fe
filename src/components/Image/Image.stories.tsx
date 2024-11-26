import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';
import { useTheme } from '@emotion/react';
import { useCurTheme } from '../../hooks/useCurTheme';

const meta = {
  title: 'UI/Common/Image',
  component: Image,
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
    width: {
      description: '이미지 너비',
    },
    height: {
      description: '이미지 높이',
    },
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof Image>;

export const Primary: Story = {
  args: {
    width: 5,
    height: 5,
  },
  render: (args) => {
    const theme = useTheme();

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
          backgroundColor: theme.palette.background['200'],
        }}
      >
        <Image
          {...args}
          src="/assets/samples/shooot_ok.png"
          style={{ objectFit: 'cover' }}
        />
        <Image {...args} src="no_image.png" />
      </div>
    );
  },
};
