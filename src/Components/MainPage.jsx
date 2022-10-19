import React, {useEffect, useState} from "react";
import styles from '../appStyles.module.css'
import logo1 from '../pics/gitLogo1.png'
import glassLogo from '../pics/glassLogo.png'
import {NavLink, Navigate} from "react-router-dom";
import {loginQuery} from "../axios/queries";

const MainPage = (props) => {
    const [inputText, setInputText] = useState('');
    const [login, setLogin] = useState(inputText);

    useEffect(() => {
        if (login !== '') {
            loginQuery(login, props.setLoginIsValid, props.setUserData);
        }

    }, [login]);

    if (props.loginIsValid === true) {
        return <Navigate to={`${login}`}/>
    }

    return (
        <div>
            <img className={styles.gitLogo} src={logo1} alt={'Nice avatar!'}/>
            <div className={styles.searchWrapper}>
                <input className={styles.input}
                       placeholder={'Username'}
                       value={inputText}
                       onChange={(e) => {
                           setInputText(e.currentTarget.value)
                       }}
                />

                <img className={styles.glassLogo} onClick={() => setLogin(inputText)} src={glassLogo} alt={'Search'}/>

                {/*<NavLink to={login}>
                    <img className={styles.glassLogo} onClick={() => setLogin(inputText)} src={glassLogo} alt={'Search'}/>
                </NavLink>*/}

            </div>
        </div>
    );
}

export default MainPage;