import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CardConstructor from "./component/CardConstructor/CardConstructor";
import "./main.css";

function Main() {
  return (
    <Container>
      <main className="mainContent">
        <Row>
          <section className="cardsSection">
            <Row>
              <Col>
                <h2 className="sectionCardsTitle">Samples</h2>
              </Col>
            </Row>

            <Row>
              <Col>
                <CardConstructor
                  cardTitle="🍕Pizza🍕"
                  cardDes="A Delicious Pizza."
                  imageSrc="https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg?w=500&h=375&crop=1"
                  imageAlt="a Delicious Pizza."
                />
              </Col>

              <Col>
                <CardConstructor
                  cardTitle="🍝Spaghetti🍝"
                  cardDes="Delicious spaghett."
                  imageSrc="https://www.goya.com/media/4173/creole-spaghetti.jpg?width=470"
                  imageAlt="a Delicious Spaghetti."
                />
              </Col>
            </Row>
          </section>
        </Row>
      </main>
    </Container>
  );
}

export default Main;
