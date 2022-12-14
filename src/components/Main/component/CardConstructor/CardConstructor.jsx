import { Container, Row, Col } from "react-bootstrap";
import "./cardConstructor.css";

function CardConstructor({ imgSrc, imgAlt, cardTitle, cardDes }) {
  return (
    <div className="cardWrapper">
      <img
        className="cardImg"
        alt={imgAlt}
        src={imgSrc}
      />

      <Container className="bodyWrapper">
        <Row className="cardBody">
          <Col>
            <h3 className="cardTitle">{cardTitle}</h3>
            <p className="cardDes">{cardDes}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardConstructor;
