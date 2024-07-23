import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-white dark:text-opacity-60  ">
      <small className="mb-2 text-xs">
        &copy; 2024 Andrii Kerekeza. Do not sell my personal information.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span>build with
        React, Typescript, Tailwind Css, Framer Motion, React Email and Resend.{" "}
      </p>
    </footer>
  );
}
