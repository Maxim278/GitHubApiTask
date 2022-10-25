import styles from '../appStyles.module.css'
import logo1 from '../Pictures/gitLogo1.png'
import glassLogo from '../Pictures/glassLogo.png'
import {useDispatch, useSelector} from "react-redux";
import {checkLoginStatusTC, setInputTextAC, setLoginIsValidAC} from "../Reducers/mainPageReducer";
import {Link, Navigate} from "react-router-dom";
import {useEffect, useState} from "react";

const MainPage = () => {
    const dispatch = useDispatch();
    const inputText = useSelector(state => state.mainPageState.inputText);
    //const loginIsValid = useSelector(state => state.mainPageState.loginIsValid);
    //const [login, setLogin] = useState(inputText);

   /* useEffect(() => {
        if (login !== '')
            dispatch(checkLoginStatusTC(login));
    }, [login]);
*/
    useEffect( () => {
        dispatch(setLoginIsValidAC(false));
    }, []);

    const setInputText = (input) => {
        dispatch(setInputTextAC(input));
    };

    /*if (loginIsValid)
        return <Navigate to={login}/>*/

    return (
        <div>
            <img className={styles.gitLogo} src={logo1} alt={'Nice avatar!'}/>
            <div className={styles.searchWrapper}>
                <input className={styles.input}
                       placeholder={'Username'}
                       value={inputText}
                       onChange={(e) => {
                           setInputText(e.currentTarget.value);
                       }}
                />
                <Link to={'/auth'}>
                    <img className={styles.glassLogo} src={glassLogo} alt={'Search'}/>
                </Link>
            </div>
        </div>
    );
}

export default MainPage;