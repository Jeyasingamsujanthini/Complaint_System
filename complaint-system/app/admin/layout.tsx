import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="adminContainer">

      <AdminSidebar />

      <div className="adminMain">

        <div className="adminHeader">
          Admin Dashboard
        </div>

        <div className="adminContent">
          {children}
        </div>

      </div>

    </div>
  );
}