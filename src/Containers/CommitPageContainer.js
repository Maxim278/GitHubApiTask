import {connect} from "react-redux";
import CommitPage from "../Components/CommitPage";
import {setCommitDataAC, setCommitStateClearAC} from "../Reducers/mainPageReducer";

const mapStateToProps = (state) => {
    return {
        commitInfo: state.mainPageState.mainInfo.commit_info,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCommitData: (commitInfo) => dispatch(setCommitDataAC(commitInfo)),
        setCommitStateClear: () => dispatch(setCommitStateClearAC())
    };
}

const commitPageContainer = connect(mapStateToProps, mapDispatchToProps)(CommitPage);
export default commitPageContainer;