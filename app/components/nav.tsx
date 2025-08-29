"use client";
import Title from "./title"
import Link from "next/link"
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Hàm SỐ", href: "/kienthuc/hamso" },
    { name: "Bất đẳng thức", href: "/kienthuc/batdangthuc" },
    { name: "Hoán vị, tổ hợp,  chỉnh hợp", href: "/kienthuc/hoanvi" },
    { name: "Luyện tập", href: "/luyentap" },
]

export default function Nav() {
    const pathName = usePathname();
    return (
        <div className="bg-[#7EBF57]  w-full py-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {navItems.map(item => {
                    return (
                        <Link key={item.name} href={item.href} 
                        className={`py-4 px-6  rounded-full min-w-45 text-center hover:scale-105 ${pathName === item.href? "text-[#FEF5CE] bg-transparent border-2" :"text-[#395FAF] bg-[#FEF5CE] border-0"}`}>
                            <Title text={item.name} className="text-lg"></Title>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}