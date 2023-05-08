import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {newItem} from '../store'

// styled component 
let YellowBtn = styled.button`
background-color: ${props => props.color};
color: ${props => props.color === 'black' ? 'white': 'black'};
padding: 10px;
`

// 컴포넌트
function Item({items}) {

  // 리덕스를 사용함에 있어 유즈디스패치는 다리역할! 옮겨주는 것 상태를 
let dispatch = useDispatch(); 

// 유즈셀렉터는 store 에 있는 상태를 가져올 때 사용하는 것 (현재 이 페이지에선 사용할 일 없음!)
let state = useSelector((state)=>state)
let cartitems  = state.cartitems

// 유즈 파람스는 URL의 params items/0  /뒤에오는 문자,숫자를 가져올 수 있다
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
let num = items.filter(el=> el.id === Number(id))[0]




return (
<div className={`start ${fade2}`}>

<div className="container">

 {/* 구매욕구 증가시키기 */}
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
      <h4 className="pt-5">{num.title}</h4>
      <p>{num.content}</p>
      <p>{num.price}원</p>
      <button className="btn btn-danger"
      onClick={()=>{
        let plusItem = {
          id : num.id+3,
          name : num.title,
          count : 1};

         dispatch(newItem(plusItem))
         alert('장바구니에 담겼습니다.!')
      }}
      
      >주문하기</button> 
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

<TabComponent tab={tab} items={items}/>

</div>
)
}


function TabComponent({tab,items}){
let [fade, setFade] =useState('')

useEffect(()=>{
setTimeout(()=>{
  setFade('end')
},500) 
return ()=>{
  setFade('')
}
}, [tab])

let content = [<div className={`start ${fade}`}>{items[0].title}</div>,<div className={`start ${fade}`}>내용1</div>,<div className={`start ${fade}`}>내용2</div>]

return content[tab]

}

export default Item;