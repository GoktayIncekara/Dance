import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import schoolImg from "../images/banner-latin-2.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import button from "../css/button.module.css";
import global from "../css/global.module.css";
import { useAuthenticate } from "../helpers/useAuthenticate";

function SchoolsPage() {
  const { ctx, logout } = useAuthenticate();
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
    <div className={global.body_container}>
      <div className={global.heading}>
        <h1>Dans Okulları</h1>
        {ctx.user?.userObject.active ? (
          <Link className={button.regular} to="/profile">
            Okulu düzenle
          </Link>
        ) : (
          <Link className={button.regular} to="/okul_ekle">
            Kendi dans okulunu ekle
          </Link>
        )}
      </div>
      <div className={global.card_container}>
        {schools.map((school) => {
          if (school.active) {
            return (
              <Card
                id={school._id}
                key={school._id}
                img={schoolImg}
                name={school.schoolname}
                email={school.email}
                city={school.city}
                instructors={school.instructors}
                phone={school.phone}
                date={school.year}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default SchoolsPage;
