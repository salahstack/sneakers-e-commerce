import { Form, Link } from "react-router-dom";
import { logo } from "../assets";
import TextField from "../components/TextField";
import { Button } from "../components/Button";

import { banner } from "../assets";

const Register = () => {
  return (
    <div className="w-screen h-dvh">
      <div className="container mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2 h-[inherit] w-[inherit]">
        <div className="flex flex-col p-4">
          <Link to="/" className="mx-auto lg:mx-0 mb-auto">
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex flex-col p-4 w-full max-w-[480px] mx-auto">
            <h2 className="text-4xl font-semibold text-center">Create an account</h2>
            <p className="text-onSurface mt-1 mb-5 px-2">
            Shop now and elevate your sneaker style with exclusive designs and unbeatable comfort!.
            </p>
            <Form method="post" className="grid grid-cols-1 gap-4">
              <TextField
                name="full name"
                placeholder="Full name"
                label="Full name"
              />
              <TextField
                name="email"
                placeholder="Email"
                label="Email"
                type="email"
              />
              <TextField
                type="password"
                name="password"
                placeholder="Enter your password"
                label="Password"
              />
              <Button type="submit">Create account</Button>
            </Form>
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="link font-medium inline-block">
                Sign in
              </Link>
            </p>
          </div>
          <p className="text-sm mt-auto mx-auto">
            &copy; all rights reserved 2025. created by Salah Eddine Mj
          </p>
        </div>
        <div className="hidden lg:block lg:rounded-lg overflow-hidden">
          <img
            src={banner}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
