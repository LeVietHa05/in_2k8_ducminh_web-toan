'use client'
import { useEffect, useMemo, useState } from "react"
import Title from "../components/title";
import { HelvesBold } from "../components/fonts";
import Image from "next/image";

const bocauhoi = [
    {
        stt: 1,
        tpye: 1,
        chude: "Hàm số bậc nhất",
        capdo: "Dễ",
        cauhoi: "Cho hàm số y=3x+2, hỏi hàm số này song song với hàm số nào bên dưới?",
        html: "<p> \
                    Cho hàm số \
                                <math xmlns='http://www.w3.org/1998/Math/MathML'>\
                                    <mrow>\
                                    <mi>y</mi>\
                                    <mo>=</mo>\
                                    <mn>3</mn>\
                                    <mi>x</mi>\
                                    <mo>+</mo>\
                                    <mn>2</mn>\
                                    </mrow>\
                                </math>, \
                    hỏi hàm số này song song với hàm số nào bên dưới?\
                    </p>\
                    ",
        dapandung: "y=3x+1",
        dapansai: ["y=7x+2", "y=6x-3", "y=5x-4"],
        giaithich: "Hàm số y=3x+2 có hệ số a=3, nên hàm số thoả mãn yêu cầu cũng là 1 hàm số có hệ số a'=3. Vậy đáp đúng là A: y=3x+1 vì cũng có hệ số a'=3",
        tags: ["ham so", "trac nghiem", "dai so"]
    }, {
        stt: 2,
        type: 1,
        chude: "Hàm số bậc nhất",
        capdo: "Dễ",
        cauhoi: "Hàm số  y= ax+b là hàm số bậc nhất khi:",
        html: "<p>\
                Hàm số \
                <math xmlns='http://www.w3.org/1998/Math/MathML'>\
                    <mrow>\
                    <mi>y</mi>\
                    <mo>=</mo>\
                    <mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi>\
                    </mrow>\
                </math> \
                là hàm số bậc nhất khi:\
                </p>",
        dapandung: "a ≠ 0",
        dapansai: ["a > 0", "a < 0", "a = 0"],
        giaithich: "Hàm số bậc nhất là hàm số có dạng y = ax + b (a ≠ 0)",
        tags: ["ham so", "trac nghiem", "dai so"]
    }, {
        stt: 3,
        type: 1,
        chude: "Hàm số bậc nhất",
        capdo: "Dễ",
        cauhoi: "Hàm số y = ax + b là hàm số đồng biến khi",
        html: "",
        dapandung: "a > 0",
        dapansai: ["a ≠ 0", "a < 0", "a = 0"],
        giaithich: "Hàm số bậc nhất y= ax+b có tính chất: Đồng biến trên R nếu a > 0",
        tags: ["ham so", "trac nghiem", "dai so"]
    }, {
        stt: 4,
        type: 1,
        chude: "Hàm số bậc nhất",
        capdo: "Trung bình",
        cauhoi: "Hàm số nào dưới đây là hàm số bậc nhất?",
        html: "",
        dapandung: "y=2x+1",
        dapansai: ["y=x^2 +x +1", "y= x^3-6x+4", "y=3"],
        giaithich: "Theo định nghĩa thì y= 2x+1 là hàm số bậc nhất, lần lượt các đáp án sau là hàm số bậc 2, bậc 3 và bậc 0",
        tags: ["ham so", "trac nghiem", "dai so"]
    }, {
        stt: 5,
        type: 1,
        chude: "Hàm số bậc nhất",
        capdo: "Trung bình",
        cauhoi: "Hàm số nào dưới đây không là hàm số bậc nhất?",
        html: "",
        dapandung: "y= x^2+x",
        dapansai: ["y=3-1/2x", "y=2-x", "y=5x+1"],
        giaithich: "Hàm số y=x^2+x là hàm số bậc 2, không phải là bậc nhất",
        tags: ["ham so", "trac nghiem", "dai so"]
    }, {
        stt: 6,
        type: 1,
        chude: "Hàm số bậc nhất",
        capdo: "Trung bình",
        cauhoi: " Tìm m để hàm số y=m.(2-m^2).x+1 không là hàm số bậc nhất",
        html: "",
        dapandung: "m=0",
        dapansai: ["m=1", "m=2", "m=3"],
        giaithich: "Để m không là hàm số bậc nhất thì m.(2-m^2)=0. Hay m=0 là đáp án thoả mãn",
        tags: ["ham so", "trac nghiem", "dai so"]
    }, {
        stt: 7,
        type: 1,
        chude: "Hàm số bậc nhất",
        capdo: "Khó",
        cauhoi: "Cho hàm số y = (8 – 4m)x + 5. Tìm m để hàm số là hàm số nghịch biến.",
        html: "",
        dapandung: "m >2",
        dapansai: ["m=2", "m < 2", "m ≠ 2"],
        giaithich: "Để hàm số nghịch biến thì 8-4m < 0 <=> m >2. Vậy m > 2 là đáp án đúng",
        tags: ["ham so", "trac nghiem", "dai so"]
    }, {
        stt: 8,
        type: 2,
        chude: "Bất phương trình bậc nhất 2 ẩn",
        capdo: "Dễ",
        cauhoi: "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
        html: "",
        dapandung: "x - y <1",
        dapansai: ["x^2+y >1", "x^3-y<9", "x-2/y > 0"],
        giaithich: "Bất phương trình x-y < 1 gồm 2 ẩn x,y và số mũ bậc nhất. Vậy x-y<1 là đáp án đúng",
        tags: ["batphuongtrinh", "trac nghiem", "dai so"]
    }, {
        stt: 9,
        type: 2,
        chude: "Bất phương trình bậc nhất 2 ẩn",
        capdo: "Dễ",
        cauhoi: "Bất phương trình nào tương đương với bất phương trình 3x – y > 7(x – 4y) + 1?",
        html: "",
        dapandung: "4x-27y < -1",
        dapansai: ["4x-27y+1 > 0", "4x+27y>2", "27y-4x>-3"],
        giaithich: "Khai triển hai vế, ta nhận được 4x-27y < -1. Vậy đáp án  A đúng",
        tags: ["batphuongtrinh", "trac nghiem", "dai so"]
    }, {
        stt: 10,
        type: 2,
        chude: "Bất phương trình bậc nhất 2 ẩn",
        capdo: "Trung bình",
        cauhoi: "Cho bất phương trình f(x)= x + y ≤ 2 (1). Chọn khẳng định đúng trong các khẳng định sau",
        html: "",
        dapandung: "BPT có vô số nghiệm",
        dapansai: ["BPT có duy nhất 1 nghiệm", "BPT có duy nhất 2 nghiệm", "BPT vô nghiệm"],
        giaithich: "Theo định lí, BPT bậc nhất luôn có vô số nghiệm",
        tags: ["batphuongtrinh", "trac nghiem", "dai so"]
    }, {
        stt: 11,
        type: 2,
        chude: "Bất phương trình bậc nhất 2 ẩn",
        capdo: "Trung bình",
        cauhoi: "Miền nghiệm của bất phương trình: –3x + y > 0 chứa điểm nào trong các điểm sau",
        html: "",
        dapandung: "(-3;0)",
        dapansai: ["(3;2)", "(0;0)", "(1;1)"],
        giaithich: "Bằng cách thử các đáp án, ta có đáp án A.(-3,0) thoả mãn vì (-3).(-3)+0=9>0",
        tags: ["batphuongtrinh", "trac nghiem", "dai so"]
    }, {
        stt: 12,
        type: 2,
        chude: "Bất phương trình bậc nhất 2 ẩn",
        capdo: "Trung bình",
        cauhoi: "Điểm nào trong các điểm sau thuộc miền nghiệm của bất phương trình: 2(x + 3) – 4(y –1) < 0.",
        html: "",
        dapandung: "(-5,1)",
        dapansai: ["(0;1)", "(1;0)", "(0;0)"],
        giaithich: "Phương trình đã cho tương đương với 2x - 4y < -10. Thử các đáp án, ta nhận thấy đáp án C.(-5;1) thoả mãn phương trình",
        tags: ["batphuongtrinh", "trac nghiem", "dai so"]
    }, {
        stt: 13,
        type: 2,
        chude: "Bất phương trình bậc nhất 2 ẩn",
        capdo: "Khó",
        cauhoi: "Bạn Lan để dành được 300 nghìn đồng. Trong một đợt ủng hộ học sinh khó khăn, bạn Lan đã ủng hộ x tờ tiền loại 10 nghìn đồng, y tờ tiền loại 20 nghìn đồng từ tiền để dành của mình. Trong các bất phương trình sau, bất phương trình nào diễn tả giới hạn về tổng số tiền mà bạn Lan đã ủng hộ.",
        html: "",
        dapandung: "10x + 20y ≤ 300",
        dapansai: ["10x + 20y > 300", "x + y < 300", "10x + y < 300"],
        giaithich: "Tổng số tiền bạn Lan đã ủng hộ là: 10x + 20y (nghìn đồng). Vì tổng số tiền Lan ủng hộ không vượt quá số tiền Lan để dành được là 300 nghìn đồng nên ta có bất phương trình: 10x + 20y ≤ 300.",
        tags: ["batphuongtrinh", "trac nghiem", "dai so"]
    }, {
        stt: 14,
        type: 3,
        chude: "Hoán vị, tổ hợp, chỉnh hợp",
        capdo: "Dễ",
        cauhoi: "Cho tập A có 20 phần tử. Số tập con có 2 phần tử của tập A là",
        html: "",
        dapandung: "C 2 20",
        dapansai: ["A 2 20", "20^2", "2^20"],
        giaithich: "Áp dụng lí thuyết tổ hợp, có C 2 20 cách chọn 2 phần tử trong tập A có 20 phần tử.",
        tags: ["hoanvi", "trac nghiem", "dai so"]
    }, {
        stt: 15,
        type: 3,
        chude: "Hoán vị, tổ hợp, chỉnh hợp",
        capdo: "Dễ",
        cauhoi: "Một đoàn người gồm 6 nam và 4 nữ. Hỏi có bao nhiêu cách lập 1 đoàn người có 5 người",
        html: "",
        dapandung: "252",
        dapansai: ["100", "4000", "30000"],
        giaithich: "Số cách lập đoàn người là C 5 10 = 252.",
        tags: ["hoanvi", "trac nghiem", "dai so"]
    }, {
        stt: 16,
        type: 3,
        chude: "Hoán vị, tổ hợp, chỉnh hợp",
        capdo: "Trung bình",
        cauhoi: "Có bao nhiêu cách sắp xếp 6 bạn học thành một hàng ngang",
        html: "",
        dapandung: "720",
        dapansai: ["100", "C 1 6", "A 1 6"],
        giaithich: "Số cách xếp là 6!= 720( theo hoán vị)",
        tags: ["hoanvi", "trac nghiem", "dai so"]
    }, {
        stt: 17,
        type: 3,
        chude: "Hoán vị, tổ hợp, chỉnh hợp",
        capdo: "Trung bình",
        cauhoi: "Với 5 chữ số 1;2;3;4;5 lập được bao nhiêu số tự nhiên có 3 chữ số khác nhau",
        html: "",
        dapandung: "60",
        dapansai: ["30", "12", "5"],
        giaithich: "Gọi số cần lập là abc.Số cách chọn 3 chữ số khác nhau từ 5 chữ số là A 3 5=60",
        tags: ["hoanvi", "trac nghiem", "dai so"]
    }, {
        stt: 18,
        type: 3,
        chude: "Hoán vị, tổ hợp, chỉnh hợp",
        capdo: "Khó",
        cauhoi: "Có thể tạo bao nhiêu vecto, khác vecto không từ 10 điểm trên mặt phẳng",
        html: "",
        dapandung: "A 2 10",
        dapansai: ["720", "10!", "30000"],
        giaithich: "Mỗi vecto gồm 2 điểm. Vậy số cách chọn 2 điểm( kể cả hoán vị) là A 2 10",
        tags: ["hoanvi", "trac nghiem", "dai so"]
    }, {
        stt: 19,
        type: 3,
        chude: "Hoán vị, tổ hợp, chỉnh hợp",
        capdo: "Khó",
        cauhoi: "Một hộp có 3 bi xanh,4 bi đỏ và 5 bi vàng. Bốc ngẫu nhiên từ hộp 3 bi sao cho có đủ 3 màu. Số cách chọn là:",
        html: "",
        dapandung: "60",
        dapansai: ["100", "2000", "3000"],
        giaithich: "Số cách chọn bi xanh là: C 1 3. Số cách chọn bi đỏ: C 1 4. Số cách chọn bi vàng: C 1 5. Vậy tổng số bằng 60",
        tags: ["hoanvi", "trac nghiem", "dai so"]
    }, {
        stt: 20,
        type: 3,
        chude: "Hoán vị, tổ hợp, chỉnh hợp",
        capdo: "Khó",
        cauhoi: "Ông Minh có 11 người bạn. Ông muốn mời 5 người đến bữa tiệc, trong đó có 2 người bạn không muốn gặp nhau. Hỏi ông Minh có bao nhiêu cách mời",
        html: "",
        dapandung: "378",
        dapansai: ["252", "126", "300"],
        giaithich: "Ông A chỉ mời 1 trong 2 người kia và mời 4 trong  người còn lại, số cách chọn là: 2. C 4 9 = 252. Ông A không mời người nào và mời 5 người trong 9 người còn lại số cách chọn là: C 5 9 = 126. Vậy tổng số cách chọn là: 252+126=378",
        tags: ["hoanvi", "trac nghiem", "dai so"]
    }
]


export default function LuyentapPage() {
    const [isDoingTest, setIsDoingTest] = useState(false);
    const [curentCauhoi, setCurentCauhoi] = useState(0);
    const [isShowGiaithich, setIsShowGiaithich] = useState(false)

    const cauhoi = bocauhoi[curentCauhoi];
    // console.log(curentCauhoi)
    const answers = useMemo(() => {
        const all = [cauhoi.dapandung, ...cauhoi.dapansai];
        return all.map((val) => ({ val, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(item => item.val);
    }, [cauhoi])

    useEffect(() => {
        setIsDoingTest(false)
        setCurentCauhoi(0);
    }, [])

    useEffect(() => {
        setIsShowGiaithich(false)
    }, [curentCauhoi])

    const handleClickSelectType = function (type: number) {
        // console.log(`selected ${type}`)
        setCurentCauhoi(bocauhoi.findIndex(ch => ch.type === type))
        // console.log(curentCauhoi)
        setIsDoingTest(true)
    }

    const handleClickAnswer = function (answer: string) {
        setIsShowGiaithich(true)
        if (answer === cauhoi.dapandung) {
            // TODO: make it better
            alert("Chính xác")
        } else {
            alert("Sai rồi.")
        }
    }
    if (!cauhoi) {
        return (
            <div>khong co cau hoi</div>
        )
    }


    return (
        <div className="py-10 text-[#395FAF]">
            {!isDoingTest && (
                <div className="flex flex-wrap justify-center items-center gap-10 ">
                    <div className="  flex justify-center items-center " onClick={() => handleClickSelectType(1)}>
                        <Title text="Luyện tập Hàm SỐ" className="text-4xl min-w-100 rounded-full bg-[#FEF5CE] py-4 text-center border-white shadow-lg grow hover:scale-105 cursor-pointer"></Title>
                    </div>
                    <div className="  flex justify-center items-center grow" onClick={() => handleClickSelectType(2)}>
                        <Title text="Luyện Tập Bất đẳng thức" className="text-4xl min-w-100 rounded-full bg-[#FEF5CE] py-4 text-center border-white shadow-lg grow hover:scale-105 cursor-pointer"></Title>
                    </div>
                    <div className="  flex justify-center items-center grow" onClick={() => handleClickSelectType(3)}>
                        <Title text="Luyện Tập Hoán vị, tổ hợp, chỉnh hợp" className="text-4xl min-w-100 rounded-full bg-[#FEF5CE] py-4 text-center border-white shadow-lg grow hover:scale-105 cursor-pointer"></Title>
                    </div>
                </div>
            )}
            {isDoingTest && (
                <div className={`${HelvesBold.className} text-bold`}>
                    {cauhoi && (
                        <div className="*:mt-4">
                            <Title text={cauhoi.chude} className="text-2xl w-fit py-2 px-8 rounded-full bg-[#FEF5CE] text-center border-white"></Title>
                            <div>
                                Câu {cauhoi.stt} :
                            </div>
                            <div>
                                Cấp độ: {cauhoi.capdo}
                            </div>
                            <div>
                                {cauhoi.cauhoi}
                            </div>
                            <ul className="grid grid-cols-2 gap-5 ">
                                {answers.map((ans, idx) => (
                                    <li key={idx} className="cursor-pointer rounded-full bg-[#FEF5CE] py-4 px-6 text-2xl hover:shadow-lg" onClick={() => { handleClickAnswer(ans) }}>
                                        <Title text={`${String.fromCharCode(65 + idx)}. ${ans}`} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {
                isShowGiaithich && cauhoi && (
                    <div className={`${HelvesBold.className} text-bold mt-10`}>
                        <div>Đáp án đúng: {cauhoi.dapandung}</div>
                        <div>
                            <div>Giải thích:</div>
                            <div>
                                {cauhoi.giaithich}
                            </div>
                        </div>
                    </div>
                )
            }

            <div className="absolute bottom-0 left-0 right-0 h-32 flex justify-center items-center bg-[#7EBF57] ">
                {isDoingTest && (
                    <div className="flex gap-20 *:hover:cursor-pointer *:hover:shadow-lg">
                        <div
                            className="rounded-full bg-[#FEF5CE] p-2"
                            onClick={() => {
                                if (curentCauhoi == 0) {
                                    setIsDoingTest(false)
                                } else {
                                    setCurentCauhoi(curentCauhoi - 1)
                                }
                            }}
                        >
                            <Image src='/left.svg' width={128} height={32} alt=""></Image>
                        </div>
                        <div className="rounded-full bg-[#FEF5CE] p-2"
                            onClick={() => {
                                setCurentCauhoi(curentCauhoi < bocauhoi.length - 1 ? curentCauhoi + 1 : curentCauhoi) 
                                if (curentCauhoi == bocauhoi.length -1 ) {
                                    setIsDoingTest(false)

                                }
                            }}
                        >
                            <Image src='/right.svg' width={128} height={32} alt=""></Image>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}