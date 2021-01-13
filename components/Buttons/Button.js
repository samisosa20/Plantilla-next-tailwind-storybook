import React from 'react';
import PropTypes from 'prop-types';


/**
 * Button component
 */
export const Button = (props) => {
  const {label, icon, className} = props;
  return (
    <button
      type="button"
      className={`${className} border-black border block text-center text-xs sm:text-sm font-bold mx-auto rounded-full py-2 px-2 sm:px-6 uppercase my-1 shadow items-center `}
    >
      {icon === "maps" &&  <svg xmlns="http://www.w3.org/2000/svg" width="13.263" height="19.023" viewBox="0 0 13.263 19.023" className="mr-2">
        <g id="g842" transform="translate(-583.3 52.9)">
          <path id="path835" d="M620.6-5.97a18.456,18.456,0,0,1,1.5,2.214,11.575,11.575,0,0,1,.823,2.086c.167.48.323.627.656.627.362,0,.529-.245.656-.627a11.768,11.768,0,0,1,.794-2.047,22.91,22.91,0,0,1,2.224-3.144,19.461,19.461,0,0,0,2.2-3.174,7.728,7.728,0,0,0,.754-3.36,6.679,6.679,0,0,0-.744-3.105l-2.155.578L626-12.474l-.323.47-.069.088-.088.108-.147.176-.216.216-1.166.95L621.08-8.781Z" transform="translate(-33.646 -32.834)" fill="#fff"/>
          <path id="path833" d="M589.9,2.99a23.6,23.6,0,0,0,3.007,4.3l4.927-5.838a2.586,2.586,0,0,1-1.949.911,2.523,2.523,0,0,1-2.537-2.527,2.7,2.7,0,0,1,.578-1.636l-3.34.891Z" transform="translate(-5.953 -46.094)" fill="#fff"/>
          <path id="path831" d="M634.967-49.8a6.576,6.576,0,0,1,3.879,3.272l-3.938,4.692a2.738,2.738,0,0,0,.578-1.636A2.552,2.552,0,0,0,632.959-46a2.653,2.653,0,0,0-1.959.9v-2.958Z" transform="translate(-43.027 -2.796)" fill="#fff"/>
          <path id="path829" d="M599.1-50.529a6.582,6.582,0,0,1,5.064-2.371,6.772,6.772,0,0,1,2.018.3l-3.957,4.7h-2.8Z" transform="translate(-14.252)" fill="#fff"/>
          <path id="path827" d="M583.947-21.185a7.582,7.582,0,0,1-.647-3.135,6.6,6.6,0,0,1,1.558-4.281l3.125,2.635Z" transform="translate(0 -21.92)" fill="#fff"/>
        </g>
      </svg>}
      <p className="text-xs">{label}</p>
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What text color to use
   */
  colorContrast: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Button's icon
   */
  icon: PropTypes.oneOf(["none", "maps"]),
  /**
   * Size of button
   */
  size: PropTypes.oneOf(["small", "medium", "large", "full"]),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  colorContrast: null,
  primary: false,
  icon: "none",
  size: "large",
  onClick: ()=>{},
};

export default Button