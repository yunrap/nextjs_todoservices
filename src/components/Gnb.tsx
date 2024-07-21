import Image from "next/image";
import Link from "next/link";

const Gnb = () => {
  return (
    <>
      <Link href="/">
        <div className="flex md:hidden w-full h-full items-center px-4">
          <Image
            src="/images/gnb_small.svg"
            alt="home"
            width={71}
            height={40}
          />
        </div>
      </Link>
      <Link href="/">
        <div className="hidden md:flex lg:hidden w-full h-full px-6">
          <Image
            src="/images/gnb_medium.svg"
            alt="home"
            width={151}
            height={40}
          />
        </div>
      </Link>
      <Link href="/">
        <div className="hidden lg:flex w-full h-full px-[360px]">
          <Image
            src="/images/gnb_large.svg"
            alt="home"
            width={151}
            height={40}
          />
        </div>
      </Link>
    </>
  );
};

export default Gnb;
