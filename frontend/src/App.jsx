import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.scss";
import AllContacts from "./components/AllContacts";
import CreateContact from "./components/CreateContact";
import DetailPage from "./components/DetailPage";
import Edit from "./components/Edit";
import NavBar from "./components/NavBar";
import SideMenu from "./components/SideMenu";
import axios from "axios";
import { LOAD } from "./redux/actions/actions";
function App({ history }) {
  const dispatch = useDispatch();
  const [data, setdata] = useState([]);
  const fetctData = async () => {
    await axios
      .get("http://localhost:8080/getcontact")
      .then((res) => {
        dispatch(LOAD(res.data));
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetctData();
  }, []);

  const Delete = async (idnum) => {
    const id = idnum;
    console.log(id);
    await axios
      .post("http://localhost:8080/delete", { id })
      .then((res) => {
        setdata(res.data);
        history.pushState("/");
      })
      .catch((err) => {});
    fetctData();
  };
  return (
    <div className="app">
      <NavBar />
      <div className="sections">
        <SideMenu />
        <div className="others">
          <Route
            path="/"
            exact
            render={(props) => <AllContacts {...props} Delete={Delete}/>}
          />
          <Route
            path="/create"
            exact
            render={(props) => <CreateContact {...props} />}
          />
          <Route
            path="/detail/:id"
            render={(props) => <DetailPage {...props} />}
          />
          <Route path="/edit/:id" render={(props) => <Edit {...props} />} />
        </div>
      </div>
    </div>
  );
}

export default App;
