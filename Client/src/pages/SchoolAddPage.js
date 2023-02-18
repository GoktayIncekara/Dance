import React, { useState, useContext } from "react";
import FormInput from "../components/FormInput/FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

function SchoolAdd() {
  const ctx = useContext(AuthContext);
  const API = axios.create({ baseURL: "http://localhost:5000" });
  const navigate = useNavigate();

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
    const response = await API.post("/OKUL EKLE", { ...values });
    navigate("/okullar");
  };

  return (
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
        />
        <FormInput
          name="city"
          type="text"
          placeholder="Şehir"
          value={values["city"]}
          onChange={onChange}
          errorMessage="Lütfen okulun bulunduğu şehri girin."
          required
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
  );
}

export default SchoolAdd;
