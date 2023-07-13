import React from "react";
import avatar from "../../assets/default-avatar.svg";
function Person({ name, id, images, nickName }) {
  //const img = images?.[0].small.url || avatar;
  //const img = (images && images[0] && images[0].small.url) || avatar;
  const img = images?.[0]?.small.url ?? avatar;

  return (
    <div>
      <h2>{name}</h2>
      <p>Nick Name: {nickName || "Guy Man"}</p>
      <img src={img} alt={name} style={{ width: "80px" }} />
    </div>
  );
}
export default Person;
