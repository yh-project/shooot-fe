import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Flex from './Flex';
import { useTheme } from '@emotion/react';
import colorPalette from '../../styles/colorPalette';

const meta = {
  title: 'UI/Common/Flex',
  component: Flex,
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
    flexDirections: {
      description: 'flex 방향',
    },
    justifyContents: {
      description: '수평 정렬',
    },
    alignItems: {
      description: '수직 정렬',
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  args: {
    flexDirections: 'row',
    justifyContents: 'center',
    alignItems: 'center',
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
        <Flex {...args} style={{ columnGap: '3rem' }}>
          <div
            style={{
              width: '5rem',
              height: '5rem',
              backgroundColor: colorPalette.primary['500'],
            }}
          />
          <div
            style={{
              width: '5rem',
              height: '5rem',
              backgroundColor: colorPalette.primary['500'],
            }}
          />
          <div
            style={{
              width: '5rem',
              height: '5rem',
              backgroundColor: colorPalette.primary['500'],
            }}
          />
        </Flex>
      </div>
    );
  },
};
