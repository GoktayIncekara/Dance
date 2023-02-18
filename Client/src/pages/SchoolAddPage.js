import React, { useState, useContext } from "react";
import FormInput from "../components/FormInput/FormInput";
import { useAuthenticate } from "../helpers/useAuthenticate";
import { Link } from "react-router-dom";
import { useSign } from "../helpers/useSign";

function SchoolAdd() {
  const makePost = useSign("/schools/add_school", "/okullar");
  const { ctx, logout } = useAuthenticate();

  const [values, setValues] = useState({
    schoolname: ctx.user?.userObject.schoolname,
    year: ctx.user?.userObject.year,
    email: ctx.user?.userObject.email,
    city: ctx.user?.userObject.city,
    phone: ctx.user?.userObject.phone,
    instructors: 0,
  });

  const onChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    makePost({ ...values });
  };

  return (
    <div>
      {ctx.user?.userObject.role === 1 ? (
        <div className="form-container-schools-add">
          <form onSubmit={handleSubmit}>
            <h1 className="form-heading">Okul Ekle</h1>
            <FormInput
              name="schoolname"
              type="text"
              placeholder="Okul adı"
              value={values["schoolname"]}
              onChange={onChange}
              errorMessage="Lütfen bir okul adı girin."
              required
              disabled
            />
            <FormInput
              name="year"
              type="text"
              placeholder="Kuruluş Yılı"
              value={values["year"]}
              onChange={onChange}
              errorMessage="Lütfen kuruluş yılınızı girin."
              required
              disabled
            />
            <FormInput
              name="email"
              type="email"
              placeholder="Email"
              value={values["email"]}
              onChange={onChange}
              errorMessage="Lütfen geçerli bir email girin."
              required
              disabled
            />
            <FormInput
              name="city"
              type="text"
              placeholder="Şehir"
              value={values["city"]}
              onChange={onChange}
              errorMessage="Lütfen okulun bulunduğu şehri girin."
              required
              disabled
            />
            <FormInput
              name="phone"
              type="text"
              placeholder="Telefon"
              value={values["phone"]}
              onChange={onChange}
              errorMessage="Lütfen geçerli bir telefon numarası girin."
              pattern="0[0-9]{10}"
              required
              disabled
            />
            <FormInput
              name="instructors"
              type="number"
              placeholder="Eğitmen sayısı"
              value={values["instructors"]}
              onChange={onChange}
              errorMessage="Lütfen eğitmen sayınızı girin."
              min="0"
              required
            />
            <button className="form-button">Okul kaydet!</button>
          </form>
        </div>
      ) : (
        <div className="add-school-error">
          {ctx.user?.userObject.role === 0 ? (
            <h2>
              Okulunuzu ekleyebilmek için lütfen
              <span> bir okul hesabı ile</span> üye olun veya giriş yapın
              <Link className="add-school-error-link" onClick={logout} to="/">
                <h2 className="add-school-error-text"> Çıkış yap</h2>
              </Link>
            </h2>
          ) : (
            <h2>
              Okulunuzu ekleyebilmek için lütfen
              <span> bir okul hesabı ile</span>
              <Link className="add-school-error-link" to="/register">
                <h2 className="add-school-error-text"> Üye olun</h2>
              </Link>
              veya
              <Link className="add-school-error-link" to="/login">
                <h2 className="add-school-error-text"> Giriş yapın</h2>
              </Link>
            </h2>
          )}
        </div>
      )}
    </div>
  );
}

export default SchoolAdd;
