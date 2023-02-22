import React from "react";
import Card from "../components/Card/Card";
import schoolImg from "../images/banner-latin-2.jpg";
import { Link } from "react-router-dom";
import button from "../common/css/button.module.css";
import global from "../common/css/global.module.css";
import { useAuthenticate } from "../common/helpers/useAuthenticate";
import { useGetSchools } from "../common/helpers/useGetSchools";

function SchoolsPage() {
  const { ctx, logout } = useAuthenticate();
  const { schools, setSchools } = useGetSchools("");

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
                path={`/okullar/${school._id}`}
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
