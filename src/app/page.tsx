import CustomTable from "@/components/CustomTable";
import connectDB from "@/lib/db";

export default function Home() {
  connectDB()
  return (
    <main className="">
      <h1 className="p-10">Users Data</h1>
      <CustomTable />
    </main>
  );
}
