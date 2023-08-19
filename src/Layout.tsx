import { Outlet } from "react-router-dom";
import React from "react";
import SideBar from "./components/SideBar";

interface User {
  id: number;
  isActive: boolean;
  first: string;
  last: string;
}

interface ContextType {
  users: User[];
  addUser: (user: User) => void;
  removeUser: (id: number) => void;
}

const Context = React.createContext<ContextType | undefined>(undefined);

export const useOutletContext = () => {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error("useOutletContext must be used within a Layout");
  }
  return context;
};

function Layout() {
  const [users, setUsers] = React.useState<User[]>([]);
  console.log(users);
  
  const addUser = (user: User) => {
    setUsers(prevUsers => [
      ...prevUsers,
        user,
    ]);
  };

  const removeUser = (id: number) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  return (
    <Context.Provider value={{ users, addUser, removeUser }}>
      <div className="flex bg-gray-300 sm:flex-row md:gap-6 gap-1">
        <div className="bg-gray-800 md:w-29 lg:w-35 h-screen">
          <SideBar />
        </div>
        <Outlet />
      </div>
    </Context.Provider>
  );
}

export default Layout;
