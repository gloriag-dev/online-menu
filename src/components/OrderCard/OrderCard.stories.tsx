import type { Meta, StoryObj } from '@storybook/react';
import OrderCard, { OrderCardProps } from './OrderCard';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof OrderCard> = {
  title: 'OrderCard',
  component: OrderCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OrderCard>;

const Template : React.FC<OrderCardProps> = (props) =>{


    return <OrderCard {...props} ></OrderCard>
}

 
export const Primary: Story = {
  render: args => <Template {...args} />,
  args: {
    name: 'Fwizz Classic',
    price: 10,
    quantity: 1,
    imgAlt: 'Fwizz Classic',
    imgUrl: 'https://demo.awaikenthemes.com/html-preview/fwizz/html/images/menu-1.jpg',
    id: 1,
    handleRemove: () => {},
  },
};
