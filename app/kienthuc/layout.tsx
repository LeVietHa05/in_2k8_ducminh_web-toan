import Nav from "../components/nav";

export default function KienThucLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className={`bg-[#FEF5CE] min-h-screen w-full relative`}
        >
            <Nav />
            <div className="max-w-3xl mx-auto">

                {children}
            </div>
        </div>
    );
}
