import styles from "../appStyles.module.css";
import {NavLink, useParams} from "react-router-dom";
import {useEffect} from "react";
import {reposQuery} from "../axios/queries";

const ReposPage = (props) => {
    const {username} = useParams();

    useEffect(() => {
        reposQuery(username, props.setReposData);
    }, []);


    const tableDataJSX = props.mainInfo.repos_info.map(rep => {
        return (
            <tr key={rep.repName}>
                <td><NavLink to={`/${username}/${rep.repName}`}>{rep.repName}</NavLink></td>
                <td>{rep.repLanguage}</td>
                <td>{rep.repDescription}</td>
                <td>{rep.repStargazersCount}</td>
            </tr>
        );
    });
    return (
        <div>
            <div className={styles.reposHeader}>
                <img className={styles.avatar} src={props.mainInfo.avatar_url} alt={'Avatar'}/>
                <span className={styles.username}>{props.mainInfo.login}</span>
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