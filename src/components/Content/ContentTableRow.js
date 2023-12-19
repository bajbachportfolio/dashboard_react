const ContentTableRow = ({ tableRow }) => {
  const userInfoArray = Object.values(tableRow);
  const isUserActive = (
    <>
      {tableRow.status === "Active" ? (
        <div className="user_block__table_mark user_block__table_mark--active-mod">
          Active
        </div>
      ) : (
        <div className="user_block__table_mark user_block__table_mark--inactive-mod">
          Inactive
        </div>
      )}
    </>
  );

  return (
    <tr>
      {userInfoArray.map((item, index) => (
        <td key={index}>{index === 5 ? isUserActive : item}</td>
      ))}
    </tr>
  );
};
export default ContentTableRow;
