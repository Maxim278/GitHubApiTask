import axios from "axios";

const SET_INPUT_TEXT = 'SET_INPUT_TEXT';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_STATE_CLEAR = 'SET_USER_STATE_CLEAR';
const SET_REPOS_DATA = 'SET_REPOS_DATA';
const SET_REPOS_STATE_CLEAR = 'SET_REPOS_STATE_CLEAR';
const SET_COMMIT_DATA = 'SET_COMMIT_DATA';
const SET_COMMIT_STATE_CLEAR = 'SET_COMMIT_STATE_CLEAR';
const SET_LOGIN_IS_VALID = 'SET_LOGIN_IS_VALID';

let initialState = {
    mainInfo: {
        avatar_url: '',
        login: '',
        repos_info: [
            {
                repName: '',
                repLanguage: '',
                repDescription: '',
                repStargazersCount: '',
            },
        ],
        commit_info: [
            {
                commitAuthorName: '',
                commitDate: '',
                commitSha: '',
            }
        ]
    },
    loginIsValid: true,
    inputText: '',
}

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            let stateCopy = {...state};
            stateCopy.mainInfo = {...stateCopy.mainInfo};

            for (let mainInfoKey in action.mainInfo) {
                stateCopy.mainInfo[mainInfoKey] = action.mainInfo[mainInfoKey];
            }
            console.log(stateCopy)
            return stateCopy;
        }
        case SET_REPOS_DATA: {
            let stateCopy = {...state};
            stateCopy.mainInfo = {...stateCopy.mainInfo};
            stateCopy.mainInfo.repos_info = [...stateCopy.mainInfo.repos_info];

            for (let reposInfoKey in action.reposInfo) {
                stateCopy.mainInfo.repos_info[reposInfoKey] = action.reposInfo[reposInfoKey];
            }
            return stateCopy;
        }
        case SET_COMMIT_DATA: {
            let stateCopy = {...state};
            stateCopy.mainInfo = {...stateCopy.mainInfo};
            stateCopy.mainInfo.commit_info = [...stateCopy.mainInfo.commit_info];

            for (let commitInfoKey in action.commitInfo) {
                stateCopy.mainInfo.commit_info[commitInfoKey] = action.commitInfo[commitInfoKey];
            }
            return stateCopy;
        }
        case SET_LOGIN_IS_VALID: {
            let stateCopy = {...state};
            stateCopy.loginIsValid = action.bool;
            return stateCopy;
        }
        case SET_USER_STATE_CLEAR: {
            let stateCopy = {...state};
            stateCopy.mainInfo = {...stateCopy.mainInfo};
            stateCopy.mainInfo.commit_info = [...stateCopy.mainInfo.commit_info];

            stateCopy.mainInfo.commit_info = initialState.mainInfo.commit_info;
            return stateCopy;
        }
        case SET_REPOS_STATE_CLEAR: {
            let stateCopy = {...state};
            stateCopy.mainInfo = {...stateCopy.mainInfo};
            stateCopy.mainInfo.repos_info = [...stateCopy.mainInfo.repos_info];

            stateCopy.mainInfo.repos_info = initialState.mainInfo.repos_info;
            return stateCopy;
        }
        case SET_COMMIT_STATE_CLEAR: {
            let stateCopy = {...state};
            stateCopy.mainInfo = {...stateCopy.mainInfo};
            stateCopy.mainInfo.commit_info = [...stateCopy.mainInfo.commit_info];

            stateCopy.mainInfo.commit_info = initialState.mainInfo.commit_info;
            return stateCopy;
        }
        case SET_INPUT_TEXT: {
            let stateCopy = {...state};
            stateCopy.inputText = action.inputText;
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}

export const getUserDataTC = (login) => {
    return (dispatch) => {
        axios
            .get(`https://api.github.com/users/${login}`)
            .then(result => {
                if (result)
                    dispatch(setLoginIsValidAC(true));
                dispatch(setUserDataAC({
                        avatar_url: result.data.avatar_url,
                        login: result.data.login,
                    }
                ));
            })
            .catch(error => {
                dispatch(setLoginIsValidAC(false));
                alert(`${error}. Invalid username.`);
            });
    };
};

export const getReposDataTC = (login) => {
    return (dispatch) => {
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
                dispatch(setReposDataAC(reposArrayFunction()));
            });
    };
};

export const setCommitDataTC = (login, rep) => {
    return (dispatch) => {
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
                    dispatch(setCommitDataAC(commitArrayFunction()));
                }
            )
    };

};

export const setUserDataAC = (mainInfo) => {
    return {type: SET_USER_DATA, mainInfo: mainInfo};
};
export const setReposDataAC = (reposInfo) => {
    return {type: SET_REPOS_DATA, reposInfo: reposInfo};
};
export const setCommitDataAC = (commitInfo) => {
    return {type: SET_COMMIT_DATA, commitInfo: commitInfo};
};
export const setUserStateClearAC = () => {
    return {type: SET_USER_STATE_CLEAR};
};
export const setReposStateClearAC = () => {
    return {type: SET_REPOS_STATE_CLEAR};
};
export const setCommitStateClearAC = () => {
    return {type: SET_COMMIT_STATE_CLEAR};
};
export const setLoginIsValidAC = (bool) => {
    return {type: SET_LOGIN_IS_VALID, bool: bool};
};
export const setInputTextAC = (inputText) => {
    return {type: SET_INPUT_TEXT, inputText: inputText};
};

export default mainPageReducer;