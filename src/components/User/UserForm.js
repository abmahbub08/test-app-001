import React, {useState} from "react";
import Card from "../UI/Card";
import ErrorPopup from "../ErrorPopup/ErrorPopup";

import style from './UserForm.module.css';


const UserForm = props => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [errorMsg, setErrorMsg] = useState("");
    const [isValid,setIsValid] = useState(false);

    const userNameHandler = e =>{
        setUserName(e.target.value);
    };

    const ageHandler = e => {
        setAge(e.target.value);
    };

    const popupVisiblityHandler = () => {
        setIsValid(false);
    };

    const addUserHandler = e => {
        e.preventDefault();

        if (userName === "") {
            setErrorMsg('No username provided');
            setIsValid(true);
            return;
        }

        if (age === "") {
            setErrorMsg('No age provided');
            setIsValid(true);
            return;
        }

        if (age < 1) {
            setErrorMsg('Please input a valid age (>0)');
            setIsValid(true);
            return;
        }

        const newItem = {
            id: Math.random(123456789).toString(),
            userName: userName,
            age: age
        };

        props.onSave(newItem);

        setUserName('');
        setAge('');
    };

    return (
        <Card>
            <form id="user-form" onSubmit={addUserHandler}>
                <div className={style["form-control"]}>
                    <label>Username</label>
                    <input type="text" name="user_name" value={userName} onChange={userNameHandler}/>
                </div>
                <div className={style["form-control"]}>
                    <label>Age (years)</label>
                    <input type="number" name="age" value={age} onChange={ageHandler}/>
                </div>
                <div className={style["submit-btn"]}><button type="submit">Add User</button></div>
            </form>
            {isValid && <ErrorPopup message={errorMsg} popupHandler={popupVisiblityHandler}/>}
        </Card>
        
    );
};

export default UserForm;