import React from "react";
import "../css/ViewContact.css";
import { deleteContact } from "../action";
import { useAppContext } from "../appContext";
import { useNavigate } from "react-router-dom";

const ViewContact = () => {
  const { contacts, dispatch } = useAppContext();
  const navigate = useNavigate();

  const edit = (index) => {
    navigate(`/editContact/${index}`);
  };

  const deletion = (index) => {
    contacts.splice(index, 1);
    deleteContact(dispatch, contacts);
  };

  return (
    <div>
      <h1 className="heading">Contact List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{contact.name}</td>
              <td>{contact.age}</td>
              <td>{contact.city}</td>
              <td>
                <a style={{ cursor: "pointer" }} onClick={() => edit(index)}>
                  Edit
                </a>
              </td>
              <td>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => deletion(index)}
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewContact;
