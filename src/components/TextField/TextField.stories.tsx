import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';
import { useTheme } from '@emotion/react';
import { TextFieldColors, TextFieldSizes } from './TextField.types';
import Typography from '../Typography';
import Button from '../Button';

const meta = {
  title: 'UI/Common/TextField',
  component: TextField,
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
    variant: {
      description: '적용할 textfield 스타일',
    },
    size: {
      description: '적용할 textfield 크기',
    },
    color: {
      description: '적용할 textfield 색상',
    },
    label: {
      description: '적용할 textfield 의 라벨',
    },
    trailing: {
      description: '입력 내용을 보여줄지 말지 여부',
    },
    validator: {
      description: '유효성 검증 경고 메시지',
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  args: {
    size: 'medium',
    color: 'primary',
    label: '',
    trailing: false,
    validator: '',
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
        <div style={{ width: '5rem' }}>
          <TextField {...args} variant="filled" />
        </div>
        <div style={{ width: '5rem' }}>
          <TextField {...args} variant="outlined" />
        </div>
        <div style={{ width: '5rem' }}>
          <TextField {...args} variant="none" />
        </div>
      </div>
    );
  },
};

const sizeList: TextFieldSizes[] = ['small', 'medium', 'large'];
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
            <div key={idx} style={{ width: '5rem' }}>
              <TextField {...args} size={size} variant="filled" />
            </div>
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
            <div key={idx} style={{ width: '5rem' }}>
              <TextField {...args} size={size} variant="outlined" />
            </div>
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
            <div key={idx} style={{ width: '5rem' }}>
              <TextField {...args} size={size} variant="none" />
            </div>
          ))}
        </div>
      </>
    );
  },
};

const colorList: TextFieldColors[] = [
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
            <div key={idx} style={{ width: '5rem' }}>
              <TextField {...args} color={color} variant="filled" />
            </div>
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
            <div key={idx} style={{ width: '5rem' }}>
              <TextField {...args} color={color} variant="outlined" />
            </div>
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
            <div key={idx} style={{ width: '5rem' }}>
              <TextField {...args} color={color} variant="none" />
            </div>
          ))}
        </div>
      </>
    );
  },
};

export const Label: Story = {
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
          <div style={{ width: '5rem' }}>
            <TextField {...args} variant="filled" label="it's label" />
          </div>
          <div style={{ width: '5rem' }}>
            <TextField {...args} variant="filled" />
          </div>
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
          <div style={{ width: '5rem' }}>
            <TextField {...args} variant="outlined" label="it's label" />
          </div>
          <div style={{ width: '5rem' }}>
            <TextField {...args} variant="outlined" />
          </div>
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
          <div style={{ width: '5rem' }}>
            <TextField {...args} variant="none" label="it's label" />
          </div>
          <div style={{ width: '5rem' }}>
            <TextField {...args} variant="none" />
          </div>
        </div>
      </>
    );
  },
};

export const Trailing: Story = {
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
          <div style={{ width: '5rem' }}>
            <TextField
              {...args}
              variant="filled"
              type="password"
              value="password1234"
            />
          </div>
          <div style={{ width: '5rem' }}>
            <TextField
              {...args}
              variant="filled"
              type="password"
              value="password1234"
              trailing
            />
          </div>
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
          <div style={{ width: '5rem' }}>
            <TextField
              {...args}
              variant="outlined"
              type="password"
              value="password1234"
            />
          </div>
          <div style={{ width: '5rem' }}>
            <TextField
              {...args}
              variant="outlined"
              type="password"
              value="password1234"
              trailing
            />
          </div>
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
          <div style={{ width: '5rem' }}>
            <TextField
              {...args}
              variant="none"
              type="password"
              value="password1234"
            />
          </div>
          <div style={{ width: '5rem' }}>
            <TextField
              {...args}
              variant="none"
              type="password"
              value="password1234"
              trailing
            />
          </div>
        </div>
      </>
    );
  },
};

export const Validator: Story = {
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
          <div style={{ width: '5rem' }}>
            <TextField {...args} variant="filled" validator='it"s validator' />
          </div>
          <div style={{ width: '5rem' }}>
            <TextField {...args} variant="filled" />
          </div>
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
          <div style={{ width: '5rem' }}>
            <TextField
              {...args}
              variant="outlined"
              validator='it"s validator'
            />
          </div>
          <div style={{ width: '5rem' }}>
            <TextField {...args} variant="outlined" />
          </div>
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
          <div style={{ width: '5rem' }}>
            <TextField {...args} variant="none" validator='it"s validator' />
          </div>
          <div style={{ width: '5rem' }}>
            <TextField {...args} variant="none" />
          </div>
        </div>
      </>
    );
  },
};

export const ValueWithOnChange: Story = {
  args: { ...Primary.args },
  render: (args) => {
    const theme = useTheme();
    const [value, setValue] = useState<string>('');
    const handler = (value: string) => setValue(value);

    return (
      <>
        <div
          style={{
            padding: '1rem',
            backgroundColor: theme.palette.background['100'],
          }}
        >
          <div style={{ width: '5rem' }}>
            <TextField
              {...args}
              variant="filled"
              onChange={(e) => handler(e.target.value.trim())}
            />
          </div>
        </div>
        <Typography color="primary">{value}</Typography>
      </>
    );
  },
};

export const ValueWithRef: Story = {
  args: { ...Primary.args },
  render: (args) => {
    const theme = useTheme();
    const ref = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<string>('');
    const handler = () => {
      if (ref.current) {
        setValue(ref.current.value.trim());
      }
    };

    return (
      <>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: theme.palette.background['100'],
          }}
        >
          <div style={{ width: '5rem' }}>
            <TextField {...args} ref={ref} />
          </div>
          <Button onClick={handler}>입력된 값 가져오기</Button>
        </div>
        <Typography color="primary">{value}</Typography>
      </>
    );
  },
};
