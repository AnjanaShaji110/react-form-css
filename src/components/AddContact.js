import React, { useEffect, useState } from "react";
import "../css/AddContact.css";
import { editContact, saveContact } from "../action";
import { useAppContext } from "../appContext";
import { useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
  const { dispatch, contacts } = useAppContext();
  const [isEdit, setIsEdit] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isCityValid, setIsCityValid] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (isEdit) {
      contacts[id] = {
        name: data.get("name"),
        age: data.get("age"),
        city: data.get("city"),
      };
      editContact(dispatch, contacts);
    } else {
      saveContact(dispatch, {
        name: data.get("name"),
        age: data.get("age"),
        city: data.get("city"),
      });
    }
    navigate("/");
  };
  const getContactByIndex = (index) => {
    const contact = contacts[index];
    if (contact) {
      setIsEdit(true);
    } else {
      alert("Please enter a valid id");
      navigate("/");
    }
  };

  useEffect(() => {
    if (id) {
      getContactByIndex(id);
    } else {
      setIsEdit(false);
    }
  }, [id]);

  const formValidation = (event) => {
    if (event.target.id === "name") {
      if (event.target?.value.length < 3) {
        setIsNameValid(true);
      } else {
        setIsNameValid(false);
      }
    } else if (event.target.id === "city") {
      if (event.target?.value.length < 3) {
        setIsCityValid(true);
      } else {
        setIsCityValid(false);
      }
    }
  };


return (
  <div>
    <h1>New Contact</h1>
    <form className="form" onSubmit={onSubmit}>
      <label>Name:</label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        defaultValue={isEdit ? contacts[id]?.name : ""}
        placeholder="Your Name"
        onChange={formValidation}
        required
      />
      {isNameValid ? <p style={{ color: "red" }}>Min length :3</p> : ""}
      <br />
      <label>Age:</label>
      <br />
      <input
        type="number"
        id="age"
        name="age"
        defaultValue={isEdit ? contacts[id]?.age : ""}
        placeholder="Your Age"
        onChange={formValidation}
        required
      />
      <br />
      <label>City:</label>
      <br />
      <input
        type="text"
        id="city"
        name="city"
        defaultValue={isEdit ? contacts[id]?.city : ""}
        placeholder="Your Place"
        onChange={formValidation}
        required
      />
      {isCityValid ? <p style={{ color: "red" }}>Min length :3</p> : ""}
      <br />
      <button className="submit" type="submit">Save</button>
    </form>
  </div>
);
};

export default AddContact;
