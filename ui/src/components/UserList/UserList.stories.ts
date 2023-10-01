import type { Meta, StoryObj } from '@storybook/react';

import { UserList } from './UserList';

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
    data: [
      {
        email: "abraao@mail.com",
        name: "Abraão Alves"
      },
      {
        email: "kilvia@mail.com",
        name: "Kilvia Santos"
      },
      {
        email: "sophia@mail.com",
        name: "sophia Santos"
      }
    ]
  }
};