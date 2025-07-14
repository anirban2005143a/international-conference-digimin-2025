import Image from "next/image";
import { RegistrationForm } from "./RegistrationForm";

export default function Home() {
  return (
    <>
      {/* <iframe
        src="https://registration-form-digimin-2025.vercel.app"
        width="50%"
        height="250"
        className="border-none"
      ></iframe> */}

      <RegistrationForm />
    </>
  );
}
