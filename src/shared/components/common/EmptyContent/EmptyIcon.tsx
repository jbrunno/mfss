import { SVGPropTypes } from '@/shared/types'

export const EmptyIcon = (props: SVGPropTypes) => {
  return (
    <svg
      width={150}
      height={150}
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_3_7)">
        <path
          d="M75 0C33.579 0 0 33.579 0 75c0 24.537 11.783 46.322 30 60.005V53a16.018 16.018 0 0016-16h58a15.906 15.906 0 004.691 11.308A15.89 15.89 0 00120 53v82.005c18.217-13.683 30-35.468 30-60.005 0-41.421-33.579-75-75-75z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99 78c0 13.255-10.745 24-24 24S51 91.255 51 78s10.745-24 24-24 24 10.745 24 24zM82.425 88.253a1.5 1.5 0 002.12 0l.708-.707a1.5 1.5 0 000-2.121l-6.364-6.364a1.5 1.5 0 010-2.122l6.364-6.363a1.5 1.5 0 000-2.122l-.707-.707a1.5 1.5 0 00-2.121 0l-6.364 6.364a1.5 1.5 0 01-2.122 0l-6.364-6.364a1.5 1.5 0 00-2.12 0l-.708.707a1.5 1.5 0 000 2.122l6.364 6.364a1.5 1.5 0 010 2.12l-6.364 6.365a1.5 1.5 0 000 2.121l.707.707a1.5 1.5 0 002.121 0l6.364-6.364a1.5 1.5 0 012.122 0l6.364 6.364z"
          fill="currentColor"
        />
        <path d="M88 108H62a3 3 0 100 6h26a3 3 0 100-6z" fill="currentColor" />
        <path d="M97 120H53a3 3 0 100 6h44a3 3 0 100-6z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_3_7">
          <rect width={150} height={150} rx={75} fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )
}
