import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "auth-context/auth.context";
import { useHistory } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

export const ProtectedRoute = ({ ...rest }) => {
  const history = useHistory();
  let { user } = useAuth();
  if (!user || !user.token || user.token === "") {
    return (
      <SweetAlert
        title="You must be signed in!"
        onCancel={() => history.push("/authentication/sign-in")}
        onConfirm={() => history.push("/authentication/sign-in")}
        confirmBtnCssClass={"px-5"}
      />
    );
  }

  return <Route {...rest} />;
};
