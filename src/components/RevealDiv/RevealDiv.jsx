import { useEffect } from "react"
import { gsap } from "gsap"


export const RevealDiv = ({children, ...props}) => {
    const divStyle = {
        width: "fit-content",
        height: "fit-content",
        overflow: "hidden"
    }

  return (
    <div style={divStyle}>
      <div className="reveal">
        {children}
      </div>
    </div>
  )
}
