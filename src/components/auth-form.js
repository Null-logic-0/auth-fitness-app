"use client";
import Image from "next/image";
import Logo from "../../public/images/auth-icon.jpg";
import Link from "next/link";
import { useActionState } from "react";
import { auth } from "@/actions/auth-actions";

export default function AuthForm({ mode }) {
  const [formState, formAction] = useActionState(auth.bind(null, mode), {});
  return (
    <form id="auth-form" action={formAction}>
      <div>
        <Image src={Logo} alt="A lock icon" quality={100} priority />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {formState.errors && (
        <ul id="form-errors">
          {Object.keys(formState.errors).map((error) => (
            <li key={error}>{formState.errors[error]}</li>
          ))}
        </ul>
      )}
      <p>
        <button type="submit">
          {mode === "login" ? "Login" : "Create Account"}
        </button>
      </p>
      <p>
        {mode === "login" && (
          <Link href="/?mode=signup">Create an account.</Link>
        )}
        {mode === "signup" && (
          <Link href="/?mode=login">Login with existing account.</Link>
        )}
      </p>
    </form>
  );
}
