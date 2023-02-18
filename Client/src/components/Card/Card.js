import React from "react";
import styles from "./customCard.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard({ img, name, email, city, instructors, phone, date }) {
  return (
    <Card className={styles.card}>
      <Card.Img className={styles.card_img_top} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{email}</Card.Text>
        <h1>{city}</h1>
        <h1>{instructors}</h1>
        <h1>{phone}</h1>
        <h1>{date}</h1>
        <Button variant="primary">Bize ulaşın!</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
