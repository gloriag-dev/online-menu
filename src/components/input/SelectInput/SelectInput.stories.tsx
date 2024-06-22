import type { Meta, StoryObj } from '@storybook/react';
import SelectInput, { ISelectInputProps } from './SelectInput';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof SelectInput> = {
  title: 'Input/SelectInput',
  component: SelectInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SelectInput>;

const Template : React.FC<ISelectInputProps> = () =>{

    const [value, setValue] = useState<string>()

    return <SelectInput
        value={value}
        values={[
          {
            label: "Pippo",
            value: "1"
          },
          {
            label: "Pluto",
            value: "2"
          }
        ]}
        onChange={(event : SelectChangeEvent) =>{
          setValue(event.target.value)
        }}
    />
}

export const Primary: Story = {
  render: args => <Template {...args} />,
  args: {
    label: 'Input Label',
  },
};
