import React from "react"

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
};
