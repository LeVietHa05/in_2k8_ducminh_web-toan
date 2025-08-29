import { Cubato, Helves } from "@/app/components/fonts"
import Image from "next/image"
import Title from "@/app/components/title"

export default function Hamso() {
    const content = `
<p><b>1. Định nghĩa</b></p>
<ul class="list-disc ml-12">
  <li>
    Bất phương trình bậc nhất hai ẩn x, y có dạng tổng quát là:
    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
      <mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>≤</mo><mi>c</mi></mrow>
    </math>
    (<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>≥</mo><mi>c</mi></mrow></math>,
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>&lt;</mo><mi>c</mi></mrow></math>,
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>&gt;</mo><mi>c</mi></mrow></math>)
  </li>
  <li>
    Trong đó a, b, c là những số thực đã cho, a và b không đồng thời bằng 0, x và y là các ẩn số.
  </li>
  <li>
    Cặp số 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>;</mo><msub><mi>y</mi><mn>0</mn></msub><mo>)</mo></mrow></math>
    được gọi là một nghiệm của bất phương trình bậc nhất hai ẩn 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>≤</mo><mi>c</mi></mrow></math> 
    nếu bất đẳng thức 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><mi>b</mi><msub><mi>y</mi><mn>0</mn></msub><mo>≤</mo><mi>c</mi></mrow></math> 
    đúng.
  </li>
    <b>Nhận xét:</b> Bất phương trình bậc nhất 2 ẩn luôn có vô số nghiệm.
</ul>

<p class="mt-4"><b>2. Biểu diễn miền nghiệm của bất phương trình bậc nhất 2 ẩn trên mặt phẳng toạ độ</b></p>
<ul class="list-disc ml-12 *:my-4">
  <li>
    Trong mặt phẳng tọa độ Oxy, tập hợp các điểm có tọa độ là nghiệm của bất phương trình 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>≤</mo><mi>c</mi></mrow></math> 
    được gọi là miền nghiệm của bất phương trình đó.
  </li>
  <li>
    Người ta chứng minh được rằng đường thẳng d có phương trình 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>=</mo><mi>c</mi></mrow></math> 
    chia mặt phẳng tọa độ Oxy thành 2 nửa mặt phẳng bờ d:
    <ul class="list-disc ml-12">
      <li>
        Một nửa mặt phẳng (không kể bờ d) gồm các điểm có tọa độ thỏa mãn 
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>&gt;</mo><mi>c</mi></mrow></math>;
      </li>
      <li>
        Một nửa mặt phẳng (không kể bờ d) gồm các điểm có tọa độ thỏa mãn 
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>&lt;</mo><mi>c</mi></mrow></math>;
      </li>
      <li>
        Bờ d gồm các điểm có tọa độ (x; y) thỏa mãn 
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>=</mo><mi>c</mi></mrow></math>.
      </li>
    </ul>
  </li>
  <li>
    Cách biểu diễn miền nghiệm của bất phương trình bậc nhất hai ẩn 
    <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>≤</mo><mi>c</mi></mrow></math>:
    <ul class="list-disc ml-12">
      <li>
        Vẽ đường thẳng d: 
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>=</mo><mi>c</mi></mrow></math> 
        trên mặt phẳng tọa độ Oxy.
      </li>
      <li>
        Tính 
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><mi>b</mi><msub><mi>y</mi><mn>0</mn></msub></mrow></math> 
        và so sánh với c.
      </li>
      <li>
        Nếu 
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><mi>b</mi><msub><mi>y</mi><mn>0</mn></msub><mo>&lt;</mo><mi>c</mi></mrow></math> 
        thì nửa mặt phẳng bờ d chứa M₀ là miền nghiệm của bất phương trình.
      </li>
      <li>
        Nếu 
        <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><mi>b</mi><msub><mi>y</mi><mn>0</mn></msub><mo>&gt;</mo><mi>c</mi></mrow></math> 
        thì nửa mặt phẳng bờ d không chứa M₀ là miền nghiệm của bất phương trình.
      </li>
    </ul>
  </li>
</ul>
`

    return (
        <div className="py-10">
            <div className={`${Cubato.className} text-[#7EBF57] text-4xl my-6`}>Mô Tả</div>
            <div className={`text-[#395FAF] text-xl ${Helves.className}`}>- Bất đẳng thức là một chủ đề toán học nổi tiếng, nhận được nhiều sự chú ý của các học sinh và phụ huynh <br></br>- Theo định nghĩa, bất đẳng thức là một mệnh đề toán học biểu thị mối hệ không bằng nhau giữa hai biểu thức hoặc số, thường được biểu diễn bằng các dấu &gt;, &lt; ,≥ hoặc ≤. Nói cách khác, BĐT là so sánh độ lớn của hai vế, vế trái và vế phải
            </div>
            <div className={`${Cubato.className} text-[#7EBF57] text-4xl my-6`}>Nội DUng</div>
            <div className={`text-[#395FAF] text-xl ${Helves.className} text-bold`}>
                {content && <div className="" dangerouslySetInnerHTML={{ __html: content }}></div>}
            </div>

            <div className="flex justify-between mt-10 flex-wrap justify-center gap-5 mb-32">
                <Image src={'/batdangthuc.png'} alt="do thi cua batdangthuc" width={724} height={409}></Image>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 flex justify-center items-center bg-[#7EBF57] ">
                <Title text="Luyện tập" className="text-4xl min-w-100 rounded-full bg-[#FEF5CE] py-4 text-center"></Title>
            </div>
        </div>
    )
}