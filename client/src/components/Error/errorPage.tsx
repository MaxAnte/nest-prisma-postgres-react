import React from "react";
import ErrorIcon from "../../assets/svg/error";
import { useNavigate } from "react-router-dom";

import "./errorPage.css";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="errorPageWrapper">
      <ErrorIcon width={300} height={290} />
      <h1 className="errorTitle">Whoops! Smth went wrong!</h1>
      <p>
        Try to{" "}
        <button onClick={() => navigate(-1)} className="linkButton">
          go back
        </button>{" "}
        while we are figuring out whats happened!
      </p>
    </div>
  );
}
