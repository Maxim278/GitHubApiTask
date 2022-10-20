import {connect} from "react-redux";
import App from "../App";

const mapStateToProps = (state) => {
    return {
        loginIsValid: state.mainPageState.loginIsValid
    };
}

const appContainer = connect(mapStateToProps, null)(App);
export default appContainer;