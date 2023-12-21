const ContentBlockBottom = () => {
  return (
    <div className="user_block__bottom">
      <div className="user_block__user_quantity">
        Showing data 1 to 8 of 256K entries
      </div>
      <div className="pagination user_block__pagination">
        <ul className="pagination__list">
          <li className="pagination__item pagination__item--prev_mod">
            <a className="pagination__link" href="#s" aria-label="prev" />
          </li>
          <li className="pagination__item pagination__item--active_mod">
            <a className="pagination__link" href="#s" title={1}>
              1
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link" href="#s" title={2}>
              2
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link" href="#s" title={3}>
              3
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link" href="#s" title={4}>
              4
            </a>
          </li>
          <li className="pagination__item pagination__item--dots_mod">
            <a className="pagination__link" href="#s">
              …
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link" href="#s" title={5}>
              5
            </a>
          </li>
          <li className="pagination__item pagination__item--next_mod">
            <a className="pagination__link" href="#s" aria-label="next" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ContentBlockBottom;
