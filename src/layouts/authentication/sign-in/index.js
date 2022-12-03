/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import GithubSocial from "layouts/authentication/components/Socials/github";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";

import AuthApi from "../../../api/auth";
import { useAuth } from "../../../auth-context/auth.context";
import { API_SERVER } from "config/constant";

function SignIn() {
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(true);
  const [formData, setFormData] = useState({
    'email': '',
    'password': ''
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useAuth();
  const { user } = useAuth();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitFormData = (e) => {
    e.preventDefault();
    AuthApi.Login(formData)
      .then((response) => {
        if (response.data.success) {
          return setProfile(response);
        } else {
          setError(response.data.msg);
        }
      })
      .catch((error) => {
        if (error.response) {
          return setError(error.response.data.msg);
        }
        return setError("There has been an error.");
      });
  };

  const handleRedirect = () => {
    return navigate("/dashboard");
  };

  const setProfile = (response) => {
    let user = { ...response.data.user };
    user.token = response.data.token;
    user = JSON.stringify(user);
    setUser(user);
    localStorage.setItem("user", user);
    return navigate("/dashboard");
  };

  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setIsLoading(true);

      const requestData = {
        code: newUrl[1],
      };

      AuthApi.Authorize(requestData.code)
        .then(({ data }) => {
          if (data.user) {
            setUser(JSON.stringify(data.user));
            localStorage.setItem("user", JSON.stringify(data.user));
            handleRedirect();
          } else {
            setError("no user returned");
          }
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  return (
    <CoverLayout
      title="Welcome back"
      description="Login through github or enter your email and password to sign in"
      image={curved9}
    >
      {isLoading ? (
        <SoftBox display="flex" justifyContent="center">
          <RotatingLines
            strokeColor="black"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </SoftBox>
      ) : user && user.token ? (
        <div>
          <h3 style={{ textAlign: "center" }}>You are already signed in.</h3>
          <SoftBox mt={4} mb={1}>
            <SoftButton variant="gradient" buttonColor="info" fullWidth onClick={handleRedirect}>
              {`Let's go`}
            </SoftButton>
          </SoftBox>
        </div>
      ) : (
        <>
          <SoftBox display="flex" flexDirection="column" alignItems="center" mb={2}>
            <GithubSocial />
          </SoftBox>
          <Separator />
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Email
                </SoftTypography>
              </SoftBox>
              <SoftInput type="email" name="email" value={formData?.email} onChange={handleFormData} placeholder="Email" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftBox mb={1} ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Password
                </SoftTypography>
              </SoftBox>
              <SoftInput
                type="password"
                name="password"
                onChange={handleFormData}
                placeholder="Password"
                value={formData?.password}
              />
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;Remember me
              </SoftTypography>
            </SoftBox>
            <SoftBox mt={2} mb={2} textAlign="center">
              <h6
                style={{
                  fontSize: ".8em",
                  color: "red",
                  textAlign: "center",
                  fontWeight: 400,
                  transition: ".2s all",
                }}
              >
                {error}
              </h6>
            </SoftBox>
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="info" onClick={submitFormData} fullWidth>
                sign in
              </SoftButton>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Don&apos;t have an account?{" "}
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </>
      )}
    </CoverLayout>
  );
}

export default SignIn;
