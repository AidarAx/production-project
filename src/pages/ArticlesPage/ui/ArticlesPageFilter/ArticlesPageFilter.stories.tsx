import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesPageFilter } from './ArticlesPageFilter'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'pages/ArticlesPageFilter',
  component: ArticlesPageFilter
} satisfies Meta<typeof ArticlesPageFilter>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
