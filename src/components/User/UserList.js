import React from "react";
import Card from "../UI/Card";
import User from "./User";
import style from './UserList.module.css';

const UserList = props => {
    const deleteUserHandler = id => props.onDeleteUser(id)

    if (props.users.length === 0) {
        return;
    }

    return (
        <div className={style.ulBox}>
            <Card>
                {props.users.map(user => <User key={user.id} item={user} onDelete={deleteUserHandler}/>)}
            </Card>
        </div>
    );
};

export default UserList;