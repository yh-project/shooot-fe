import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';
import { useTheme } from '@emotion/react';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import { IconButtonColors, IconButtonSizes } from './IconButton.types';

const meta = {
  title: 'UI/Common/IconButton',
  component: IconButton,
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
    variant: {
      description: '적용할 아이콘 버튼 스타일',
    },
    size: {
      description: '적용할 아이콘 버튼 크기',
    },
    color: {
      description: '적용할 아이콘 버튼 색상',
    },
    fullWidth: {
      description: '버튼의 아이콘 너비를 최대로',
    },
    rounded: {
      description: '버튼을 아이콘 둥글게',
    },
    disabled: {
      description: '버튼을 아이콘 동작하지 않게',
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    children: <RocketLaunchIcon />,
    size: 'medium',
    color: 'primary',
    fullWidth: false,
    rounded: false,
    disabled: false,
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
        <IconButton {...args} variant="contained">
          {args.children}
        </IconButton>
        <IconButton {...args} variant="outlined">
          {args.children}
        </IconButton>
      </div>
    );
  },
};

const sizeList: IconButtonSizes[] = ['small', 'medium', 'large'];
export const Sizes: Story = {
  args: { ...Primary.args },
  render: (args) => {
    const theme = useTheme();
    return (
      <>
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
            <IconButton key={idx} {...args} size={size} variant="contained">
              {args.children}
            </IconButton>
          ))}
        </div>
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
            <IconButton key={idx} {...args} size={size} variant="outlined">
              {args.children}
            </IconButton>
          ))}
        </div>
      </>
    );
  },
};

const colorList: IconButtonColors[] = [
  'primary',
  'secondary',
  'get',
  'post',
  'put',
  'patch',
  'delete',
  'grey',
];
export const Colors: Story = {
  args: { ...Primary.args },
  render: (args) => {
    const theme = useTheme();
    return (
      <>
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
            <IconButton key={idx} {...args} color={color} variant="contained">
              {args.children}
            </IconButton>
          ))}
        </div>
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
            <IconButton key={idx} {...args} color={color} variant="outlined">
              {args.children}
            </IconButton>
          ))}
        </div>
      </>
    );
  },
};

export const FullWidth: Story = {
  args: { ...Primary.args },
  render: (args) => {
    const theme = useTheme();
    return (
      <>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: theme.palette.background['100'],
          }}
        >
          <IconButton {...args} variant="contained">
            {args.children}
          </IconButton>
          <IconButton {...args} variant="contained" fullWidth>
            {args.children}
          </IconButton>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: theme.palette.background['100'],
          }}
        >
          <IconButton {...args} variant="outlined">
            {args.children}
          </IconButton>
          <IconButton {...args} variant="outlined" fullWidth>
            {args.children}
          </IconButton>
        </div>
      </>
    );
  },
};

export const Rounded: Story = {
  args: { ...Primary.args },
  render: (args) => {
    const theme = useTheme();
    return (
      <>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: theme.palette.background['100'],
          }}
        >
          <IconButton {...args} variant="contained">
            {args.children}
          </IconButton>
          <IconButton {...args} variant="contained" rounded>
            {args.children}
          </IconButton>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: theme.palette.background['100'],
          }}
        >
          <IconButton {...args} variant="outlined">
            {args.children}
          </IconButton>
          <IconButton {...args} variant="outlined" rounded>
            {args.children}
          </IconButton>
        </div>
      </>
    );
  },
};

export const Disabled: Story = {
  args: { ...Primary.args },
  render: (args) => {
    const theme = useTheme();
    return (
      <>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: theme.palette.background['100'],
          }}
        >
          <IconButton {...args} variant="contained">
            {args.children}
          </IconButton>
          <IconButton {...args} variant="contained" disabled>
            {args.children}
          </IconButton>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: theme.palette.background['100'],
          }}
        >
          <IconButton {...args} variant="outlined">
            {args.children}
          </IconButton>
          <IconButton {...args} variant="outlined" disabled>
            {args.children}
          </IconButton>
        </div>
      </>
    );
  },
};
