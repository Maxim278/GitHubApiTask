import styles from "../appStyles.module.css";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {
    getReposDataTC,
    getUserDataTC,
    setReposStateClearAC,
    setUserStateClearAC
} from "../Reducers/mainPageReducer";
import {useDispatch, useSelector} from "react-redux";

const ReposPage = () => {
    const {login} = useParams();
    const dispatch = useDispatch();
    const mainInfo = useSelector(state => state.mainPageState.mainInfo);

    useEffect(() => {
        dispatch(setUserStateClearAC());
        dispatch(setReposStateClearAC());
        dispatch(getUserDataTC(login));
        dispatch(getReposDataTC(login));
    }, []);

    const tableDataJSX = mainInfo.repos_info.map(rep => {
        return (
            <tr key={rep.repName}>
                <td><Link to={`/${login}/${rep.repName}`}>{rep.repName}</Link></td>
                <td>{rep.repLanguage}</td>
                <td>{rep.repDescription}</td>
                <td>{rep.repStargazersCount}</td>
            </tr>
        );
    });

    return (
        <div>
            <div className={styles.reposHeader}>
                <img className={styles.avatar} src={mainInfo.avatar_url} alt={'Avatar'}/>
                <span className={styles.username}>{mainInfo.login}</span>
            </div>

            <table>
                <thead>
                <tr>
                    <th>Repository name</th>
                    <th>Programming language</th>
                    <th>Description</th>
                    <th>Star quantity</th>
                </tr>
                </thead>
                <tbody>
                {tableDataJSX}
                </tbody>
            </table>
        </div>
    );
}

export default ReposPage;