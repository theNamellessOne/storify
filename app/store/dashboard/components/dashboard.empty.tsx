import Image from "next/image";
import Empty from "../../../../public/empty.svg";
import { Button } from "@nextui-org/react";

export function DashboardEmpty() {
  return (
    <div className={"flex flex-col items-center"}>
      <Image src={Empty} alt={"empty"} />
      <h2 className={"text-3xl text-neutral-300"}>
        Seems like this place is empty..
      </h2>
      <h3 className={"pt-4 pb-8 text-neutral-300 text-lg text-center"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <br />
        Lorem ipsum dolor sit amet, consectetur.
      </h3>
      <Button
        radius={"md"}
        color={"primary"}
        variant={"shadow"}
        size={"lg"}
        className={"font-semibold"}
      >
        Poyti Naxui
      </Button>
    </div>
  );
}
