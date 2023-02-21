import React, { useState, useEffect } from "react";
import global from "../css/global.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import schoolImg from "../images/banner-latin-2.jpg";
import Card from "../components/Card/Card";

function SchoolPage() {
  const API = axios.create({ baseURL: "http://localhost:5000" });
  const { id } = useParams();
  const [school, setSchool] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.get(`/schools/${id}`);
      setSchool(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className={global.body_container}>
      <div className={global.card_container}>
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
      </div>
    </div>
  );
}

export default SchoolPage;
