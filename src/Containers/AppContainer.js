import {connect} from "react-redux";
import App from "../App";

const mapStateToProps = (state) => {
    return {
        loginIsValid: state.mainPageState.loginIsValid
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default appContainer;