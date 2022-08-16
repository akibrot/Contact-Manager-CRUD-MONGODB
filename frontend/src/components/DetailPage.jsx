import React, { useEffect } from "react";

function DetailPage(props) {
  const { fullname, email, mobilephone, homephone,pic } = props.location.state;

  useEffect(() => {
    console.log(fullname);
  }, []);
  return (
    <div>
      <h1>Detail Page</h1>
      <h1>Full Name {fullname}</h1>
      <h1>Email {email}</h1>
      <h1>Mobile Number {mobilephone}</h1>
      <h1>Home Number {homephone}</h1>
      <img src={pic} alt="" width="400px" />
    </div>
  );
}

export default DetailPage;
