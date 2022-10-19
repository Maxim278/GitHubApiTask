const SET_USER_DATA = 'SET_USER_DATA';
const SET_REPOS_DATA = 'SET_REPOS_DATA';
const SET_STATE_CLEAR = 'SET_STATE_CLEAR';
const SET_COMMIT_DATA = 'SET_COMMIT_DATA';
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
    loginIsValid: false
}

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            let stateCopy = {...state};
            stateCopy.mainInfo = {...stateCopy.mainInfo};

            for (let mainInfoKey in action.mainInfo) {
                stateCopy.mainInfo[mainInfoKey] = action.mainInfo[mainInfoKey];
            }
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
        case SET_STATE_CLEAR: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export const setUserDataAC = (mainInfo) => {
    return {type: SET_USER_DATA, mainInfo: mainInfo};
};
export const setReposDataAC = (reposInfo) => {
    return {type: SET_REPOS_DATA, reposInfo: reposInfo};
};
export const setCommitDataAC = (commitInfo) => {
    return {type: SET_COMMIT_DATA, commitInfo: commitInfo};
};
export const setStateClearAC = () => {
    return {type: SET_STATE_CLEAR};
};
export const setLoginIsValidAC = (bool) => {
    return {type: SET_LOGIN_IS_VALID, bool: bool};
};

export default mainPageReducer;