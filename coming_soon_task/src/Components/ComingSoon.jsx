import React from "react";
import s from './../Assets/Styles/ComingSoon.module.css';
let ComingSoon=(props)=>{
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <form action="">
                    <h1>Coming Soon</h1>
                    <div className={`input-group ${s.inputDiv}`}>
                        <input type="text" className="form-control" placeholder="Введите код" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" onClick={props.test} type="submit">Отправить</button>
                        </div>
                    </div>
                    <small>Ввод кода даст доступ к сайту</small>
                </form>
            </div>
        </div>
    )
}
export default ComingSoon;