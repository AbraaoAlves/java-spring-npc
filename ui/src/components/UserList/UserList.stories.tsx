import type { Meta, StoryObj } from '@storybook/react';

import { UserList, UserListItem } from './UserList';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'App/UserList',
  component: UserList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  }
} satisfies Meta<typeof UserList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fullscreen: Story = {
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    maxWidth: 360,
    children: [
      <UserListItem name="Abraao alves" email="abraao@mail.com" />,
      <UserListItem name="Kilvia Santos" email="kilvia@mail.com" />,
      <UserListItem name="Sophia santos" email="sophia@mail.com" />,
    ]
  }
};
