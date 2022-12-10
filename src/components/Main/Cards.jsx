import { Card } from "react-bootstrap";
function Cards({ imageSrc, imageAlt, cardTitle, cardDes }) {
  return (
    //
    <Card className="cardWrapper">
      //
      <Card.Img
        className="cardImage"
        alt={imageAlt}
        src={imageSrc}
      />
      //
      <Card.Body>
        //
        <Card.Title className="cardTitle">{cardTitle}</Card.Title>
        //
        <Card.Text className="cardDes">{cardDes}</Card.Text>
      //
    </Card.Body>
    //
    </Card>
  );
}

export default Cards;
