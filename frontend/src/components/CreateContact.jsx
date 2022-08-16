import React, { useState } from "react";
import "./CreateContact.scss";
import FileBase from "react-file-base64";
import { FaUser } from "react-icons/fa";
import { BsMailbox2, BsPhoneFill, BsTelephoneFill } from "react-icons/bs";
import axios from "axios";
import { LOAD } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
function CreateContact({ history }) {
  const dispatch = useDispatch()
  
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [homephone, sethomephone] = useState("");
  const [mobilephone, setmobilephone] = useState("");
  const [pic, setPic] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    const Data = {
      fullname,
      email,
      homephone,
      mobilephone,
      pic,
    };
    await axios
      .post("http://localhost:8080/createcontact", Data)
      .then((res) => {
        history.push("/")
      })
      .catch((err) => {
        console.log(err);
      });

      await axios
      .get("http://localhost:8080/getcontact")
      .then((res) => {
        dispatch(LOAD(res.data));
      })
      
  };
  return (
    <div>
      <div className="create">
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

export default CreateContact;
