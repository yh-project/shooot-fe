import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';
import {
  TypographyColors,
  TypographySizes,
  TypographyWeightKeywords,
  TypographyWeightNumbers,
} from './Typography.types';
import { useTheme } from '@emotion/react';

const meta = {
  title: 'UI/Common/Typography',
  component: Typography,
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
    size: {
      description: '적용할 텍스트 크기',
    },
    weight: {
      description: '적용할 텍스트 굵기',
    },
    color: {
      description: '적용할 텍스트 색상',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  args: {
    children: 'Typography',
    size: 'md',
    weight: 'medium',
    color: 'primary',
  },
};

const sizeKeywordList: TypographySizes[] = [
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
const sizeNumberList: number[] = [
  0.5, 0.625, 0.75, 0.875, 1, 1.125, 1.25, 1.375, 1.5,
];
const weightKeywordList: string[] = Object.keys(TypographyWeightKeywords);
const weightNumberList: TypographyWeightNumbers[] = [
  100, 200, 300, 400, 500, 600, 700, 800, 900,
];
const colorList: TypographyColors[] = [
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
        {sizeKeywordList.map((size, idx: number) => (
          <Typography key={idx} {...args} size={size}>
            {size}
          </Typography>
        ))}
      </div>
    );
  },
};
export const SizesWithNumber: Story = {
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
        {sizeNumberList.map((size, idx: number) => (
          <Typography key={idx} {...args} size={size}>
            {size}rem
          </Typography>
        ))}
      </div>
    );
  },
};
export const WeightsWithKeyword: Story = {
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
        {weightKeywordList.map((weight, idx: number) => (
          <Typography key={idx} {...args} weight={weight}>
            {weight}
          </Typography>
        ))}
      </div>
    );
  },
};
export const WeightsWithNumber: Story = {
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
        {weightNumberList.map((weight, idx: number) => (
          <Typography key={idx} {...args} weight={weight}>
            {weight}
          </Typography>
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
          <Typography key={idx} {...args} color={color}>
            {color}
          </Typography>
        ))}
      </div>
    );
  },
};
