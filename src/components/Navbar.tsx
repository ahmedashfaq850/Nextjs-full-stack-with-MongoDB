import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModelToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-10 py-4 drop-shadow-lg flex gap-5">
      <Link href="/">
        <Button variant="outline">Home Page</Button>
      </Link>
      <Link href="add-user">
        <Button variant="outline">Add User</Button>
      </Link>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
