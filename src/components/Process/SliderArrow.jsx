const SliderArrow = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={"100%"}
      height={"100%"}
      fill="none"
      viewBox="0 0 56 56"
      {...props}
    >
      <rect
        width={56}
        height={56}
        fill="#fff"
        rx={28}
        transform="matrix(-1 0 0 1 56 0)"
      />
      <g clipPath="url(#a)">
        <path
          stroke="#18181A"
          strokeLinecap="square"
          d="M30.58 21.75 24.13 28l6.452 6.25"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M38.323 18H17.678v20h20.645z" />
        </clipPath>
      </defs>
    </svg>
  )
  export default SliderArrow