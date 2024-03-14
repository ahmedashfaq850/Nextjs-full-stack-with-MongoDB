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
          {/* <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div> */}
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
