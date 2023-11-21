import classNames from "classnames";
import { createElement } from "react";
import PropTypes from "prop-types"

export default function Button({size, children}) {
    return createElement("button", {
        className: classNames("flex justify-center items-center bg-[#1d9bf0] rounded-full font-bold hover:bg-[#1a8cd8] transition-colors", {
            "px-4 h-9": size == 'normal',
            "px-4 h-[52px] text-[17px] w-full": size == 'large'
        })
    }, children)
}

Button.PropTypes = {
    size: PropTypes.oneOf(['normal', 'large'])
}

Button.defaultProps = {
    size: 'normal'
}
