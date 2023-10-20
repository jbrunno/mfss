import { tv } from '@kirvanobr/theme'

export const styles = tv({
  slots: {
    base: ['space-y-6'],
    head: [],
    body: ['space-y-8 mt-4'],
    // section
    titleSection: ['text-gray-500'],
    titleWrapper: ['border h-14 flex items-center justify-between rounded-[4px]'],
    teamWrapper: ['h-full border-r break-keep px-4 flex items-center shrink-0'],
    input: ['bg-transparent border-none h-full rounded-none'],

    //section
    standardSection: ['text-gray-600'],

    //section info message
    infoWrapper: ['flex items-center gap-3 p-4 bg-gray-100 rounded-[4px]'],
    infoIcon: ['text-5xl text-primary-600'],
    switchWrapper: ['group-data-[selected=true]:bg-primary-600'],

    // section
    offerSection: ['space-y-2 text-gray-800'],
    tableWrapper: ['p-0 rounded-[4px] shadow-none border'],
    thead: ['bg-transparent h-16 px-6'],
    tbody: ['h-16 border-t'],
    td: ['px-6'],

    footer: [],
  },
})
