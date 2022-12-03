import "./menuPage.css";

export default function MenuPage({state}) {

  console.log("T1-props: ", state);
  return (
    <div className={`menuPage ${state ? "showMenu" : ""}`}>Test</div>
  );
}
