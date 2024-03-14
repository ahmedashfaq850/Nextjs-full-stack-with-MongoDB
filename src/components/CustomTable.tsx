"use client";

import React from "react";
import useFetch from "../hooks/useFetch";
import { Eye } from "lucide-react";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomDialog from "./CustomDialog";

const CustomTable = () => {
  const { data, error } = useFetch("http://localhost:3000/api/users");
  const { toast } = useToast();
  const deleteHanlde = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/user/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete user");
      }
      const data = await res.json();
      toast({
        title: data.message,
      });
    } catch (err) {
      console.log("Error deleting user", err);
    }
  };

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className="p-10 flex justify-center items-center w-full mx-auto">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length &&
            data.map((user: any, index: number) => (
              <TableRow key={user._id}>
                <TableCell className="font-medium">{user.username}</TableCell>
                <TableCell>{user.designation}</TableCell>
                <TableCell>
                  <div className="flex gap-5">
                    <Link href={`/user/${user._id}`}>
                      <Eye className="cursor-pointer text-orange-400" />
                    </Link>
                    <CustomDialog id={user._id}/>
                    <Trash2
                      onClick={() => deleteHanlde(user._id)}
                      className="text-red-400 cursor-pointer"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomTable;
