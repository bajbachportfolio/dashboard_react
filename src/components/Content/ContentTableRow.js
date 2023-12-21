import ContentLabel from "./ContentLabel";

const ContentTableRow = ({ tableRow }) => {
  const userInfoArray = Object.values(tableRow);

  return (
    <tr>
      {userInfoArray.map((item, index) => (
        <td key={index}>
          {index === 5 ? (
            <ContentLabel
              style={
                tableRow.status === "active"
                  ? "user_block__table_label user_block__table_label--active-mod"
                  : "user_block__table_label user_block__table_label--inactive-mod"
              }
              value={item}
            />
          ) : index === 2 ? (
            <a href={["tel:", item].join("")}>{item}</a>
          ) : index === 3 ? (
            <a href={["mailto:", item].join("")}>{item}</a>
          ) : (
            item
          )}
        </td>
      ))}
    </tr>
  );
};
export default ContentTableRow;
