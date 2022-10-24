import styles from '../appStyles.module.css'
import logo1 from '../Pictures/gitLogo1.png'
import glassLogo from '../Pictures/glassLogo.png'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setInputTextAC} from "../Reducers/mainPageReducer";

const MainPage = () => {
    const dispatch = useDispatch();
    const inputText = useSelector(state => state.mainPageState.inputText);

    const setInputText = (input) => {
        dispatch(setInputTextAC(input));
    };

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
                <NavLink to={`${inputText}`}>
                    <img className={styles.glassLogo} src={glassLogo} alt={'Search'}/>
                </NavLink>

            </div>
        </div>
    );
}

export default MainPage;