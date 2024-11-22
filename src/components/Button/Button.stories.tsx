import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { useTheme } from '@emotion/react';
import { ButtonColors, ButtonSizes } from './Button.types';

const meta = {
  title: 'UI/Common/Button',
  component: Button,
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
    fontSize: {
      description: '적용할 버튼의 텍스트 크기',
    },
    fontWeight: {
      description: '적용할 버튼의 텍스트 굵기',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
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
          backgroundColor: theme.palette.background['100'],
        }}
      >
        <Button {...args} variant="contained">
          {args.children}
        </Button>
        <Button {...args} variant="outlined">
          {args.children}
        </Button>
      </div>
    );
  },
};

const sizeList: ButtonSizes[] = ['small', 'medium', 'large'];
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
            <Button key={idx} {...args} size={size} variant="contained">
              Button
            </Button>
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
            <Button key={idx} {...args} size={size} variant="outlined">
              Button
            </Button>
          ))}
        </div>
      </>
    );
  },
};

const colorList: ButtonColors[] = [
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
            <Button key={idx} {...args} color={color} variant="contained">
              Button
            </Button>
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
            <Button key={idx} {...args} color={color} variant="outlined">
              Button
            </Button>
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
          <Button {...args} variant="contained">
            Button
          </Button>
          <Button {...args} variant="contained" fullWidth>
            Button
          </Button>
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
          <Button {...args} variant="outlined">
            Button
          </Button>
          <Button {...args} variant="outlined" fullWidth>
            Button
          </Button>
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
          <Button {...args} variant="contained">
            Button
          </Button>
          <Button {...args} variant="contained" rounded>
            Button
          </Button>
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
          <Button {...args} variant="outlined">
            Button
          </Button>
          <Button {...args} variant="outlined" rounded>
            Button
          </Button>
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
          <Button {...args} variant="contained">
            Button
          </Button>
          <Button {...args} variant="contained" disabled>
            Button
          </Button>
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
          <Button {...args} variant="outlined">
            Button
          </Button>
          <Button {...args} variant="outlined" disabled>
            Button
          </Button>
        </div>
      </>
    );
  },
};
