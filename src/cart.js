import { useParams } from "react-router-dom";
import styled from "styled-components";



let YellowBtn = styled.button`
background-color: ${props => props.color};
color: ${props => props.color === 'black' ? 'white': 'black'};
padding: 10px;

`



function Cart({items}) {
let {id} = useParams();
// id가 동일한 것 탐색 이러면 정렬 시에도 id 가 동일한 것만 찾음
let num = items.filter(el=> el.id === Number(id))




return (
<>
<YellowBtn color={'black'}>버튼</YellowBtn>
<YellowBtn color={'yellow'}>버튼</YellowBtn>
<div className="container">
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