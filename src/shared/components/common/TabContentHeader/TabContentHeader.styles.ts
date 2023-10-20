import { tv } from '@kirvanobr/theme'

export const styles = tv({
  slots: {
    base: ['w-full space-y-6'],
    topComponentsWrapper: ['flex justify-between'],
    titleWrapper: ['flex flex-col gap-4'],
    title: ['flex items-center gap-3'],
    subtitle: ['text-neutral-500'],
    actionComponentWrapper: ['flex items-center gap-3'],
    childrenWrapper: ['flex items-center justify-between gap-4'],
  },
})
