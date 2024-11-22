import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';
import { useTheme } from '@emotion/react';
import { IconColors, IconSizes } from './Icon.types';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

const meta = {
  title: 'UI/Common/Icon',
  component: Icon,
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
    children: {
      description: '표시할 아이콘',
    },
    size: {
      description: '적용할 아이콘 크기',
    },
    color: {
      description: '적용할 아이콘 색상',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    children: 'Typography',
    size: 'md',
    color: 'primary',
  },
  render: (args) => (
    <Icon {...args}>
      <RocketLaunchIcon />
    </Icon>
  ),
};

const sizeList: IconSizes[] = [
  '3xs',
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
];
const colorList: IconColors[] = [
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

export const SizesWithKeyword: Story = {
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
          backgroundColor: theme.palette.background['200'],
        }}
      >
        {sizeList.map((size, idx: number) => (
          <Icon key={idx} {...args} size={size}>
            <RocketLaunchIcon />
          </Icon>
        ))}
      </div>
    );
  },
};
export const Colors: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => {
    const theme = useTheme();
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1rem',
          backgroundColor: theme.palette.background['200'],
        }}
      >
        {colorList.map((color, idx: number) => (
          <Icon key={idx} {...args} color={color}>
            <RocketLaunchIcon />
          </Icon>
        ))}
      </div>
    );
  },
};
