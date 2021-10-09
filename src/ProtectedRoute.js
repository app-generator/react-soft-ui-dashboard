import React from "react";
import { useAuth } from "./auth-context/auth.context";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";
import Swal from "sweetalert2";

export const ProtectedRoute = (props) => {
  const history = useHistory();
  let { user } = useAuth();

  if (!user || !user.token || user.token === "") {
    return (
      <div style={{ position: "relative", width: "100%" }}>
        <div style={{ position: "fixed", top: 0, zIndex: 9999, width: "100%" }}>
          {Swal.fire("Sign in!", "You must be signed in first.", "info").then(() => {
            history.push("/authentication/sign-in");
            return window.location.reload();
          })}
        </div>

        <div
          style={{
            filter: "blur(10px)",
            pointerEvents: "none",
          }}
        ></div>
      </div>
    );
  }
  // eslint-disable-next-line react/prop-types
  return <Route exact path={props.path} component={props.component} key={props.key} />;
};
