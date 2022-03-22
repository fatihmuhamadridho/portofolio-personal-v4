import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="fixed z-[100] w-full flex px-[130px] py-[5px] justify-between items-center bg-[black] text-[#AAA097]">
        <div className="text-[40px] text-[#EE8124]">N</div>
        <ul className="flex items-center space-x-7">
          <li className="cursor-pointer">Marketplace</li>
          <li className="cursor-pointer">Artwork</li>
          <li className="cursor-pointer">Create</li>
          <li className="cursor-pointer">Feed</li>
          <li className="pl-[30px]">
            <button className="bg-[#EE8124] py-[10px] px-[20px] text-white font-semibold rounded-[4px]">
              Connect Wallet
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
