import React, { useState } from "react";
import FormInput from "../components/FormInput/FormInput";
import { useSign } from "../common/helpers/useSign";
import form from "../common/css/form.module.css";
import global from "../common/css/global.module.css";

function RegisterPage() {
  const makePost = useSign("/user/signup", "/");
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
    makePost({ ...values, role });
  };

  return (
    <div className={global.body_container}>
      <div className={form.container}>
        <form className={form.form} onSubmit={handleSubmit}>
          <h1 className={form.heading}>Kayıt Ol</h1>
          <select className={form.select} onChange={onRoleChangeHandler}>
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
            value={values["city"]}
            onChange={onChange}
            errorMessage="Lütfen şehri girin."
            pattern="^[A-Za-z-İ]{2,20}$"
            required
            disabled={role === null ? true : false}
          />
          <FormInput
            name="phone"
            type="tel"
            placeholder="Telefon numarası"
            value={values["phone"]}
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
            errorMessage="Şireniz minimum 8 karakter olmalı, en az bir büyük harf bir rakam ve bir özel karakter içermelidir."
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
            className={`${form.button} ${
              role === null ? form.button_disabled : ""
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
