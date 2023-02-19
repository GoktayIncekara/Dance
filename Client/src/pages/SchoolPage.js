import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import schoolImg from "../images/banner-latin-2.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import button from "../css/button.module.css";

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
        <Link className={button.regular} to="/okul_ekle">
          Kendi dans okulunu ekle
        </Link>
      </div>
      <div className="school_cards">
        {schools.map((school) => (
          <Card
            key={school._id}
            img={schoolImg}
            name={school.schoolname}
            email={school.email}
            city={school.city}
            instructors={school.instructors}
            phone={school.phone}
            date={school.year}
          />
        ))}
      </div>
    </div>
  );
}

export default SchoolPage;
