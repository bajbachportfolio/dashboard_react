const Content = () => {
  return (
    <div className="main_page__content">
      <div className="main_page__content_in">
        <h1 className="main_page__content_title">Hello Evano</h1>
        <div className="user_block">
          <div className="user_block__top">
            <div className="user_block__title_wrap">
              <h2 className="user_block__title">All Customers</h2>
              <div className="user_block__subtitle">Active Members</div>
            </div>
            <div className="user_block__search">
              <div className="user_block__search_icon_wrap">
                <span className="icon icon--size_mod">
                  <svg width={24} height={24}>
                    <title>search 1</title>
                    <path
                      fill="currentColor"
                      d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM4 11a7 7 0 1 1 12 4.93A7 7 0 0 1 4 11Z"
                    />
                  </svg>
                </span>
              </div>
              <div className="form_input">
                <div className="form_input__field">
                  <input className="form_input__element" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>
          <table className="user_block__table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Cooper</td>
                <td>Microsoft</td>
                <td>(225) 555-0118</td>
                <td>jane@microsoft.com</td>
                <td>United States</td>
                <td>
                  <div className="user_block__table_mark user_block__table_mark--active-mod">
                    Active
                  </div>
                </td>
              </tr>
              <tr>
                <td>Floyd Miles</td>
                <td>Yahoo</td>
                <td>(205) 555-0100</td>
                <td>floyd@yahoo.com</td>
                <td>Kiribati</td>
                <td>
                  <div className="user_block__table_mark user_block__table_mark--inactive-mod">
                    Inactive
                  </div>
                </td>
              </tr>
              <tr>
                <td>Ronald Richards</td>
                <td>Adobe</td>
                <td>(302) 555-0107</td>
                <td>ronald@adobe.com</td>
                <td>Israel</td>
                <td>
                  <div className="user_block__table_mark user_block__table_mark--inactive-mod">
                    Inactive
                  </div>
                </td>
              </tr>
              <tr>
                <td>Marvin McKinney</td>
                <td>Tesla</td>
                <td>(252) 555-0126</td>
                <td>marvin@tesla.com</td>
                <td>Iran</td>
                <td>
                  <div className="user_block__table_mark user_block__table_mark--active-mod">
                    Active
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jerome Bell</td>
                <td>Google</td>
                <td>(629) 555-0129</td>
                <td>jerome@google.com</td>
                <td>Réunion</td>
                <td>
                  <div className="user_block__table_mark user_block__table_mark--active-mod">
                    Active
                  </div>
                </td>
              </tr>
              <tr>
                <td>Kathryn Murphy</td>
                <td>Microsoft</td>
                <td>(406) 555-0120</td>
                <td>kathryn@microsoft.com</td>
                <td>Curaçao</td>
                <td>
                  <div className="user_block__table_mark user_block__table_mark--active-mod">
                    Active
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jacob Jones</td>
                <td>Yahoo</td>
                <td>(208) 555-0112</td>
                <td>jacob@yahoo.com</td>
                <td>Brazil</td>
                <td>
                  <div className="user_block__table_mark user_block__table_mark--active-mod">
                    Active
                  </div>
                </td>
              </tr>
              <tr>
                <td>Kristin Watson</td>
                <td>Facebook</td>
                <td>(704) 555-0127</td>
                <td>kristin@facebook.com</td>
                <td>Åland Islands</td>
                <td>
                  <div className="user_block__table_mark user_block__table_mark--inactive-mod">
                    Inactive
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="user_block__bottom">
            <div className="user_block__user_quantity">
              Showing data 1 to 8 of 256K entries
            </div>
            <div className="pagination user_block__pagination">
              <ul className="pagination__list">
                <li className="pagination__item pagination__item--prev_mod">
                  <a className="pagination__link" href="#" />
                </li>
                <li className="pagination__item pagination__item--active_mod">
                  <a className="pagination__link" title={1}>
                    1
                  </a>
                </li>
                <li className="pagination__item">
                  <a className="pagination__link" href="#" title={2}>
                    2
                  </a>
                </li>
                <li className="pagination__item">
                  <a className="pagination__link" href="#" title={3}>
                    3
                  </a>
                </li>
                <li className="pagination__item">
                  <a className="pagination__link" href="#" title={4}>
                    4
                  </a>
                </li>
                <li className="pagination__item pagination__item--dots_mod">
                  <a className="pagination__link">…</a>
                </li>
                <li className="pagination__item">
                  <a className="pagination__link" href="#" title={5}>
                    5
                  </a>
                </li>
                <li className="pagination__item pagination__item--next_mod">
                  <a className="pagination__link" href="#" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
