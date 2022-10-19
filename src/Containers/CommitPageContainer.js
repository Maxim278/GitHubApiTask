import {connect} from "react-redux";
import CommitPage from "../Components/CommitPage";
import {setCommitDataAC} from "../Reducers/mainPageReducer";

const mapStateToProps = (state) => {
    return {
        mainInfo: state.mainPageState.mainInfo,
        reposInfo: state.mainPageState.mainInfo.repos_info,
        commitInfo: state.mainPageState.mainInfo.commit_info,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCommitData: (commitInfo) => dispatch(setCommitDataAC(commitInfo))
    };
}

const commitPageContainer = connect(mapStateToProps, mapDispatchToProps)(CommitPage);
export default commitPageContainer;