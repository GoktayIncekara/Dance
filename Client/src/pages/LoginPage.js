import React, { useEffect, useState } from "react";
import FormInput from "../components/FormInput/FormInput";
import { useSign } from "../common/helpers/useSign";
import form from "../common/css/form.module.css";
import global from "../common/css/global.module.css";
import { useNavigate } from "react-router-dom";
import { useAuthenticate } from "../common/helpers/useAuthenticate";

function LoginPage() {
  const navigate = useNavigate();
  const { ctx, logout } = useAuthenticate();
  const makePost = useSign("/user/signin", "/");

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (ctx.user) navigate("/");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    makePost({ ...values });
  };

  const onChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={global.body_container}>
      <div className={form.container}>
        <form className={form.form} onSubmit={handleSubmit}>
          <h1 className={form.heading}>Giriş Yap</h1>
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
            errorMessage="Lütfen şifrenizi girin"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            required
          />
          <button className={form.button}>Giriş Yap</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
