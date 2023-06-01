import React from "react";
import style from './ErrorPopup.module.css';


const ErrorPopup = props => {
    return (
        <div className={style.popup__Overlay} onClick={props.popupHandler}>
            <div className={style.popup__Container}>
            <div className={style.popup__title}>
                    Invalid Input
                </div>
                <div className={style.popup__body}>
                    {props.message}
                </div>
                <div className={style.popup__footer}>
                    <button type="button" onClick={props.popupHandler}>OK</button>
                </div>
            </div>
        </div>
    );
}

export default ErrorPopup;