import useToggle from "./useToggle";

const ToggleExample = () => {
  const [toggle, myToggle] = useToggle(true);
  return (
    <div>
      <h2>Toggle Show</h2>
      <button className="btn" onClick={myToggle}>
        {toggle ? "Please hide" : "Display Please"}
      </button>
      {toggle && <h3>This is Younglife</h3>}
    </div>
  );
};
export default ToggleExample;
