import "./Home.css";
export default function Modal({ show, popup, setShow }) {
  console.log(show);
  function close() {
    setShow(false);
  }
  return show ? (
    <>
      <div className="modalcontainer">
        <div className="modalinner">
          <h2>Modal</h2>
          <h3>This page appears as a popup</h3>
          <button onClick={close}>Click</button>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

// condtion?"true":"false"
