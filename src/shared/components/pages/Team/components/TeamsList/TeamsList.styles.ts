import { tv } from '@kirvanobr/theme'

export const styles = tv({
  slots: {
    base: ['border  rounded-[4px]'],
    thead: ['h-14 px-8 bg-transparent'],
    tbody: ['h-24 px-8 border-t'],
    division: ['border-r'],
    center: ['text-center'],
    bodyCellCenter: ['mx-auto flex flex-col items-center gap-1'],
  },
})
