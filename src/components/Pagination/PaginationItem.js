const PaginationItem = (props) => {
  return (
    <li className={["pagination__item", props.className].join(" ")}>
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
