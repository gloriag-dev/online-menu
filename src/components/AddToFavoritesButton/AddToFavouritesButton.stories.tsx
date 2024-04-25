import type { Meta, StoryObj } from '@storybook/react';
import AddToFavouritesButton, { AddToFavoritesButtonProps } from './AddToFavoritesButton';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof AddToFavouritesButton> = {
  title: 'AddToFavouritesButton',
  component: AddToFavouritesButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AddToFavouritesButton>;

const Template: React.FC<AddToFavoritesButtonProps> = (props) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return <AddToFavouritesButton {...props} clicked={clicked} onClick={() => setClicked(!clicked)} />;
};

export const Primary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    clicked: false
  },
};
