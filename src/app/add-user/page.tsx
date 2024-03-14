import CommonForm from "@/components/CommonForm";
import React from "react";

const page = () => {
  return (
    <div className="p-10">
      <h1 className="pb-10">Add New User</h1>
      <CommonForm text="Add User" show={true} method='POST' url='http://localhost:3000/api/add-user' toastMessage='User Created Successfully' apiError='Failed to create user' />
    </div>
  );
};

export default page;
