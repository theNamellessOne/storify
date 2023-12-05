import { Button } from "@nextui-org/react";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { DashboardTable } from "@/app/store/dashboard/components/dashboard.table";
import { SampleActions, SampleColumns, SampleData } from "@/data/sample.data";
import { CollectionDropdowns } from "../components/temp";

export default function ProductsPage() {
  return (
    <div className={"shadow-small rounded-large p-1"}>
      <div className={"flex justify-between items-center p-4"}>
        <h2 className={"font-semibold text-2xl"}>Products</h2>

        <div className={"flex gap-2"}>
          <Button variant={"flat"} isIconOnly size={"sm"} className={"p-1.5"}>
            <Search />
          </Button>

          <CollectionDropdowns />

          <Link href={"products/new"}>
            <Button variant={"flat"} color={"primary"} isIconOnly size={"sm"}>
              <Plus />
            </Button>
          </Link>
        </div>
      </div>

      <DashboardTable
        columns={SampleColumns}
        data={SampleData}
        selectActions={SampleActions}
      />
    </div>
  );
}
