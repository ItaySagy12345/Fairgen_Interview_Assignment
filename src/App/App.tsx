import * as constants from "../Assets/Utils/Constants/constants";
import CommentsPage from "../Pages/CommentsPage/CommentsPage";
import Col from "../Components/General/Flexboxes/Column/Col";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
    return (
        <Col styles='app-main-content'>
            <Routes>
                <Route
                    path={constants.COMMENTS}
                    element={<CommentsPage />}
                />
            </Routes>
        </Col>
    );
}

export default App;
