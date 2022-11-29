import React from "react";
import { useAuth } from './auth-context/auth.context';
import { useNavigate, Outlet } from 'react-router-dom';
import SweetAlert from "react-bootstrap-sweetalert";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  let { user } = useAuth();
    return (<>
      {(!user || !user.token || user.token === "") ? (
        <SweetAlert
          title="You must be signed in!"
          onCancel={() => navigate("/authentication/sign-in")}
          onConfirm={() => navigate("/authentication/sign-in")}
          confirmBtnCssClass={"px-5"}
        />
      ) : (
        <Outlet />
      )}
  </>);
};
