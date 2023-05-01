import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

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
let [tab, setTab] = useState(0)
let [fade2, setFade2] = useState('')

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

useEffect(()=>{
  setTimeout(()=>{
    setFade2('end')
  },500) 
  return ()=>{
    setFade2('')
  }
  }, [])

// id가 동일한 것 탐색 이러면 정렬 시에도 id 가 동일한 것만 찾음
let num = items.filter(el=> el.id === Number(id))




return (
<div className={`start ${fade2}`}>

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

{/* 탭만들기  */}
<Nav variant="tabs"  defaultActiveKey="link0" >
    <Nav.Item>
      <Nav.Link eventKey="link0" onClick={()=>{
       setTab(0)
      }}>버튼0</Nav.Link>
    </Nav.Item>
    
    <Nav.Item>
      <Nav.Link eventKey="link1"onClick={()=>{
       setTab(1)
      }}>버튼1</Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link eventKey="link2"onClick={()=>{
       setTab(2)
      }}>버튼2</Nav.Link>
    </Nav.Item>
</Nav>

<TabComponent tab={tab}/>

</div>
)
}



function TabComponent({tab}){
let [fade, setFade] =useState('')
useEffect(()=>{
setTimeout(()=>{
  setFade('end')
},500) 
return ()=>{
  setFade('')
}
}, [tab])

let content = [<div className={`start ${fade}`}>내용0</div>,<div className={`start ${fade}`}>내용1</div>,<div className={`start ${fade}`}>내용2</div>]

return content[tab]

}

export default Cart;