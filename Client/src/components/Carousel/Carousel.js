import Latin from "../../images/banner-latin.jpg";
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
          <h3 className={styles.car_main_text}>Dans Okulları</h3>
          <p className={styles.car_secondary_text}>
            Nerede hangi dans okulu var merak mı ediyorsunuz?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.car_img}`}
          src={Latin}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className={styles.car_main_text}>Dans Geceleri</h3>
          <p className={styles.car_secondary_text}>
            Dans gecesine gitmek istiyor fakat nerede var bilmiyor musunuz?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={`d-block w-100 ${styles.car_img}`}
          src={Latin}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className={styles.car_main_text}>Dans Festivalleri</h3>
          <p className={styles.car_secondary_text}>
            Şehir şehir festival kovalamaktan yoruldunuz mu?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCom;
