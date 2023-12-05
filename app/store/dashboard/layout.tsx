import React from "react";
import { DashboardSidebar } from "@/app/store/dashboard/components/dashboard.sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <DashboardSidebar />
        <main className={"ml-[320px] p-6"}>{children}</main>
      </div>
    </>
  );
}
