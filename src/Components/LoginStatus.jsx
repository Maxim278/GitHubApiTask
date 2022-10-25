import {checkLoginStatusTC} from "../Reducers/mainPageReducer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

const LoginStatus = () => {
    const dispatch = useDispatch();
    const inputText = useSelector(state => state.mainPageState.inputText);
    const loginIsValid = useSelector(state => state.mainPageState.loginIsValid);

    const [isValid] = useState(loginIsValid);

    useEffect(() => {
        dispatch(checkLoginStatusTC(inputText));
    }, []);

    if (isValid !== loginIsValid) {
        if (loginIsValid) {
            return <Navigate to={`/${inputText}`}/>;
        } else
            return <Navigate to={`/`}/>;
    } else
        return null;
}

export default LoginStatus;