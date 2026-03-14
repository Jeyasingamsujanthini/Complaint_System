"use client";
import Link from "next/link";
import { FaUser, FaUsers, FaCommentDots } from "react-icons/fa";

export default function AdminDashboard() {
  return (
    <div className="adminDashboard">

      <div className="adminCardContainer">

        <Link href="/admin/profile" className="adminCard">
          <FaUser className="adminCardIcon" />
          <p>Admin Profile</p>
        </Link>

        <Link href="/admin/users" className="adminCard">
          <FaUsers className="adminCardIcon" />
          <p>Manage Users</p>
        </Link>

        <Link href="/admin/complaints" className="adminCard">
          <FaCommentDots className="adminCardIcon" />
          <p>Manage Complaints</p>
        </Link>

      </div>

    </div>
  );
}