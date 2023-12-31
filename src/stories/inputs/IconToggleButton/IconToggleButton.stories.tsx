import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import IconToggleButton from './IconToggleButton'

import {
  FillHeart,
  OutlineHeart,
  FillThumUp,
  OutlineThumUp,
  FillThumDown,
  OutlineThumDown,
  FillSmile,
  OutlineSmile,
  FillFrown,
  OutlineFrown,
  FillBookmark,
  OutlineBookmark,
} from '../../../lib/icons'

const activeIcons = {
  FillHeart: <FillHeart />,
  FillThumUp: <FillThumUp />,
  FillThumDown: <FillThumDown />,
  FillSmile: <FillSmile />,
  FillFrown: <FillFrown />,
  FillBookmark: <FillBookmark />,
}

const inactiveIcons = {
  OutlineHeart: <OutlineHeart />,
  OutlineThumUp: <OutlineThumUp />,
  OutlineThumDown: <OutlineThumDown />,
  OutlineSmile: <OutlineSmile />,
  OutlineFrown: <OutlineFrown />,
  OutlineBookmark: <OutlineBookmark />,
}

const meta = {
  title: 'Inputs/IconToggleButton',
  component: IconToggleButton,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio',
      },
    },
    color: {
      options: ['primary', 'liked', 'positive', 'negative'],
      control: {
        type: 'radio',
      },
    },
    activeIcon: {
      options: Object.keys(activeIcons),
      mapping: activeIcons,
      control: {
        type: 'select',
        labels: Object.entries(activeIcons),
      },
    },
    inactiveIcon: {
      options: Object.keys(inactiveIcons),
      mapping: inactiveIcons,
      control: {
        type: 'select',
        labels: Object.entries(inactiveIcons),
      },
    },
    isActive: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    activeIcon: <FillHeart />,
    inactiveIcon: <OutlineHeart />,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          padding: '2.4rem',
          gap: '0.6rem',
          alignItems: 'center',
          fontSize: '1.4rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof IconToggleButton>

export default meta
type Story = StoryObj<typeof meta>

const Template: Story = {
  render: ({ isActive, onClick, ...rest }) => {
    const [_, updateIsActive] = useArgs<{ isActive: boolean }>()

    const handleClick = () => {
      updateIsActive({ isActive: !isActive })
    }

    return (
      <>
        <IconToggleButton isActive={isActive} onClick={handleClick} {...rest} />
        {`isActive: ${isActive}`}
        <IconToggleButton isActive={!isActive} onClick={handleClick} {...rest} />
        {`isActive: ${!isActive}`}
      </>
    )
  },
  args: {
    isActive: false,
    color: 'liked',
  },
}

export const DefaultIconToggleButton: Story = {
  render: ({ isActive, onClick, ...rest }) => {
    const [_, updateArgs] = useArgs<{ isActive: boolean }>()

    const handleClick = () => {
      updateArgs({ isActive: !isActive })
    }

    return <IconToggleButton isActive={isActive} onClick={handleClick} {...rest} />
  },
  parameters: {
    docs: {
      source: {
        code: `<IconToggleButton activeIcon={<fillHeart />} inactiveIcon={<outlineHeart />} />

        /**
         * Require props
         * @prop { activeIcon, inactiveIcon }
         *
         * Default props
         * @prop { size: 'md', color: 'primary', disabled: false }
         */
        `,
        format: 'dedent',
      },
    },
  },
}

export const LikeButtonExample: Story = {
  render: (args) => {
    return (
      <>
        <IconToggleButton {...args} color="liked" />
        isAcitve: false
        <IconToggleButton {...args} color="liked" isActive />
        isAcitve: true
      </>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `<IconToggleButton activeIcon={<fillHeart />} inactiveIcon={<outlineHeart />} color="liked" />

        // The icon provided in the code is an example code. 
        // Please! import the icon you are using and pass it to activeIcon and inactiveIcon PROPS.
        `,
        format: 'dedent',
      },
    },
    controls: { include: ['size'] },
  },
}

export const BookmarkButtonExample: Story = {
  render: (args) => {
    return (
      <>
        <IconToggleButton
          {...args}
          activeIcon={<FillBookmark />}
          inactiveIcon={<OutlineBookmark />}
        />
        isAcitve: false
        <IconToggleButton
          {...args}
          activeIcon={<FillBookmark />}
          inactiveIcon={<OutlineBookmark />}
          isActive
        />
        isAcitve: true
      </>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `<IconToggleButton activeIcon={<FillBookmark />} inactiveIcon={<OutlineBookmark />} />
      
      // The icon provided in the code is an example code. 
      // Please! import the icon you are using and pass it to activeIcon and inactiveIcon PROPS.
      `,
        format: 'dedent',
      },
    },
    controls: { include: ['size', 'disable'] },
  },
}

export const FeedbackButtonExample: Story = {
  render: (args) => {
    return (
      <>
        <IconToggleButton
          {...args}
          activeIcon={<FillThumUp />}
          inactiveIcon={<OutlineThumUp />}
          color="positive"
          isActive
        />
        I'd recommend
        <IconToggleButton
          {...args}
          activeIcon={<FillThumDown />}
          inactiveIcon={<OutlineThumDown />}
          color="negative"
        />
        I don't recommend it.
      </>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `<IconToggleButton activeIcon={<FillThumUp />} inactiveIcon={<OutlineThumUp />} color="positive" /> I'd recommend
      <IconToggleButton activeIcon={<FillThumDown />} inactiveIcon={<OutlineThumDown />} color="negative"/> I don't recommend it.
      
      // The icon provided in the code is an example code. 
      // Please! import the icon you are using and pass it to activeIcon and inactiveIcon PROPS.
        `,
        format: 'dedent',
      },
    },
    controls: { include: ['size', 'disable'] },
  },
}

export const FeedbackButtonOtherExample: Story = {
  render: (args) => {
    return (
      <>
        <IconToggleButton
          {...args}
          activeIcon={<FillSmile />}
          inactiveIcon={<OutlineSmile />}
          isActive
        />
        i like it!
        <IconToggleButton {...args} activeIcon={<FillFrown />} inactiveIcon={<OutlineFrown />} />i
        hate it!
      </>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `<IconToggleButton activeIcon={<FillSmile />} inactiveIcon={<OutlineSmile />} />i like it!
      <IconToggleButton activeIcon={<FillFrown />} inactiveIcon={<OutlineFrown />} />i hate it!
      
      // The icon provided in the code is an example code. 
      // Please! import the icon you are using and pass it to activeIcon and inactiveIcon PROPS.
        `,
        format: 'dedent',
      },
    },
    controls: { include: ['size', 'disable'] },
  },
}
