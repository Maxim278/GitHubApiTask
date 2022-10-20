import {connect} from "react-redux";
import ReposPage from "../Components/ReposPage";
import {setReposDataAC, setUserDataAC} from "../Reducers/mainPageReducer";

const mapStateToProps = (state) => {
    return {
        mainInfo : state.mainPageState.mainInfo,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (mainInfo) => dispatch(setUserDataAC(mainInfo)),
        setReposData: (reposInfo) => dispatch(setReposDataAC(reposInfo)),
    };
}

const reposPageContainer = connect(mapStateToProps, mapDispatchToProps)(ReposPage);
export default reposPageContainer;