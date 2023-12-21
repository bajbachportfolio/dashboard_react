import React from "react";
import ContentTableRow from "./ContentTableRow";
import { usersListHead } from "../projectData";
import { usersList } from "../projectData";

const ContentTable = ({ value }) => {
  const userInfoFilter = (user, value) => {
    const userObjValues = Object.values(user);
    const userValuesArray = [];

    userObjValues.map((userObjValue) => {
      const userObjectValue = userObjValue
        .toLowerCase()
        .includes(value.toLocaleLowerCase());

      userValuesArray.push(userObjectValue);
    });

    const filterOfAllProperties = userValuesArray.reduce((a, b) => {
      return a + b;
    }, 0);

    return filterOfAllProperties;
  };

  const filteredUsers = usersList.filter((user) => {
    return userInfoFilter(user, value);
  });

  return (
    <table className="user_block__table">
      <thead>
        <tr>
          {usersListHead.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {usersList.length && filteredUsers.length ? (
          filteredUsers.map((user, index) => (
            <ContentTableRow tableRow={user} key={index} />
          ))
        ) : (
          <tr>
            <td>No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default ContentTable;
