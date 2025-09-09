
import Title from "./components/title";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Hàm SỐ", href: "/kienthuc/hamso" },
  { name: "Bất đẳng thức", href: "/kienthuc/batdangthuc" },
  { name: "Hoán vị, tổ hợp,  chỉnh hợp", href: "/kienthuc/hoanvi" },
]

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#7EBF57]"></div>
      <div className="max-w-5xl h-1/2 text-[#395FAF]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Title
          text="Tổng hợp các chủ đề toán quan trọng trong chương trình THPT"
          className="2xl:text-5xl text-4xl leading-16 mb-3"
        />
        <div className="custom-box relative flex 2xl:gap-10 xl:gap-6 gap-2 flex-wrap justify-center bg-[#395FAF] 2xl:py-20 lg:py-10 py-4">
          {links.map(link => {
            return (
              <Link key={link.name} href={link.href} className="min-w-100 p-4 2xl:text-4xl text-3xl bg-[#FEF5CE] rounded-full text-center flex items-center justify-center hover:scale-105">
                <Title text={link.name} ></Title>
              </Link>
            )
          })}
        </div>
      </div>

      <Link href={'/luyentap'} className="absolute 2xl:bottom-10 lg:bottom-4 bottom-2 left-1/2 -translate-x-1/2 bg-[#FEF5CE] rounded-full px-6 py-4 hover:scale-105">
        <Title text="Luyện tập" className="text-[#7EBF57] text-4xl"></Title>
      </Link>

    </div>
  );
}
