import React from "react";
import style from './User.module.css';

const User = props => {
    const deleteUserHandler = ()=> {
        props.onDelete(props.item.id);
    };

    return (
        <div className={style.user} onClick={deleteUserHandler}>
            {props.item.userName} ({props.item.age} years old)
        </div>
    );
};

export default User;