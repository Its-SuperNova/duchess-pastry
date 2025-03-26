import { signOut } from "@/auth";
import Header from "@/components/block/Header";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center  flex-grow h-screen align-middle items-center ">
        <div className=" bg-cover  bg-[url('../public/Banner.jpeg')] w-full h-full max-md:hidden"></div>
        <div className=" w-full h-full flex flex-col align-middle justify-center items-center">
          <div className="text-center flex flex-col gap-4 py-6 px-6 border rounded-md">
            <h1 className=" font-antonsc text-4xl">
              portfolio<span className="text-orange-700">forge</span>
            </h1>
            <h5 className=" text-xl">Are you sure You want to logout ?</h5>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <Button variant={"default"} type="submit">
                Sign out
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
