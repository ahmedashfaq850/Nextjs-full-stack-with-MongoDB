import { Button } from "@/components/ui/button";
import { FilePenLine } from "lucide-react";
import useFetch from "@/hooks/useFetch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CommonForm from "./CommonForm";

const CustomDialog = ({ id }:any) => {
  const { data, error } = useFetch(`http://localhost:3000/api/user/${id}`);
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <FilePenLine className="text-blue-400 cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Make changes to your User Data here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <CommonForm text='Save Changes'  method='PUT' url='http://localhost:3000/api/edit-user' id={id} toastMessage='User Updated Successfully' apiError='Failed to update user' defaultValue = {data} />
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomDialog;
