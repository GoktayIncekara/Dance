import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import schoolImg from "../images/banner-latin-2.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

function SchoolPage() {
  const API = axios.create({ baseURL: "http://localhost:5000" });
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.get("/schools");
      setSchools(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="body-container">
      <div className="school-head">
        <h1 className="school-heading">Dans Okulları</h1>
        <Link className="nav_link" to="/okul_ekle">
          Kendi dans okulunu ekle
        </Link>
      </div>
      <div className="school_cards">
        <Card
          img={schoolImg}
          title={schools[0]?.schoolname}
          desc={schools[0]?.email}
          btn_text="Bize ulaşın"
        />
        <Card
          img={schoolImg}
          title={schools[0]?.schoolname}
          desc={schools[0]?.email}
          btn_text="Bize ulaşın"
        />
        <Card
          img={schoolImg}
          title={schools[0]?.schoolname}
          desc={schools[0]?.email}
          btn_text="Bize ulaşın"
        />
        <Card
          img={schoolImg}
          title={schools[0]?.schoolname}
          desc={schools[0]?.email}
          btn_text="Bize ulaşın"
        />
        <Card
          img={schoolImg}
          title={schools[0]?.schoolname}
          desc={schools[0]?.email}
          btn_text="Bize ulaşın"
        />
        <Card
          img={schoolImg}
          title={schools[0]?.schoolname}
          desc={schools[0]?.email}
          btn_text="Bize ulaşın"
        />
        <Card
          img={schoolImg}
          title={schools[0]?.schoolname}
          desc={schools[0]?.email}
          btn_text="Bize ulaşın"
        />
        <Card
          img={schoolImg}
          title={schools[0]?.schoolname}
          desc={schools[0]?.email}
          btn_text="Bize ulaşın"
        />
        <Card
          img={schoolImg}
          title={schools[0]?.schoolname}
          desc={schools[0]?.email}
          btn_text="Bize ulaşın"
        />
        <Card
          img={schoolImg}
          title={schools[0]?.schoolname}
          desc={schools[0]?.email}
          btn_text="Bize ulaşın"
        />
        <Card
          img={schoolImg}
          title={schools[0]?.schoolname}
          desc={schools[0]?.email}
          btn_text="Bize ulaşın"
        />
      </div>
    </div>
  );
}

export default SchoolPage;
