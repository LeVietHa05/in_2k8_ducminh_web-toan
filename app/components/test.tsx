export default function Test() {
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
<ul>
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
  </math>. Khi đó,
</p>
`
    return (
        <div>
            {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
        </div>
    )
}