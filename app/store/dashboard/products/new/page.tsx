"use client";

import { ArrowLeft, Plus } from "lucide-react";
import { Button, Checkbox, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Input, Textarea } from "@nextui-org/input";

export default function NewProductPage() {
  const router = useRouter();

  return (
    <>
      <div className={"flex items-center gap-4 p-4"}>
        <Button
          variant={"light"}
          isIconOnly
          onClick={() => {
            router.back();
          }}
        >
          <ArrowLeft />
        </Button>
        <h2 className={"font-semibold text-2xl"}>Add Product</h2>
      </div>
      <div className={"flex gap-4"}>
        <div className={"flex flex-col gap-4 w-2/3"}>
          <div className={"flex flex-col shadow-small p-4 rounded-3xl gap-4"}>
            <h3 className={"text-xl px-2"}>General</h3>
            <Input label={"Title"} variant={"flat"} size={"lg"} />
            <Textarea label={"Description"} variant={"flat"} size={"lg"} />
          </div>

          <div className={"flex flex-col shadow-small p-4 rounded-3xl gap-4"}>
            <h3 className={"text-xl px-2"}>Variants</h3>
            <p className={"px-2 italic opacity-60"}>Nothing to see here yet</p>
            <button
              className={
                "px-2 text-yellow-400 flex items-center gap-3 hover:underline font-semibold"
              }
            >
              <Plus />
              Add option
            </button>
          </div>

          <div className={"flex flex-col shadow-small p-4 rounded-3xl gap-4"}>
            <div className={"flex items-center justify-between"}>
              <h3 className={"text-xl px-2"}>Media</h3>
              <Button variant={"flat"} color={"primary"} isIconOnly size={"sm"}>
                <Plus />
              </Button>
            </div>

            <p className={"px-2 italic opacity-60"}>Nothing to see here yet</p>
          </div>
        </div>

        <div className={"flex flex-col gap-4 grow"}>
          <div className={"flex flex-col shadow-small p-4 rounded-3xl gap-4"}>
            <h3 className={"text-xl px-2"}>Status</h3>
            <Select label={"Product Status"} size={"lg"}>
              <SelectItem key={"Active"} value={"Active"}>
                Active
              </SelectItem>
              <SelectItem key={"Draft"} value={"Draft"}>
                Draft
              </SelectItem>
              <SelectItem key={"Archive"} value={"Archive"}>
                Archive
              </SelectItem>
            </Select>
          </div>

          <div className={"flex flex-col shadow-small p-4 rounded-3xl gap-4"}>
            <h3 className={"text-xl px-2"}>Organization</h3>

            <Select
              label={"Collections"}
              selectionMode={"multiple"}
              size={"lg"}
            >
              <SelectItem key={"Default"} value={"Default"}>
                Default
              </SelectItem>
            </Select>

            <Input label={"Product Type"} variant={"flat"} size={"lg"} />

            <Input label={"Tags"} variant={"flat"} size={"lg"} />
          </div>

          <div className={"flex flex-col shadow-small p-4 rounded-3xl gap-4"}>
            <h3 className={"text-xl px-2"}>Inventory</h3>
            <Checkbox size={"lg"}>Track Quantity</Checkbox>
          </div>
        </div>
      </div>
    </>
  );
}
