import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from "../Layout";

const CreateContact = () => {
  const navigate = useNavigate();
  const { addUser } = useOutletContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    addUser({
      id: Date.now(), // Generate a unique ID (use a more robust method in production)
      isActive: isActive,
      first: firstName,
      last: lastName,
    });

    setFirstName("");
    setLastName("");
    setIsActive(false);
    navigate('/NewContact');
  };

  return (
    <div className="w-4/5 bg-white p-4 flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <label className="block text-2xl text-gray-700 font-semibold mb-8">
          create contact
        </label>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            First Name
          </label>
          <input
            type="text"
            className="md:w-80 border border-gray-300 rounded p-2 w-full"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Last Name</label>
          <input
            type="text"
            className="w-full md:w-80 border border-gray-300 rounded p-2"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Status</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={isActive}
                onChange={() => setIsActive(true)}
              />
              <span className="ml-2">Active</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={!isActive}
                onChange={() => setIsActive(false)}
              />
              <span className="ml-2">Inactive</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Create Contact
        </button>
      </form>
    </div>
  );
};

export default CreateContact;
