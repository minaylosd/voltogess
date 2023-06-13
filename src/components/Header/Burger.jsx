const Burger = ({...props}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100%"}
    height={"100%"}
    viewBox="0 0 46 46"
    fill="none"
    {...props}
  >
    <rect width={46} height={46} fill="#fff" rx={23} />
    <path fill="#18181A" d="M13.5 18.5h19v1h-19zM13.5 26.5h19v1h-19z" />
  </svg>
  )
}

export default Burger