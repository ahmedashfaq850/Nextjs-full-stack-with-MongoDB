"use client";
import useFetch from "@/hooks/useFetch";

import React from "react";

const UserPage = ({ params }: { params: { id: string } }) => {
  const { data, error } = useFetch(
    `http://localhost:3000/api/user/${params.id}`
  );
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <div key={data._id} className="p-10">
      <h1>UserName: {data.username}</h1>
      <p>Designation: {data.designation}</p>
    </div>
  );
};

export default UserPage;
