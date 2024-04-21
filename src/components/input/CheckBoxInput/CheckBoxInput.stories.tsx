import type { Meta, StoryObj } from '@storybook/react';
import CheckBoxInput, { ICheckBoxProps } from './CheckBoxInput';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CheckBoxInput> = {
  title: 'Input/CheckBoxInput',
  component: CheckBoxInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CheckBoxInput>;

const Template : React.FC<ICheckBoxProps> = (props) =>{

    const [value, setValue] = useState<boolean>()

   return <CheckBoxInput {...props} checked={value} onChange={setValue}/>
}

export const Primary: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Input Label',
  },
};