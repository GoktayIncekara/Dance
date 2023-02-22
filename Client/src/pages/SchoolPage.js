import React from "react";
import global from "../css/global.module.css";
import { useParams } from "react-router-dom";
import schoolImg from "../images/banner-latin-2.jpg";
import Card from "../components/Card/Card";
import { useGetSchools } from "../common/helpers/useGetSchools";

function SchoolPage() {
  const { id } = useParams();
  const { schools: school, setSchools: setSchool } = useGetSchools(`/${id}`);

  return (
    <div className={global.body_container}>
      <div className="school_container">
        <div className="school_infos">
          <Card
            big
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
        <div className="school_schedule"></div>
      </div>
    </div>
  );
}

export default SchoolPage;
