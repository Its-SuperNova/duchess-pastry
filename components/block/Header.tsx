import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/ModeToggle";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
const Header = async () => {
  const session = await auth();

  return (
    <div className="   items-center flex w-full justify-between px-3 py-4">
      <Link href={"/"} className=" font-antonsc  text-3xl  ">
          <Image
            src="/svg/Duchess.svg"
            alt="Duchess Logo"
            width={50}
            height={50}
          />
      </Link>
      <nav className="flex space-x-3 justify-center align-middle items-center ">
        <ModeToggle />

        {session?.user?.image ? (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage src={session?.user?.image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-40 p-2 justify-center flex items-stretch flex-col gap-2">
              <Button asChild>
                <Link href={"/dashboard"}>Dashboard</Link>
              </Button>
              {/* <Button asChild>
                <Link href={"/themes"}>themes</Link>
              </Button> */}
              <Button asChild>
                <Link href={"/signout"}>signout</Link>
              </Button>
            </PopoverContent>
          </Popover>
        ) : (
          <Button asChild className="rounded-full">
            <Link href={"/signin"}>Signin</Link>
          </Button>
        )}
      </nav>
    </div>
  );
};

export default Header;
