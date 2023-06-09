import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Nav,Navbar } from 'react-bootstrap';
import dataList from './dataList'
import { useEffect, useState} from 'react';
import { Route,Routes,Link, useNavigate, Outlet } from 'react-router-dom';
import Item from './pages/Item'
import axios from 'axios';
import Cart from './pages/Cart'

function App() {
  let [items, setitems] = useState(dataList)
  let [count, setCount] = useState(1)
  let [loding, setLoding] = useState(false)
  let navigate = useNavigate()

// 로컬 스토리지에 데이터가 남아 있으면 놔두고 없는 경우 리셋
 useEffect(()=>{
  if(JSON.parse(localStorage.getItem('watched')).length === 0){
  localStorage.setItem('watched',JSON.stringify([ ]))
  }else {
    console.log('로컬스토리지에 데이터가 남아 있습니다.')
  }
 },[])


  return (
    <div className="App">

    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='homepage' onClick={()=>{navigate('/')}}>CoZy Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/item/0');}} >Item </Nav.Link>
            <Nav.Link onClick={()=>{navigate('/Cart');}} >Cart </Nav.Link>
            <Nav.Link href="#CoZy_PRODUCT">CoZy PRODUCT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      {/* <Link className='link' to='/cart'>CART</Link> */}
      {/* <Link className='link' to='/'>HOME</Link> */}


      <Routes>
      <Route path='/' element={<Main items={items} count={count} 
      setCount={setCount} loding={loding} setLoding={setLoding} setitems={setitems}/>}/>
      <Route path='/item/:id' element={<Item items={items} />}/>
      <Route path='/Cart' element={<Cart/>}/>
      {/* 404 페이지 만드는법!  */}
      <Route path='*' element={<div>404 ! </div>}/>


            {/* Nested Routes 로 작성 시   */}
          {/* <Route path='/event' element={<Event/>}>
              <Route path='one' element={<div> 첫 주문시 양배추즙 서비스</div>}/>
              <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
            </Route> */}

            {/* 그냥 일반 Route로 작성 시  */}
          {/* <Route path='/event/one' element={<div></div>}/>
          <Route path='/event/two' element={<div></div>}/> */}

    </Routes>

          <div> 방금 본 상품</div>
          
    </div>
  );
}


function Main ({items, count,setCount,loding,setLoding,setitems}){
 

 
  return (
    <> 
              <div className='main-bg'>
              <h2 className='title'>Hello!</h2>
              <h2 className='title'>CoZy_Shop!</h2>
            </div>

            <div className='container' >
            <div className='row'>
            {
              items.map((el,idx)=>{
                return <Items key={el.id} el={el} i={idx} />
              })
            }
            </div>
            </div>
            {
               loding ? <div>로딩 중</div> : null
            } 

              {/* ajax로 데이터 받아오는 중엔 로딩 화면 보여주고 데이터를 다 받아오면 로딩 화면 가리기 */}
          <button onClick={()=>{
            setCount(count+1)
            setLoding(true)
            // 버튼 클릭 횟수에 따라 데이터 다르게 받아오기 
            if(count === 1){
           axios.get('https://codingapple1.github.io/shop/data2.json')
           .then((data)=>{ 
            let copy = [...items,...data.data]
            setitems(copy)
            setLoding(false)
           })
          }
            if(count === 2){
           axios.get('https://codingapple1.github.io/shop/data3.json')
           .then((data)=>{ 
            let copy = [...items,...data.data]
            setitems(copy)
            setLoding(false)
           })
          }
          // 더이상 받아올 데이터가 없는 경우 
          if(count >=3){
            alert('더이상 상품이 없습니다.')
            setLoding(false)
          }
            console.log(items)
          }}>버튼</button>
        </>
        )}
        
 function Items ({el,i}) { 
  let navigate =useNavigate() 


      return (
            <div className='col-md-4' >
          {/* 이미지 경로 설정하는 법 */}
          <img src={'/image/IMG_'+i+'.jpeg'} width={`80%`} height={'70%'} style={{borderRadius:'20px'}} onClick={()=>{
            navigate(`/item/${i}`)
            // 사진  클릭 시 로컬스토리지에 해당 상품 id 저장하기
          let storage = JSON.parse(localStorage.getItem('watched'))
          //중복은 제거
             if(!storage.includes(el.id)){
              storage.push(el.id)
             }
            localStorage.setItem('watched', JSON.stringify(storage))
             
          }}/>
          <h4>{el.title}</h4>
          <p>{el.content}</p>
          <p>가격 : {el.price}</p>
        </div>
      )}



// 예시
function Event (){
  return (
    <>
    <h1>오늘의 이벤트</h1>
    <Outlet></Outlet>
    </>
  )
}


export default App;
