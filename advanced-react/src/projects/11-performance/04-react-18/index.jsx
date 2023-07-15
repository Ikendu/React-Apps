import { useState, useTransition, lazy, Suspense } from "react";
const SlowComponent = lazy(() => import("./SlowComponent"));

const LatestReact = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setTransition] = useTransition();
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);

    // slow down CPU
    {
      /* keep the transition in the background until the loading is complete */
    }
    setTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });
      setItems(newItems);
    });
  };
  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>

      <button
        className="btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        toggle
      </button>
      {/*display Loading while waiting for data to finish load */}
      {isLoading ? (
        "Loading..."
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginTop: "2rem",
          }}
        >
          {items}
        </div>
      )}

      {show && (
        <Suspense fallback={"Loading..."}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  );
};
export default LatestReact;
