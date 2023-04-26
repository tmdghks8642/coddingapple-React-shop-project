
function Cart() {

return (
<>
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src='/image/IMG_1.jpeg' width="70%" style={{borderRadius:'20px', marginTop:'10px'}}/>
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">상품명</h4>
      <p>상품설명</p>
      <p>120000원</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
</>
)
}

export default Cart;