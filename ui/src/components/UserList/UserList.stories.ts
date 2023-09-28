import type { Meta, StoryObj } from '@storybook/react';

import { UserListItem } from './UserList';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'App/UserListItem',
  component: UserListItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  }
} satisfies Meta<typeof UserListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fullscreen: Story = {
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    email: "abraao@mail.com",
    name: "Abraão Alves"
  }

};

export const Centered: Story = {
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  args: {
    email: "kilvia@mail.com",
    name: "Kilvia Santos"
  }
};
