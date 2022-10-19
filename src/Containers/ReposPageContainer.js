import {connect} from "react-redux";
import ReposPage from "../Components/ReposPage";
import {setReposDataAC, setStateClearAC, setUserDataAC} from "../Reducers/mainPageReducer";

const mapStateToProps = (state) => {
    return {
        mainInfo : state.mainPageState.mainInfo,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (mainInfo) => dispatch(setUserDataAC(mainInfo)),
        setReposData: (reposInfo) => dispatch(setReposDataAC(reposInfo)),
        setStateClear: () => dispatch(setStateClearAC()),
    };
}

const reposPageContainer = connect(mapStateToProps, mapDispatchToProps)(ReposPage);
export default reposPageContainer;