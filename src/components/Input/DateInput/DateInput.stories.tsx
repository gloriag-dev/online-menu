import type { Meta, StoryObj } from '@storybook/react';
import DateInput, { IDateInputProps } from './DateInput';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof DateInput> = {
  title: 'Input/DateInput',
  component: DateInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DateInput>;

const Template : React.FC<IDateInputProps> = (props) =>{

    const [value, setValue] = useState<Date>()

    return <DateInput
        {...props}
        value={value}
        onChange={(value) =>{
          setValue(value)
        }}
    />
}

export const Primary: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Input Label',
  },
};
