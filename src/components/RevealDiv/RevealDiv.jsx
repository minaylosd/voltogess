export const RevealDiv = ({children, staggered, ...props}) => {
    const divStyle = {
        width: "fit-content",
        height: "fit-content",
        overflow: "hidden"
    }

  return (
    <div style={divStyle}>
      <div className={staggered ? "staggered-reveal" : "reveal"}>
        {children}
      </div>
    </div>
  )
}
