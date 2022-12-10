function Cards({ imageSrc, imageAlt, cardTitle, cardDes }) {
  return (
    //
    <div className="cardWrapper">
      <img
        className="cardImage"
        alt={imageAlt}
        src={imageSrc}
      />
      <h3 className="cardTitle">{cardTitle}</h3>
      <p className="cardDes">{cardDes}</p>
    </div>
  );
}

export default Cards;
