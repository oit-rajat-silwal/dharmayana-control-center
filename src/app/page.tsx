'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    // Generating a random state string for the Zoho OAuth flow
    const randomState = Math.random().toString(36).substring(7);

    // Constructing the Zoho login URL with the state parameter
    const zohoLoginUrl = `https://api.stage.dharmayana.in/control-center/auth/v1/zoho/login?state=${randomState}`;

    // Redirecting the user to the Zoho login page
    router.push(zohoLoginUrl);

    localStorage.setItem('zoho_oauth_state', randomState);
  };

  useEffect(() => {
    console.log("hello");
    const tokenExpiry = localStorage.getItem('token_expiry');

    if (tokenExpiry) {
      const expiryTime = parseInt(tokenExpiry, 10);
      const currentTime = Date.now();

      if (currentTime < expiryTime) {
      
        router.push('/home');
      }
    }
  }, []);

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
        {/* <Link href={"/dashboard"}> */}
        <div className="flex gap-[1rem] p-6 border-2 border-[#D4D4D4] rounded-lg items-center cursor-pointer bg-[#ffffff]" onClick={handleSignIn}>
          <Image
            alt="Dharmāyana Logo"
            loading="lazy"
            width="1" height="1"
            className="logo-title-img w-[5rem] h-[1.5rem] mt-[3%]"
            src="/zoho-logo.svg" />
          <p>Sign in with Zoho</p>
        </div>
        {/* </Link> */}
        <p className="font-[400]">Need access? Ask on Cliq</p>

      </div>
    </div>
    // </div>
  );
}
