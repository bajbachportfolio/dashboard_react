import { usersList } from "../projectData";
import ContentTableRow from "./ContentTableRow";

const ContentTable = () => {
  return (
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
        {usersList.map((user) => (
          <ContentTableRow tableRow={user} />
        ))}
      </tbody>
    </table>
  );
};
export default ContentTable;
