import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // <div className="">
    <div className=" h-screen flex flex-col">
      <div className=" flex  justify-center items-center h-[10%]  ">
        <Image alt="Dharmāyana Flower"
          loading="lazy" width="1" height="1"
          className="logo-flower-img w-[1.125rem] h-[2.75rem] "
          src="https://d2eyrb4mi2batg.cloudfront.net/public/dharmayana-flower.svg" />
        <Image
          alt="Dharmāyana Logo"
          loading="lazy"
          width="1" height="1"
          className="logo-title-img w-[10.18rem] h-[1.5rem] "
          src="/Dharmayana.svg" />

      </div>
      <div className="grid  gap-[1.5rem] place-content-center h-[90%] text-center  font-[600] ">
        <h1 className="text-lg">Login to Control Center</h1>
        <Link href={"/dashboard"}>
          <div className="flex gap-[1rem] p-6 border-2 border-[#D4D4D4] rounded-lg items-center cursor-pointer bg-[#ffffff]">
            <Image
              alt="Dharmāyana Logo"
              loading="lazy"
              width="1" height="1"
              className="logo-title-img w-[5rem] h-[1.5rem] mt-[3%]"
              src="/zoho-logo.svg" />
            <p>Sign in with Zoho</p>
          </div>
        </Link>
        <p className="font-[400]">Need access? Ask on Cliq</p>

      </div>
    </div>
    // </div>
  );
}
