import React, { useState } from "react";
import FormInput from "../components/FormInput";
import axios from "axios";

function RegisterPage() {
  const API = axios.create({ baseURL: "http://localhost:5000" });
  const [role, setRole] = useState(null);
  const options = ["Öğrenci", "Dans okulu", "Organizator (Yakında...)"];

  const onRoleChangeHandler = (e) => {
    setRole(+e.target.value);
  };

  const [values, setValues] = useState({
    fullname: "",
    schoolname: "",
    email: "",
    city: "",
    phone: "",
    password: "",
    confirmPassword: "",
    year: "",
    birthday: "",
  });

  const onChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await API.post("/user/signup", { ...values, role });
    localStorage.setItem("token", response.data.token);
  };

  return (
    <div className="body-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="form-heading">Kayıt Ol</h1>
          <select className="register-select" onChange={onRoleChangeHandler}>
            <option disabled={role !== null}>Seçiniz</option>
            {options.map((option, index) => {
              return (
                <option key={index} value={index} disabled={index === 2}>
                  {option}
                </option>
              );
            })}
          </select>
          {role !== 1 && (
            <>
              <FormInput
                name="fullname"
                type="text"
                placeholder="Ad Soyad"
                value={values["fullname"]}
                onChange={onChange}
                errorMessage="Lütfen adınızı ve soyadınızı girin!"
                required
                disabled={role === null ? true : false}
              />
              <FormInput
                name="birthday"
                type="date"
                placeholder="Doğum tarihi"
                value={values["birthday"]}
                onChange={onChange}
                errorMessage="Lütfen doğum tarihinizi girin."
                required
                disabled={role === null ? true : false}
              />
            </>
          )}
          {role === 1 && (
            <>
              <FormInput
                name="schoolname"
                type="text"
                placeholder="Okul Adı"
                value={values["schoolname"]}
                onChange={onChange}
                errorMessage="Lütfen okulunuzun adını belirtin."
                required
                disabled={role === null ? true : false}
              />
              <FormInput
                name="year"
                type="text"
                placeholder="Kuruluş yılı"
                value={values["year"]}
                onChange={onChange}
                errorMessage="Lütfen okulunuzun kuruluş yılını girin."
                required
                disabled={role === null ? true : false}
              />
            </>
          )}

          <FormInput
            name="email"
            type="email"
            placeholder="Email"
            value={values["email"]}
            onChange={onChange}
            errorMessage="Lütfen geçerli bir email adresi girin."
            required
            disabled={role === null ? true : false}
          />
          <FormInput
            name="city"
            type="text"
            placeholder="Şehir"
            value={values["phone"]}
            onChange={onChange}
            errorMessage="Lütfen şehri girin."
            pattern="^[A-Za-z]{2,20}$"
            required
            disabled={role === null ? true : false}
          />
          <FormInput
            name="phone"
            type="tel"
            placeholder="Telefon numarası"
            value={values["city"]}
            onChange={onChange}
            errorMessage="Lütfen geçerli bir telefon numarası girin."
            pattern="0[0-9]{10}"
            required
            disabled={role === null ? true : false}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Şifre"
            value={values["password"]}
            onChange={onChange}
            errorMessage="Lütfen şifrenizi girin."
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            required
            disabled={role === null ? true : false}
          />
          <FormInput
            name="confirmPassword"
            type="password"
            placeholder="Lütfen şifrenizi doğrulayın."
            value={values["confirmPassword"]}
            onChange={onChange}
            errorMessage="Şifreler eşleşmiyor."
            pattern={values.password}
            required
            disabled={role === null ? true : false}
          />
          <button
            disabled={role === null ? true : false}
            className={`form-button ${
              role === null ? "register-button-disabled" : ""
            }`}
          >
            {role !== null ? `${options[role]} olarak kayıt ol` : "Kayıt ol"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
