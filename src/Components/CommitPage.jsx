import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCommitDataTC, setCommitStateClearAC} from "../Reducers/mainPageReducer";

const CommitPage = () => {
    const {login, rep} = useParams();

    const dispatch = useDispatch();
    const commitInfo = useSelector(state => state.mainPageState.mainInfo.commit_info);

    useEffect(() => {
        dispatch(setCommitStateClearAC());
        dispatch(getCommitDataTC(login, rep));
    }, [])

    const tableDataJSX = commitInfo.map((el) => {
        return (
            <tr key={el.commitSha}>
                <td>{el.commitAuthorName}</td>
                <td>{el.commitSha}</td>
                <td>{el.commitDate.split('T', 1)}</td>
            </tr>
        );
    });

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Author</th>
                    <th>Commit hash</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {tableDataJSX}
                </tbody>
            </table>
        </div>
    );
}

export default CommitPage;