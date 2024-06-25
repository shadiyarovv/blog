"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button className="text-white" onClick={() => signOut()}>
      Logout
    </button>
  );
};

export default LogoutButton;
