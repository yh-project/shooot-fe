import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import IconTypographyButton from './IconTypographyButton';
import { useTheme } from '@emotion/react';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import {
  IconTypographyButtonColors,
  IconTypographyButtonSizes,
} from './IconTypographyButton.types';

const meta = {
  title: 'UI/Common/IconTypographyButton',
  component: IconTypographyButton,
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
    icon: {
      description: '표시할 아이콘',
    },
    typography: {
      description: '표시할 텍스트',
    },
    variant: {
      description: '적용할 버튼 스타일',
    },
    size: {
      description: '적용할 버튼 크기',
    },
    color: {
      description: '적용할 버튼 색상',
    },
    fullWidth: {
      description: '버튼의 너비를 최대로',
    },
    rounded: {
      description: '버튼을 둥글게',
    },
    disabled: {
      description: '버튼을 동작하지 않게',
    },
    direction: {
      description: '아이콘과 텍스트의 가로/세로 정렬',
    },
    way: {
      description: '아이콘과 텍스트의 정/역방향 정렬',
    },
  },
} satisfies Meta<typeof IconTypographyButton>;

export default meta;

type Story = StoryObj<typeof IconTypographyButton>;

export const Primary: Story = {
  args: {
    icon: <RocketLaunchIcon />,
    typography: 'Button',
    size: 'medium',
    color: 'primary',
    fullWidth: false,
    rounded: false,
    disabled: false,
    direction: 'row',
    way: 'forward',
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
        <IconTypographyButton {...args} variant="contained" />
        <IconTypographyButton {...args} variant="outlined" />
      </div>
    );
  },
};

const sizeList: IconTypographyButtonSizes[] = ['small', 'medium', 'large'];
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
            <IconTypographyButton
              key={idx}
              {...args}
              typography={size}
              size={size}
              variant="contained"
            />
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
            <IconTypographyButton
              key={idx}
              {...args}
              typography={size}
              size={size}
              variant="outlined"
            />
          ))}
        </div>
      </>
    );
  },
};

const colorList: IconTypographyButtonColors[] = [
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
            <IconTypographyButton
              key={idx}
              {...args}
              typography={color}
              color={color}
              variant="contained"
            />
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
            <IconTypographyButton
              key={idx}
              {...args}
              typography={color}
              color={color}
              variant="outlined"
            />
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
          <IconTypographyButton {...args} variant="contained" />
          <IconTypographyButton {...args} variant="contained" fullWidth />
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
          <IconTypographyButton {...args} variant="outlined" />
          <IconTypographyButton {...args} variant="outlined" fullWidth />
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
          <IconTypographyButton {...args} variant="contained" />
          <IconTypographyButton {...args} variant="contained" rounded />
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
          <IconTypographyButton {...args} variant="outlined" />
          <IconTypographyButton {...args} variant="outlined" rounded />
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
          <IconTypographyButton {...args} variant="contained" />
          <IconTypographyButton {...args} variant="contained" disabled />
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
          <IconTypographyButton {...args} variant="outlined" />
          <IconTypographyButton {...args} variant="outlined" disabled />
        </div>
      </>
    );
  },
};

export const DirectionsAndWays: Story = {
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
          <IconTypographyButton {...args} variant="contained" />
          <IconTypographyButton {...args} variant="contained" way="reverse" />
          <IconTypographyButton {...args} variant="contained" direction="col" />
          <IconTypographyButton
            {...args}
            variant="contained"
            direction="col"
            way="reverse"
          />
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
          <IconTypographyButton {...args} variant="outlined" />
          <IconTypographyButton {...args} variant="outlined" way="reverse" />
          <IconTypographyButton {...args} variant="outlined" direction="col" />
          <IconTypographyButton
            {...args}
            variant="outlined"
            direction="col"
            way="reverse"
          />
        </div>
      </>
    );
  },
};
