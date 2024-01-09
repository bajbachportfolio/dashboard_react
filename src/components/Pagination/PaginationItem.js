import React from "react";
import PropTypes from "prop-types";

const PaginationItem = (props) => {
  const classMod = props.mod ? `pagination__item--${props.mod}_mod` : null;

  return (
    <li className={["pagination__item", classMod].join(" ")}>
      {props.ariaLabel ? (
        <a
          className="pagination__link"
          href="#s"
          title={props.value}
          aria-label={props.ariaLabel}
        >
          {props.value}
        </a>
      ) : (
        <a className="pagination__link" href="#s" title={props.value}>
          {props.value}
        </a>
      )}
    </li>
  );
};
export default PaginationItem;

// PaginationItem.propTypes = {
//   mod: PropTypes.oneOf(["prev", "next"]),
//   value: PropTypes.string,
// };
