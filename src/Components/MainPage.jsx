import styles from '../appStyles.module.css'
import logo1 from '../Pictures/gitLogo1.png'
import glassLogo from '../Pictures/glassLogo.png'
import {useDispatch, useSelector} from "react-redux";
import {setInputTextAC, setLoginIsValidAC} from "../Reducers/mainPageReducer";
import {Link} from "react-router-dom";
import {useEffect} from "react";

const MainPage = () => {
    const dispatch = useDispatch();
    const inputText = useSelector(state => state.mainPageState.inputText);

    useEffect(() => {
        dispatch(setLoginIsValidAC(false));
    }, []);

    const setInputText = (input) => {
        dispatch(setInputTextAC(input));
    };

    return (
        <div>
            <img className={styles.gitLogo} src={logo1} alt={'Git Logo'}/>
            <form>
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
            </form>
        </div>
    );
}

export default MainPage;