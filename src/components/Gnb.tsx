import Image from "next/image";

const Gnb = () => {
  return (
    <div
      style={{ background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}
      className="h-[60px]"
    >
      <div className="flex md:hidden w-full h-full px-4">
        <Image src="/images/gnb_small.svg" alt="home" width={71} height={40} />
      </div>
      <div className="hidden md:flex lg:hidden w-full h-full px-6">
        <Image
          src="/images/gnb_medium.svg"
          alt="home"
          width={151}
          height={40}
        />
      </div>
      <div className="hidden lg:flex w-full h-full px-[360px]">
        <Image src="/images/gnb_large.svg" alt="home" width={151} height={40} />
      </div>
    </div>
  );
};

export default Gnb;
