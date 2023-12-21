const SearchBar = (searchBar) => {
  return (
    <div className="user_block__search">
      <div className="user_block__search_icon_wrap">
        <span className="icon icon--size_mod">
          <svg width={24} height={24}>
            <path
              fill="currentColor"
              d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM4 11a7 7 0 1 1 12 4.93A7 7 0 0 1 4 11Z"
            />
          </svg>
        </span>
      </div>
      <form action="#" method="post">
        <div className="form_input">
          <div className="form_input__field">
            <input
              className="form_input__element"
              placeholder="Search"
              onChange={searchBar.setValue}
              value={searchBar.value}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
