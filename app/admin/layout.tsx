import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  console.log("ADMIN LAYOUT LOADED");


  if (!session) {
    redirect("/admin/login");
  }

  return <>{children}</>;
}
