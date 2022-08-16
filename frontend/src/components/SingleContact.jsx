import React from "react";
import "./AllContacts.scss";
import { FaHeart, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../avatar1.png";
function SingleContact({ data, Delete }) {
  return (
    <div className="box">
      <div className="pic">
        <Link to={{ pathname: `/detail/${data._id} `, state: data }}>
          <div className="div">
            <img src={data.pic} alt="" width="200px" height="200px" />
          </div>
        </Link>
      </div>
      <div className="items">
        <div className="phone">
          <h4>{data.fullname}</h4>

          <h4>{data.mobilephone}</h4>
        </div>
        <div className="button">
          <FaHeart className="icons fav" />
          <Link to={{ pathname: `/edit/${data._id}`, state: data}}>
            <FaEdit className="icons" />
          </Link>
          <FaTrash onClick={() => Delete(data._id)} />
        </div>
      </div>
    </div>
  );
}

export default SingleContact;
