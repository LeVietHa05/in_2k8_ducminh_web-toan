import { Cubato, Helves } from "@/app/components/fonts"
import Image from "next/image"
import Title from "@/app/components/title"
import Link from "next/link"

export default function Hamso() {
  const content = `
<p><b>I. Hoán vị</b></p>
<ul>
  <li><b>1. Định nghĩa</b></li>
  <ul>
    <li>
      Cho n phần tử khác nhau (n ≥ 1). Mỗi cách sắp thứ tự của n phần tử đã cho, mà trong đó mỗi phần tử có mặt đúng một lần, được gọi là một hoán vị của n phần tử.
    </li>
    <li>
      <b>Định lí:</b> Số các hoán vị của n phần tử khác nhau đã cho, kí hiệu là 
      <math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>P</mi><mi>n</mi></msub></math> 
      và được tính bằng:
      <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mrow>
          <msub><mi>P</mi><mi>n</mi></msub>
          <mo>=</mo>
          <mi>n</mi><mo>!</mo>
          <mo>=</mo>
          <mi>n</mi>
          <mo>(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>)</mo>
          <mo>(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo>)</mo>
          <mo>…</mo>
          <mn>2</mn><mo>.</mo><mn>1</mn>
        </mrow>
      </math>
    </li>
  </ul>
</ul>

<p><b>II. Chỉnh hợp</b></p>
<ul>
  <li><b>1. Định nghĩa</b></li>
  <ul>
    <li>Cho tập hợp A gồm k phần tử.</li>
    <li>
      Kết quả của việc lấy k phần tử từ n phần tử đã cho và sắp xếp chúng theo 1 thứ tự nào đó được gọi là một chỉnh hợp chập k của n phần tử đã cho.
    </li>
    <li>
      <b>Định lí:</b> Số chỉnh hợp chập k của n phần tử đã cho được kí hiệu là 
      <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>A</mi><mi>n</mi><mi>k</mi></msubsup></math>
      và bằng:
      <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mrow>
          <msubsup><mi>A</mi><mi>n</mi><mi>k</mi></msubsup>
          <mo>=</mo>
          <mi>n</mi>
          <mo>(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>)</mo>
          <mo>…</mo>
          <mo>(</mo><mi>n</mi><mo>−</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo>)</mo>
          <mo>=</mo>
          <mfrac>
            <mrow><mi>n</mi><mo>!</mo></mrow>
            <mrow><mo>(</mo><mi>n</mi><mo>−</mo><mi>k</mi><mo>)</mo><mo>!</mo></mrow>
          </mfrac>
        </mrow>
      </math>
    </li>
  </ul>
</ul>

<p><b>III. Tổ hợp</b></p>
<ul>
  <li><b>1. Định nghĩa</b></li>
  <ul>
    <li>
      Cho n phần tử khác nhau (n ≥ 1). Mỗi tập con gồm k phần tử khác nhau (không phân biệt thứ tự) của tập hợp n phần tử đã cho (0 ≤ k ≤ n) được gọi là một tổ hợp chập k của n phần tử đã cho (với quy ước tổ hợp chập 0 của n là tập rỗng).
    </li>
    <li>
      <b>Định lí:</b> Số tổ hợp chập k của n phần tử đã cho được kí hiệu là 
      <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>C</mi><mi>n</mi><mi>k</mi></msubsup></math>
      và bằng:
      <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mrow>
          <msubsup><mi>C</mi><mi>n</mi><mi>k</mi></msubsup>
          <mo>=</mo>
          <mfrac>
            <mrow><mi>n</mi><mo>!</mo></mrow>
            <mrow><mi>k</mi><mo>!</mo><mo>(</mo><mi>n</mi><mo>−</mo><mi>k</mi><mo>)</mo><mo>!</mo></mrow>
          </mfrac>
        </mrow>
      </math>
    </li>
  </ul>
</ul>

`

  return (
    <div className="py-10">
      <div className={`${Cubato.className} text-[#7EBF57] text-4xl my-6`}>Mô Tả</div>
      <div className={`text-[#395FAF] text-xl ${Helves.className}`}>
        - Hoán vị, tổ hợp và chỉnh hợp là một chủ đề ở cấp THPT, có tính ứng dụng cao trong các bài toán đếm
        <br></br>
        - Hơn nữa, dạng toán này thường được ứng dụng trong chương trình thi THPTQG</div>
      <div className={`${Cubato.className} text-[#7EBF57] text-4xl my-6`}>Nội DUng</div>
      <div className={`text-[#395FAF] text-xl ${Helves.className} text-bold`}>
        {content && <div className="" dangerouslySetInnerHTML={{ __html: content }}></div>}
      </div>

      <div className="flex justify-between mt-10 flex-wrap justify-center gap-5 mb-32">
        {/* <Image src={'/batdangthuc.png'} alt="do thi cua batdangthuc" width={724} height={409}></Image> */}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 flex justify-center items-center bg-[#7EBF57] ">
        <Link href={'/luyentap'}>
          <Title text="Luyện tập" className="text-4xl min-w-100 rounded-full bg-[#FEF5CE] py-4 text-center hover:scale-105 cursor-pointer"></Title>
        </Link>
      </div>
    </div>
  )
}