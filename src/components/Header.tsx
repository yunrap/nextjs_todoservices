import Gnb from "./Gnb";

const Header = () => {
  return (
    <div
      style={{ background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}
      className="h-[60px] w-full"
    >
      <div className="flex md:hidden w-full h-full items-center px-4">
        <Gnb width={71} height={40} img={"default"} />
      </div>
      <div className="hidden md:flex w-full h-full items-center px-6 lg:px-[22.5rem]">
        <Gnb width={151} height={40} img={"md"} />
      </div>
    </div>
  );
};
export default Header;
