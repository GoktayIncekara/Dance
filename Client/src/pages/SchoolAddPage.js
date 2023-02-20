import React, { useState, useContext } from "react";
import FormInput from "../components/FormInput/FormInput";
import { useAuthenticate } from "../helpers/useAuthenticate";
import { Link } from "react-router-dom";
import { useSign } from "../helpers/useSign";
import form from "../css/form.module.css";
import global from "../css/global.module.css";

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
    <div className={global.body_container}>
      {ctx.user?.userObject.role === 1 ? (
        <div className={form.container}>
          <form className={form.form} onSubmit={handleSubmit}>
            <h1 className={form.heading}>Okul Ekle</h1>
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
            <button className={form.button}>Okul kaydet!</button>
          </form>
        </div>
      ) : (
        <div className={global.div}>
          {ctx.user?.userObject.role === 0 ? (
            <h2>
              Okulunuzu ekleyebilmek için lütfen
              <span> bir okul hesabı ile</span> üye olun veya giriş yapın
              <Link className={global.link} onClick={logout} to="/">
                <h2> Çıkış yap</h2>
              </Link>
            </h2>
          ) : (
            <h2>
              Okulunuzu ekleyebilmek için lütfen
              <span> bir okul hesabı ile</span>
              <Link className={global.link} to="/register">
                <h2> Üye olun</h2>
              </Link>
              veya
              <Link className={global.link} to="/login">
                <h2> Giriş yapın</h2>
              </Link>
            </h2>
          )}
        </div>
      )}
    </div>
  );
}

export default SchoolAdd;
