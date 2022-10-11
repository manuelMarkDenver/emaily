import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { getCurrentUser } from "../features/users/userService";

import Header from "./Header";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  const [user, setUser] = useState({})
  const dispatch = useDispatch();

  
  const fetchedUser = useSelector((state) => state.userSlice.user);
  console.log("🚀 ~ file: App.js ~ line 17 ~ App ~ fetchedUser", fetchedUser)
  
  useEffect(() => {
    getCurrentUser(dispatch);
  }, [user, dispatch]);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/surveys" exact component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
