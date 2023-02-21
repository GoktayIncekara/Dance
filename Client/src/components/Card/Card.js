import React from "react";
import styles from "./customCard.module.css";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function CustomCard({ img, name, email, city, instructors, phone, date, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/okullar/${id}`);
  };

  return (
    <Card onClick={handleClick} className={`${styles.card} text-center`}>
      <Card.Img className={styles.card_img_top} variant="top" src={img} />
      <Card.ImgOverlay className={styles.overlay}>
        <Card.Title className={styles.name}>{name}</Card.Title>
      </Card.ImgOverlay>

      <Card.Header as="h3">{email}</Card.Header>
      <Card.Body>
        <Card.Title>{city}</Card.Title>
        <Card.Text>Telefon numarası: {phone}</Card.Text>
        <Card.Text>Eğitmen sayısı: {instructors}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{date}</Card.Footer>
    </Card>
  );
}

export default CustomCard;
