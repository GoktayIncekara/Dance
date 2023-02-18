import React from "react";
import styles from "./customCard.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CustomCard({ img, name, email, city, instructors, phone, date }) {
  return (
    <Card className={`${styles.card} text-center`}>
      <Card.Img className={styles.card_img_top} variant="top" src={img} />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>

      <Card.Header as="h1">{name}</Card.Header>
      <Card.Body>
        <Card.Title>{email}</Card.Title>
        <Card.Subtitle>{city}</Card.Subtitle>
        <Card.Text>{phone}</Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>{instructors}</ListGroup.Item>
      </ListGroup>
      <Card.Footer className="text-muted">{date}</Card.Footer>
      <Button variant="primary">Bize ulaşın!</Button>
    </Card>
  );
}

export default CustomCard;
