import React from "react";
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from "../Layout";

function NoContact() {
  return (
    <div className="flex justify-center bg-slate-200 flex-col items-center p-6 shadow-2xl rounded-lg h-48  w-2/5">
      <div className="text-4xl font-bold text-red-600 mb-4">×</div>
      <p className="text-gray-600 mb-4 whitespace-pre-line">
        No contact found. Please add contacts from the Create Contact button.
      </p>
    </div>
  );
}

function ListContacts(){
    const { users, removeUser } = useOutletContext();
    const navigate = useNavigate();

    const handleEdit = (id: number) => {
      // Navigate to the edit page or implement your edit logic
    };

    const handleDelete = (id: number) => {
      // Remove the user with the provided id from the context
      removeUser(id);
    };
    return(
        <div className="w-full bg-white p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users?.map((item: any, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-lg">
            <p className="text-lg font-semibold">{item.first} {item.last}</p>
            <p className={`text-sm ${item.isActive ? 'text-green-500' : 'text-red-500'}`}>
              {item.isActive ? 'Active' : 'Inactive'}
            </p>
            <div className="mt-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2" 
               onClick={() => handleEdit(item.id)}>
                Edit
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded-md"  
              onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}

export default function NewContact() {
    const { users } = useOutletContext();
    const navigate = useNavigate();
  return (
    <div className="w-4/5 bg-gray-300 p-4">
      <div className="flex items-center h-full">
        <div className="flex bg-slate-200 flex-col items-center p-6 shadow-2xl rounded-lg h-full w-full gap-2">
          <button className="bg-blue-500 text-white px-4 h-11 py-2 rounded-lg hover:bg-blue-600" onClick={()=>navigate('/createContact')}>
            Create Contact
          </button>
        {users.length ? <ListContacts/> : <NoContact/>}
        </div>
      </div>
    </div>
  );
}
