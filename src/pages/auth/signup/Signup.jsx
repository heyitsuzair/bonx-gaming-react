import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BreadcrumbTopPage } from "../../../inc/components/commons";
import { Images, RoutesPath } from "../../../inc/config";
import { useAuth } from "../../../inc/hooks/auth";
import SignupForm from "./SignupForm";

const Signup = ({ setProgress }) => {
  /**
   * RRD Helpers
   */
  const navigate = useNavigate();

  // Custom Hooks
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate(RoutesPath.dashboard.main + RoutesPath.dashboard.myGames);
    }
    setProgress(70);
    setProgress(100);
    setTimeout(() => {
      setProgress(0);
    }, 500);
  }, []);

  return (
    <div id="login">
      <BreadcrumbTopPage text="SIGNUP" />
      <section className="my-16 md:my-28 px-5 md:px-20">
        <div className="grid grid-cols-12 items-center justify-center gap-4 md:gap-9">
          <section className="col-span-12 md:col-span-6">
            <img src={Images.Auth.thumb} className="w-80 lg:w-11/12 mx-auto" />
          </section>
          <section className="col-span-12 md:col-span-6">
            <SignupForm />
          </section>
        </div>
      </section>
    </div>
  );
};

export default Signup;
