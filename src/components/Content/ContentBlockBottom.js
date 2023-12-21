import PaginationItem from "../Pagination/PaginationItem";

const ContentBlockBottom = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="user_block__bottom">
      <div className="user_block__user_quantity">
        Showing data 1 to 8 of 256K entries
      </div>
      <div className="pagination user_block__pagination">
        <ul className="pagination__list">
          {pages.map((page, index) =>
            index === 0 ? (
              <PaginationItem
                className={"pagination__item--prev_mod"}
                ariaLabel={"prev"}
              />
            ) : index === 1 ? (
              <PaginationItem
                className={"pagination__item--active_mod"}
                value={page - 1}
              />
            ) : index === 5 ? (
              <PaginationItem
                className={"pagination__item--dots_mod"}
                value={"..."}
              />
            ) : index === pages.length - 1 ? (
              <PaginationItem
                className={"pagination__item--next_mod"}
                ariaLabel={"next"}
              />
            ) : (
              <PaginationItem value={page - 1} />
            )
          )}
        </ul>
      </div>
    </div>
  );
};
export default ContentBlockBottom;
