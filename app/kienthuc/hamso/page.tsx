import { Cubato, Helves } from "@/app/components/fonts"
import Image from "next/image"
import Title from "@/app/components/title"
import Link from "next/link"

export default function Hamso() {
    const content = `
    <p><strong>1. Định nghĩa:</strong></p>
<p>
  Hàm số bậc nhất là hàm số được cho bởi công thức 
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
      <mi>y</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi>
    </mrow>
  </math>, 
  trong đó <mi>a</mi>, <mi>b</mi> là các số cho trước và 
  <mi>a</mi> ≠ 0.
</p>

<p>
  Đặc biệt, khi <mi>b</mi>=0 thì hàm số trở thành 
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
      <mi>y</mi><mo>=</mo><mi>a</mi><mi>x</mi>
    </mrow>
  </math>, 
  biểu thị mối tương quan của <mi>y</mi> và <mi>x</mi>.
</p>

<p>
  Trên tập hợp số thực <mi>R</mi>, hàm số 
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
      <mi>y</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi>
    </mrow>
  </math> 
  đồng biến khi 
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi><mo>&gt;</mo><mn>0</mn></math> 
  và nghịch biến khi 
  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi><mo>&lt;</mo><mn>0</mn></math>.
</p>

<p>
  - Hàm số bậc nhất 
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow><mi>y</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow>
  </math> 
  xác định với mọi <mi>x</mi> ∈ <mi>R</mi>.
</p>

<p><strong>3. Nhận xét:</strong></p>
<p>
  Cho hai đường thẳng 
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow><mi>d</mi><mo>:</mo><mi>y</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow>
  </math> 
  và 
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow><mi>d'</mi><mo>:</mo><mi>y</mi><mo>=</mo><mi>a'</mi><mi>x</mi><mo>+</mo><mi>b'</mi></mrow>
  </math>. Khi đó:
</p>
<ul class="list-disc ml-12">
  <li>d và d' song song khi và chỉ khi 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi><mo>=</mo><mi>a'</mi></math> 
    và 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>b</mi><mo>≠</mo><mi>b'</mi></math>.
  </li>
  <li>d và d' vuông góc khi và chỉ khi 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi><mo>&#x22C5;</mo><mi>a'</mi><mo>=</mo><mo>-</mo><mn>1</mn></math>.
  </li>
  <li>d và d' cắt nhau khi và chỉ khi 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi><mo>≠</mo><mi>a'</mi></math>.
  </li>
  <li>d trùng d' khi và chỉ khi 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi><mo>=</mo><mi>a'</mi></math> 
    và 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>b</mi><mo>=</mo><mi>b'</mi></math>.
  </li>
</ul>

<p><strong>4. Chú ý:</strong></p>
<ul>
  <li>
    Nếu toạ độ 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mo>(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo>)</mo></math> 
    của điểm A thoả mãn phương trình 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>y</mi><mo>=</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math> 
    thì điểm A thuộc đường thẳng.
  </li>
  <li>
    Ngược lại, nếu điểm 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>A</mi><mo>(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo>)</mo></math> 
    thuộc đường thẳng 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>y</mi><mo>=</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></math>, 
    thì toạ độ của điểm A thoả mãn phương trình.
  </li>
</ul>

<p><strong>5. Bổ sung:</strong></p>
<p>
  Trong mặt phẳng toạ độ, cho hai điểm 
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow><mi>A</mi><mo>(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>;</mo><msub><mi>y</mi><mn>1</mn></msub><mo>)</mo></mrow>
  </math> 
  và 
  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow><mi>B</mi><mo>(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>;</mo><msub><mi>y</mi><mn>2</mn></msub><mo>)</mo></mrow>
  </math>. Khi đó, <br>
  AB =   <math xmlns="http://www.w3.org/1998/Math/MathML">
  <msqrt>
    <mrow>
      <msup>
        <mrow>
          <mo>(</mo>
          <msub><mi>x</mi><mn>2</mn></msub>
          <mo>−</mo>
          <msub><mi>x</mi><mn>1</mn></msub>
          <mo>)</mo>
        </mrow>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <msup>
        <mrow>
          <mo>(</mo>
          <msub><mi>y</mi><mn>2</mn></msub>
          <mo>−</mo>
          <msub><mi>y</mi><mn>1</mn></msub>
          <mo>)</mo>
        </mrow>
        <mn>2</mn>
      </msup>
    </mrow>
  </msqrt>
</math>
</p>
`
    return (
        <div className="py-10">
            <div className={`${Cubato.className} text-[#7EBF57] text-4xl my-6`}>Mô Tả</div>
            <div className={`text-[#395FAF] text-xl ${Helves.className}`}>
                Hàm số là một quan hệ giữa hai tập
                hợp, trong đó mỗi phần tử của tập
                hợp thứ nhất (tập xác định) được
                liên kết với duy nhất một phần tử của
                tập hợp thứ hai (tập giá trị). Nói cách
                khác, một hàm số cho phép ta xác
                định một giá trị đầu ra (y) duy nhất
                cho mỗi giá trị đầu vào (x).
            </div>
            <div className={`${Cubato.className} text-[#7EBF57] text-4xl my-6`}>Nội DUng</div>
            <div className={`text-[#395FAF] text-xl ${Helves.className} text-bold`}>
                {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
            </div>

            <div className="flex justify-between mt-10 flex-wrap justify-center gap-5 mb-32">
                <Image src={'/hamso1.png'} alt="do thi cua ham so 1" width={409} height={481}></Image>
                <Image src={'/hamso2.png'} alt="do thi cua ham so 2" width={561} height={481}></Image>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 flex justify-center items-center bg-[#7EBF57] ">
                <Link href={'/luyentap'}>
                    <Title text="Luyện tập" className="text-4xl min-w-100 rounded-full bg-[#FEF5CE] py-4 text-center hover:scale-105 cursor-pointer"></Title>
                </Link>
            </div>
        </div>
    )
}