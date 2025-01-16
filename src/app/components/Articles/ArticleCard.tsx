import Image from "next/image";

export default function ArticleCard() {
  return (
    <div className="w-[45%] bg-gradient-to-r from-[#eaf5ff98] to-[#f4f9ff86] p-6 rounded-xl">
      <Image
        className="w-full h-[100px] object-cover object-center rounded-lg"
        src={"https://images.unsplash.com/photo-1734640113825-24dd7c056052"}
        alt=""
        width={1000}
        height={1000}
      />
      <h2 className="font-semibold text-2xl text-black">Lorem Ipsum</h2>
      <p className="text-black m-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra,
        dolor non placerat ultricies
      </p>
      <button className="bg-transparent text-[#2F7CC4] border-2 border-[#2F7CC4] w-full h-10 rounded-[12px] text-[16px] font-medium hover:bg-[#276ca3] hover:text-white transition flex items-center justify-center">
        Explore more
      </button>
    </div>
  );
}
