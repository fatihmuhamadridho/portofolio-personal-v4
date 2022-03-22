import Image from "next/image";

const HomepageHeader = () => {
  return (
    <>
      <div className="my-[30px] flex items-center justify-between">
        <div className="leading-none">
          <h1 className="text-[85px]">Explore The Best</h1>
          <h1 className="my-2 text-[85px]">NFT World</h1>
          <p>Collect And Sell Your Extraordinary Artwork.</p>
          <div className="mt-16 flex space-x-5">
            <button className="bg-[#EE8124] px-6 py-3 rounded">Explore {"->"}</button>
            <button className="px-6 py-3 text-[#EE8124] border-solid border-[1px] border-[#EE8124] rounded">Upload</button>
          </div>
        </div>
        <Image
          src={"/images/illustrations/bg-homepage.svg"}
          alt=""
          width={565}
          height={605}
        />
      </div>
    </>
  );
};

export default HomepageHeader;
