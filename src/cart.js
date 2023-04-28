import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";

// styled component 
let YellowBtn = styled.button`
background-color: ${props => props.color};
color: ${props => props.color === 'black' ? 'white': 'black'};
padding: 10px;
`

// 컴포넌트
function Cart({items}) {
let {id} = useParams();
let [discount, setdiscount] = useState(true)
let [iptValue, setiptValue] = useState('')

useEffect(()=>{
  setTimeout(()=>{
    setdiscount(!discount)
  }, 2000)

},[])

useEffect(()=>{
  if(isNaN(Number(iptValue))){
    alert('그러지마세요')
    setiptValue('')
   }
},[iptValue])

// id가 동일한 것 탐색 이러면 정렬 시에도 id 가 동일한 것만 찾음
let num = items.filter(el=> el.id === Number(id))




return (
<>

<div className="container">
 
  {
    discount ?  <div className="alert alert-warning">  2초 이내 구매시 할인 </div>: null
  }
  
 {/* 숫자만 검색할 수 있는 Input 태그 구현  */}
<input type="text" value={iptValue} onChange={(e)=>{
   setiptValue(e.target.value)
}}></input>


  <div className="row">
    <div className="col-md-6">
      <img src={`/image/IMG_${id}.jpeg`} width="70%" style={{borderRadius:'20px', marginTop:'10px'}}/>
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{num[0].title}</h4>
      <p>{num[0].content}</p>
      <p>{num[0].price}원</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
</>
)
}

export default Cart;