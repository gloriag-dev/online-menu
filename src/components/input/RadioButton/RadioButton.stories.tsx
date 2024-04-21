import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import RadioButton, { IRadioProps, IRadioValue } from './RadioButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof RadioButton> = {
  title: 'Input/RadioButton',
  component: RadioButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

const Template: React.FC<IRadioProps> = (props) => {

  const [value, setValue] = useState<string>()

  return <RadioButton
    {...props}
    value={value!}
    onChange={(value: IRadioValue) => {
      setValue(value.value);
    }} />
}

export const Primary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Input Label',
    values: [
      {
        label: "Pippo",
        value: "pippo"
      },
      {
        label: "Pluto",
        value: "pluto"
      }
    ]
  },
};
