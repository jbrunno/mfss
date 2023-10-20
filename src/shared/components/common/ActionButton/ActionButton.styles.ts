import { tv } from '@kirvanobr/theme'

export const styles = tv({
  slots: {
    base: [
      'bg-transparent px-2 hover:bg-gray-50 data-[pressed=true]:bg-gray-100 disabled:bg-transparent',
    ],
    iconWrapper: [],
  },
  variants: {
    color: {
      primary: {
        iconWrapper: 'text-primary-600',
      },
      secondary: {
        iconWrapper: 'text-gray-600',
      },
      terciary: {
        iconWrapper: 'text-gray-600',
      },
      success: {
        iconWrapper: 'text-success-600',
      },
      warning: {
        iconWrapper: 'text-warning-600',
      },
      danger: {
        iconWrapper: 'text-danger-600',
      },
    },
    isActive: {
      true: {},
      false: {
        base: 'opacity-40',
      },
    },
  },
  defaultVariants: {
    color: 'secondary',
    isActive: false,
  },
})
