import {Routes, Route} from "react-router-dom";
import MainPageContainer from "./Containers/MainPageContainer";
import CommitPageContainer from "./Containers/CommitPageContainer";
import ReposPageContainer from "./Containers/ReposPageContainer";

function App(props) {
    return (
        <Routes>
            <Route exact path={'/'} element={<MainPageContainer/>}/>
            {
                props.loginIsValid && <Route path={`/:username`} element={<ReposPageContainer/>}/>
            }
            <Route path={`/:username/:rep`} element={<CommitPageContainer/>}/>
        </Routes>
    );
}

export default App;
