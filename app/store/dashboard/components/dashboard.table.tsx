"use client";

import {
  Button,
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type ColumnType = {
  key: string;
  label: string;
};

type SelectActionType = {
  name: string;
  action: () => void;
};

export function DashboardTable({
  columns,
  data,
  selectActions,
}: {
  columns: ColumnType[];
  data: any[];
  selectActions: SelectActionType[];
}) {
  const [selected, setSelected] = useState(new Set(["2"]));

  return (
    <div className={"my-2 flex flex-col gap-3 relative"}>
      <Table
        aria-label="Rows actions table example with dynamic content"
        selectionMode="multiple"
        selectedKeys={selected}
        shadow={"none"}
        //@ts-ignore
        onSelectionChange={setSelected}
        onRowAction={(key) => alert(`Opening item ${key}...`)}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key} className={"text-lg"}>
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell className={"text-lg"}>
                  {getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <AnimatePresence>
        {
          //@ts-ignore
          (selected.size > 0 || selected === "all") && (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={
                "flex gap-3 bg-zinc-900 absolute bottom-0 right-1/2 translate-x-1/2 w-fit shadow-small rounded-xl p-2"
              }
            >
              {selectActions.map((item, idx) => {
                return (
                  <Button
                    key={item.name + idx}
                    variant={"flat"}
                    size={"sm"}
                    className={"text-sm"}
                    onClick={item.action}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
}
