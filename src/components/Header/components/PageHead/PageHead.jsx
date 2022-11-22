import "./pageHead.css";

function PageHead(props) {
  return (
    <div className="wPageHead">
      <h1 className="PageHead">{props.head}</h1>
    </div>
  );
}

export default PageHead;
