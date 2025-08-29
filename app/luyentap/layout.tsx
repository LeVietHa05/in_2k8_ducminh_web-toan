import Nav from "../components/nav";

export default function KienThucLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className={`bg-[#fffdec] min-h-screen w-full relative`}
        >
            <Nav />
            <div className="max-w-5xl mx-auto">

                {children}
            </div>
        </div>
    );
}
