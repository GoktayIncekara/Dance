import React from "react";
import styles from "./customCard.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard({ img, title, desc, btn_text }) {
  return (
    <Card className={styles.card}>
      <Card.Img className={styles.card_img_top} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">{btn_text}</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
