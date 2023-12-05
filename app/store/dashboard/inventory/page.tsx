import { Button } from "@nextui-org/react";
import { Search } from "lucide-react";
import { DashboardTable } from "@/app/store/dashboard/components/dashboard.table";
import { SampleActions, SampleColumns, SampleData } from "@/data/sample.data";
import { CollectionDropdowns } from "@/app/store/dashboard/components/temp";

export default function Page() {
  return (
    <div className={"p-1 shadow-small rounded-large"}>
      <div className={"flex justify-between items-center p-4"}>
        <h2 className={"font-semibold text-2xl"}>Inventory</h2>

        <div className={"flex gap-2"}>
          <Button variant={"flat"} isIconOnly size={"sm"} className={"p-1.5"}>
            <Search />
          </Button>

          <CollectionDropdowns />
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
