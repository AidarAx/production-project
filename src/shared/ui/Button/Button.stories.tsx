import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'Shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Outline: Story = {
  args: {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE
  }
}

export const OutlineSizeL: Story = {
  args: {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  }
}

export const OutlineSizeXL: Story = {
  args: {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  }
}

export const OutlineDark: Story = {
  args: {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}

export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: ButtonTheme.CLEAR
  }
}

export const Background: Story = {
  args: {
    children: 'Background',
    theme: ButtonTheme.BACKGROUND
  }
}

export const BackgroundInverted: Story = {
  args: {
    children: 'Background',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
  }
}

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  }
}

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  }
}
