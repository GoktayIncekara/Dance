import React, { useState } from "react";
import FormInput from "../components/FormInput/FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const API = axios.create({ baseURL: "http://localhost:5000" });
  const navigate = useNavigate();

  const options = ["Öğrenci", "Dans okulu", "Organizator (Yakında...)"];
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [role, setRole] = useState(null);

  const onChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const onRoleChangeHandler = (e) => {
    setRole(+e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await API.post("/user/signin", { ...values, role });
    localStorage.setItem("user", JSON.stringify(response.data));
    navigate("/");
  };

  return (
    <div className="body-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="form-heading">Giriş Yap</h1>
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
          <FormInput
            name="email"
            type="email"
            placeholder="Email"
            value={values["email"]}
            onChange={onChange}
            errorMessage="Lütfen geçerli bir email adresi girin."
            required
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
          />
          <button className="form-button">Giriş Yap</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
