import type { Meta, StoryObj } from '@storybook/react';

import { UserCard } from './UserCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'App/UserCard',
  component: UserCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  }
} satisfies Meta<typeof UserCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fullscreen: Story = {
  args:{
    id: '1',
    name:'abraao alves',
    email: 'abraao@mail.com'
  }
};

export const Centered: Story = {
  args:{
    id: '2',
    name:'kilvia santos',
    email: 'kilvia@mail.com'
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  }
};
