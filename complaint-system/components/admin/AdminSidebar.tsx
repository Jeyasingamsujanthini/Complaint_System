"use client";

import Link from "next/link";
import { FaHome, FaUser, FaUsers, FaClipboardList } from "react-icons/fa";

export default function AdminSidebar() {
  return (
    <div className="adminSidebar">
      <Link href="/admin/dashboard" className="sidebarItem">
        <FaHome className="sidebarIcon" />
        Dash Board
      </Link>

      <Link href="/admin/profile" className="sidebarItem">
        <FaUser className="sidebarIcon" />
        Admin Profile
      </Link>

      <Link href="/admin/users" className="sidebarItem">
        <FaUsers className="sidebarIcon" />
        Users
      </Link>

      <Link href="/admin/complaints" className="sidebarItem">
        <FaClipboardList className="sidebarIcon" />
        Complaints
      </Link>
    </div>
  );
}