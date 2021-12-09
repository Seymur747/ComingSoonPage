import React from "react";
import s from './../Assets/Styles/ComingSoon.module.css';
let ComingSoon=(props)=>{
    localStorage.setItem('isMe',1233)
    console.log(props.state)
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <form action="" onSubmit={props.check}>
                    <h1>Coming Soon</h1>
                    <div className={`input-group ${s.inputDiv}`}>
                        <input type="text" className="form-control" name='code' placeholder="Введите код" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary"  type="submit"><a>Отправить</a></button>
                        </div>
                    </div>
                    {!props.state &&<div className={s.errorBox}>
                        <span>Неверный код</span>
                    </div>}
                    <h6>Ввод кода даст доступ к сайту</h6>
                </form>
            </div>
        </div>
    )
}
export default ComingSoon;