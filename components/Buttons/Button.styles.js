// Packages
import styled from "styled-components"

export const StyledButton = styled.button.attrs({
  className: "StyledButton",
})`
  ${(props) => {
    return props.variant ? `
      ${props.backgroundColor ? `background-color:${props.backgroundColor}`:` background-color: black`};
      ${props.colorContrast ? `color:${props.colorContrast}`:` color: white`};
      ${props.size === "full" ? `width: 100%`: props.size === "large" ? `width: 83.333333%`:` ${props.size === "medium" ? `width: 41.666667%`:` width: 16.666667%`}`};
      ${props.icon === "maps" ? `padding-left: 1rem; padding-right: 1rem; display: flex; justify-content: center;`:``};
    ` : !props.variant ? `
      ${props.backgroundColor ? `background-color:${props.backgroundColor}`:` background-color: white`};
      ${props.colorContrast ? `color:${props.colorContrast}`:` color: black`};
      ${props.size === "full" ? `width: 100%`:props.size === "large" ? `width: 83.333333%`:` ${props.size === "medium" ? `width: 41.666667%`:` width: 16.666667%`}`};
    ` : ` ${props.size === "full" ? `width: 100%`:props.size === "large" ? `width: 83.333333%`:` ${props.size === "medium" ? `width: 41.666667%`:` width: 16.666667%`}`};`
  }}
`