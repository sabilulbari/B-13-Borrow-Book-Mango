"use client";
import React, { useState } from "react";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { authClient } from "../../../../lib/auth-client";
import { toast } from "react-toastify";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });
    if(error){
      toast.error(error.message)
    }
    else{
      toast.success(`${res.user.name} "Loged in Successfull"`)
    }
  };
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950/80">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_30%)]" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-[32px] border border-white/20 bg-white/10 p-8 shadow-2xl shadow-slate-900/30 backdrop-blur-xl">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-white">Login</h1>
          </div>
          <Form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-white">Email</Label>
              <Input placeholder="john@example.com" className="p-3 " {...register("email")} />
              <FieldError />
            </TextField>
            {/* password */}
            <TextField className="w-full" name="password">
              <Label className="text-white">Password</Label>
              <InputGroup>
                <InputGroup.Input placeholder="Enter your password" className="w-full p-3" {...register("password")} type={isVisible ? "text" : "password"} />
                <InputGroup.Suffix className="pr-0">
                  <Button isIconOnly aria-label={isVisible ? "Hide password" : "Show password"} size="sm" variant="ghost" onPress={() => setIsVisible(!isVisible)}>
                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
            </TextField>
            <div className="flex gap-2">
              <Button className="w-full" type="submit">
                <Check />
                Login
              </Button>
            </div>
            <div className="mt-4 space-y-2">
              <h2 className="text-white/70 font-medium text-xl">Continue With</h2>
              <div className="flex items-center space-x-2 justify-center text-lg font-medium border border-blue-200 bg-blue-50 p-2 btn">
                <FcGoogle className="text-2xl" /> <p>Login with google</p>
              </div>
            </div>
            <div className="flex">
              <p className="text-white">Don&apos;t have account?</p>{" "}
              <Link className=" border-b text-red-500 ml-2 hover:border-red-500" href={"/register"}>
                Register
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
