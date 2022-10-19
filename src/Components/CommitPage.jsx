import {useEffect} from "react";
import {commitsQuery} from "../axios/queries";
import {useParams} from "react-router-dom";

const CommitPage = (props) => {
    const {username, rep} = useParams();

    useEffect(() => {
        commitsQuery(username, rep, props.setCommitData);
    }, [])

    const tableDataJSX = props.commitInfo.map((el) => {
        return (
            <tr key={el.commitSha}>
                <td>{el.commitAuthorName}</td>
                <td>{el.commitSha}</td>
                <td>{el.commitDate.split('T', 1)}</td>
            </tr>
        );
    })
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