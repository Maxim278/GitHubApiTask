import axios from "axios";

export const loginQuery = (login, setLoginIsValid, setUserData) => {
    axios
        .get(`https://api.github.com/users/${login}`)
        .then(result => {
            if (result)
                setLoginIsValid(true);
            setUserData({
                    avatar_url: result.data.avatar_url,
                    login: result.data.login,
                }
            );
        })
        .catch(error => {
            setLoginIsValid(false);
            alert(`${error}. Invalid username.`);
        });
}

export const reposQuery = (login, setReposData) => {
    axios
        .get(`https://api.github.com/users/${login}/repos`)
        .then(result => {
            const reposArrayFunction = () => {
                let reposArray = [];
                for (let repID in result.data) {
                    reposArray.push(
                        {
                            repName: result.data[repID].name,
                            repLanguage: result.data[repID].language,
                            repDescription: result.data[repID].description,
                            repStargazersCount: result.data[repID].stargazers_count,
                        }
                    )
                }
                return reposArray;
            };
            setReposData(reposArrayFunction());
        });
}

export const commitsQuery = (login, rep, setCommitData) => {
    axios
        .get(`https://api.github.com/repos/${login}/${rep}/commits`)
        .then(result => {
                const commitArrayFunction = () => {
                    let commitArray = [];
                    for (let commitID in result.data) {
                        commitArray.push(
                            {
                                commitAuthorName: result.data[commitID].commit.author.name,
                                commitSha: result.data[commitID].sha,
                                commitDate: result.data[commitID].commit.author.date,
                            }
                        );
                    }
                    return commitArray;
                }
                setCommitData(commitArrayFunction());
            }
        )
}