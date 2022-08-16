import React, { useEffect, useState } from "react";
import "./AllContacts.scss";
import SingleContact from "./SingleContact";
import axios from "axios";
import { useSelector } from "react-redux";
function AllContacts({history,Delete}) {
  const state = useSelector(state => state.AllContactReducer.contact)
  const [data, setdata] = useState([]);
  const fetctData = async () => {
    await axios
      .get("http://localhost:8080/getcontact")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetctData();
  }, []);

 
  return (
    <div>
      <div className="contactcont">
        <div className="fake">
          {state.map((all) => {
            return (
              <SingleContact
                key={all._id}
                data={all}
                Delete={Delete}
              ></SingleContact>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllContacts;
