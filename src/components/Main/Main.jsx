import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards.jsx";
import palm from "./palm.jpg";
import "./main.css";

function Main() {
  return (
      <main className="mainContent">
        <section className="cardsSection">
          <h2 className="sectionCardsTitle">            Samples
          </h2>
    <hr/>
          <Row className="cardsContainer">
            <Cards
              cardTitle="Palm"
              cardDes="This is Palm tree🌴."
              imageSrc={palm}
              imageAlt="a Palm tree"
            />

            <Cards
              cardTitle="Spaghetti"
              cardDes="This is Delicious spaghetti🍝."
              imageSrc="https://www.goya.com/media/4173/creole-spaghetti.jpg?width=470"
              imageAlt="Delicious Spaghetti."
            />
          </Row>
        </section>
      </main>
  );
}

export default Main;
