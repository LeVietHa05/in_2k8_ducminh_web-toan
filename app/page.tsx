
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
          className="text-5xl leading-16 mb-3"
        />
        <div className="custom-box relative flex gap-12 flex-wrap justify-center bg-[#395FAF] py-20">
          {links.map(link => {
            return (
              <Link key={link.name} href={link.href} className="min-w-100 p-4 text-4xl bg-[#FEF5CE] rounded-full text-center flex items-center justify-center hover:scale-105">
                <Title text={link.name} ></Title>
              </Link>
            )
          })}
        </div>
      </div>

      <Link href={'/luyentap'} className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#FEF5CE] rounded-full px-6 py-4 hover:scale-105">
        <Title text="Luyện tập" className="text-[#7EBF57] text-4xl"></Title>
      </Link>

    </div>
  );
}
