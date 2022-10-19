import {connect} from "react-redux";
import {setLoginIsValidAC, setReposDataAC, setUserDataAC} from "../Reducers/mainPageReducer";
import MainPage from "../Components/MainPage";

const mapStateToProps = (state) => {
    return {
        mainInfo: state.mainPageState.mainInfo,
        loginIsValid: state.mainPageState.loginIsValid
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (mainInfo) => dispatch(setUserDataAC(mainInfo)),
        setLoginIsValid: (bool) => dispatch(setLoginIsValidAC(bool)),
        setReposData: (reposInfo) => dispatch(setReposDataAC(reposInfo)),
    };
}

const mainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);
export default mainPageContainer;