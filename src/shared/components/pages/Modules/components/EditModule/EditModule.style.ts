import { tv } from 'tailwind-variants'

export const styles = tv({
  slots: {
    headerContainer: 'grid grid-cols-1 gap-[.625rem]',
    bodyContainer: 'grid grid-cols-4 gap-4 justify-between',
    selectAll: 'text-blue-600 text-right whitespace-nowrap cursor-pointer hover:text-blue-700',
    checkboxContainer: 'col-span-4 border-1 border-gray-300 rounded',
    checkbox:
      '[&:nth-of-type(n+2)]:border-t-gray-300 [&:nth-of-type(n+2)]:border-t-1 px-4 py-[.875rem]',
    iconInfo: 'text-primary-600 text-xl',
    tickIcon: 'text-xl',
  },
})
