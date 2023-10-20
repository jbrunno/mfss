import { tv } from 'tailwind-variants'

export const styles = tv({
  slots: {
    headerContainer: 'grid grid-cols-1 gap-[.625rem]',
    bodyContainer: 'grid grid-cols-4 gap-4 justify-between',
    selectAll: 'text-gray-400 text-right whitespace-nowrap cursor-pointer hover:text-gray-500',
    checkboxes: "col-span-4 px-4 py-[.875rem] border-1 border-gray-300 rounded"
  },
})
