import React, {useState} from "react";
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";

import style from './App.module.css';

const App = () => {
  const [userData, setUserData] = useState([]);

  const saveUserHandler = newItem => {
    const newUserData = [...userData, newItem];
    setUserData(newUserData);
  };

  const deleUserHandler = uid => {
    const newUserItems = [...userData];
    const n_data = newUserItems.filter((user)=>{
      return user.id != uid;
    });

    setUserData(n_data);
  };

  return (
    <div className={style.app}>
      <UserForm onSave={saveUserHandler}/>
      <div>
        <UserList users={userData} onDeleteUser={deleUserHandler}/>
      </div>
    </div>
  );
}

export default App;
