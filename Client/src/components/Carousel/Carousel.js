import Latin from "../../images/banner-latin.jpg";
import Latin2 from "../../images/banner-latin-2.jpg";
import Carousel from "react-bootstrap/Carousel";
import React from "react";
import styles from "./carousel.module.css";

function CarouselCom() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.car_img}`}
          src={Latin}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.car_img}`}
          src={Latin}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.car_img}`}
          src={Latin}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCom;
