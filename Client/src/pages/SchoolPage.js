import React from "react";
import global from "../css/global.module.css";
import { useParams } from "react-router-dom";
import schoolImg from "../images/banner-latin-2.jpg";
import Card from "../components/Card/Card";
import { useGetSchools } from "../helpers/useGetSchools";

function SchoolPage() {
  const { id } = useParams();
  const { schools, setSchools } = useGetSchools(`/${id}`);

  return (
    <div className={global.body_container}>
      <div className={global.card_container}>
        <Card
          id={schools._id}
          key={schools._id}
          img={schoolImg}
          name={schools.schoolname}
          email={schools.email}
          city={schools.city}
          instructors={schools.instructors}
          phone={schools.phone}
          date={schools.year}
        />
      </div>
    </div>
  );
}

export default SchoolPage;
