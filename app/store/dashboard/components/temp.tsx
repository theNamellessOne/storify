"use client";

import { Popover, PopoverTrigger } from "@nextui-org/popover";
import {
  Button,
  Checkbox,
  Listbox,
  ListboxItem,
  ListboxSection,
  PopoverContent,
} from "@nextui-org/react";
import { ArrowUpDown, SlidersHorizontal } from "lucide-react";

export function CollectionDropdowns() {
  return (
    <>
      <Popover placement={"bottom"} showArrow>
        <PopoverTrigger>
          <Button variant={"flat"} isIconOnly size={"sm"} className={"p-1.5"}>
            <ArrowUpDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <h4 className={"font-bold text-start w-full p-2 pb-0"}>Status</h4>
          <Listbox>
            <ListboxSection showDivider>
              <ListboxItem key={"title"}>Product title</ListboxItem>
              <ListboxItem key={"createdAt"}>Created</ListboxItem>
              <ListboxItem key={"updatedAt"}>Updated</ListboxItem>
              <ListboxItem key={"inventory"}>Inventory</ListboxItem>
            </ListboxSection>

            <ListboxItem key={"asc"}>Ascending</ListboxItem>
            <ListboxItem key={"desc"}>Descending</ListboxItem>
          </Listbox>
        </PopoverContent>
      </Popover>
      <Popover placement={"bottom"} showArrow>
        <PopoverTrigger>
          <Button variant={"flat"} isIconOnly size={"sm"} className={"p-1.5"}>
            <SlidersHorizontal />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <h4 className={"font-bold text-start w-full p-2 pb-0"}>Status</h4>
          <Listbox>
            <ListboxItem key={"Active"}>
              <Checkbox>Active</Checkbox>
            </ListboxItem>
            <ListboxItem key={"Draft"}>
              <Checkbox>Draft</Checkbox>
            </ListboxItem>
            <ListboxItem key={"Archive"}>
              <Checkbox>Archive</Checkbox>
            </ListboxItem>
          </Listbox>
        </PopoverContent>
      </Popover>
    </>
  );
}
