import type { Meta, StoryObj } from '@storybook/react';
import TextInput, { ITextInputProps } from './TextInput';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TextInput> = {
  title: 'Input/TextInput',
  component: TextInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

const Template : React.FC<ITextInputProps> = (props) =>{

    const [value, setValue] = useState<string>()

    return <TextInput
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
