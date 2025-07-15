import Image from "next/image";
import { RegistrationForm } from "./RegistrationForm";

export default function Home() {
  return (
    <>
      {/* <iframe
        src="https://registration-form-digimin-2025.vercel.app"
        width="75%" // change accordingly as needed
        height="450" // change accordingly as needed
        className="border-none"
      ></iframe> */}

      <RegistrationForm />
    </>
  );
}
