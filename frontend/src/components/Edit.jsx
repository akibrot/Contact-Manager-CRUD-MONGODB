import React, { useState } from "react";
import "./CreateContact.scss";
import FileBase from "react-file-base64";
import { FaUser } from "react-icons/fa";
import { BsMailbox2, BsPhoneFill, BsTelephoneFill } from "react-icons/bs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LOAD } from "../redux/actions/actions";
function Edit({ history, location }) {
  const dispatch = useDispatch();
  const name = location.state.fullname;
  const emaila = location.state.email;
  const hm = location.state.homephone;
  const mp = location.state.mobilephone;
  const p = location.state.pic;

  const [fullname, setfullname] = useState(name);
  const [email, setemail] = useState(emaila);
  const [homephone, sethomephone] = useState(hm);
  const [mobilephone, setmobilephone] = useState(mp);
  const [pic, setPic] = useState(p);
  const submit = async (e) => {
    e.preventDefault();
    const Data = {
      fullname,
      email,
      homephone,
      mobilephone,
      pic,
    };
    const id = location.state._id;
    await axios
      .post("http://localhost:8080/edit", { Data, id })
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });

    await axios.get("http://localhost:8080/getcontact").then((res) => {
      dispatch(LOAD(res.data));
    });
  };
  return (
    <div>
      <div className="create">
        {/* <h1>{location.state}</h1> */}
        {console.log(name)}
        <div className="inputsf"></div>
        <form onSubmit={submit}>
          <div className="inputs">
            <FaUser className="ic" />{" "}
            <input
              type="text"
              name=""
              id=""
              placeholder="Full Name"
              required
              onChange={(e) => setfullname(e.target.value)}
              value={fullname}
            />
          </div>

          <div className="inputs">
            <BsMailbox2 className="ic" />{" "}
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
          </div>
          <div className="inputs">
            <BsTelephoneFill className="ic" />{" "}
            <input
              type="text"
              name=""
              id=""
              placeholder="Home Phone"
              required
              onChange={(e) => sethomephone(e.target.value)}
              value={homephone}
            />
          </div>
          <div className="inputs">
            <BsPhoneFill className="ic" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Mobile Phone"
              required
              onChange={(e) => setmobilephone(e.target.value)}
              value={mobilephone}
            />
          </div>
          <div className="inputs">
            <FileBase onDone={({ base64 }) => setPic(base64)}></FileBase>
          </div>
          <div className="inputs button">
            <input type="submit" value="save" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
