import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/core/navbar"));

const LayoutPage = ({ children }: any) => {
  return (
    <>
      <div className="h-full bg-[black]">
        <Navbar />
        <div className="pt-[68px] px-[130px] text-white">{children}</div>
      </div>
    </>
  );
};

export default LayoutPage;
