import "./pageHead.css";

function PageHead(props) {
  return (
    <div className="wPageHead">
      <h1 className="pageHead">{props.head}</h1>
    </div>
  );
}

export default PageHead;
