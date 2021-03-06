import React from "react";
import { NavLink } from "react-router-dom";

import AuthLayout from "./Layout/authLayout";
import RegistrationForm from "./forms/registrationForm";

import "./auth.scss";

export default function Register() {
  return (
    <AuthLayout>
      <RegistrationForm />
      <p className="form-undertext">
        Already have an account? <NavLink to="/login">Log in.</NavLink>
      </p>
    </AuthLayout>
  );
}
