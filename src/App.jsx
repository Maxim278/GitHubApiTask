import {Routes, Route} from "react-router-dom";
import MainPage from "./Components/MainPage";
import ReposPage from "./Components/ReposPage";
import CommitPage from "./Components/CommitPage";
import {useSelector} from "react-redux";
import LoginStatus from "./Components/LoginStatus";

function App() {
    const loginIsValid = useSelector(state => state.mainPageState.loginIsValid);
    return (
        <Routes>
            <Route exact path={'/'} element={<MainPage/>}/>
            {
                loginIsValid && <Route path={'/:login'} element={<ReposPage/>}/>
            }
            <Route path={'/:login/:rep'} element={<CommitPage/>}/>
            <Route path={'/auth'} element={<LoginStatus/>}/>
        </Routes>
    );
}

export default App;