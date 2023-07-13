import { useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick} className="btn">
        {show ? "Remove" : "Display"}
      </button>
      {show && <h2>You will continue to be lucky</h2>}
    </div>
  );
};

// const handleClick = () => {
//   if (show) {
//     setShow(false);
//   } else {
//     setShow(true);
//   }
// };
export default ShowHide;
