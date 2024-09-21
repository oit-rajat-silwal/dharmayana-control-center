import Image from "next/image";

export default function Logout() {
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
        <h1 className="text-lg">Logout of Control Center</h1>
        <div className="flex gap-[1rem] p-6 border-2 border-[#D4D4D4] rounded-lg items-center justify-between cursor-pointer bg-[#ffffff]">
          <p>Logout</p>
          <Image
            alt="Dharmāyana Logo"
            loading="lazy"
            width="1" height="1"
            className="logo-title-img w-[3rem] h-[1.5rem] mt-[3%]"
            src="/log-out.svg" />
        </div>
        {/* <p className="font-[400]">Need access? Ask on Cliq</p> */}

      </div>
    </div>
    // </div>
  );
}
