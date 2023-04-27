import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Nav,Navbar } from 'react-bootstrap';
import dataList from './dataList'
import { useState} from 'react';
import { Route,Routes,Link, useNavigate, Outlet } from 'react-router-dom';
import CART from './cart'

function App() {
  let [items, setitems] = useState(dataList)
  let navigate = useNavigate()





  return (
    <div className="App">

    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CoZy Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>HOME</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}} >CART </Nav.Link>
            <Nav.Link href="#CoZy_PRODUCT">CoZy PRODUCT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      {/* <Link className='link' to='/cart'>CART</Link> */}
      {/* <Link className='link' to='/'>HOME</Link> */}


      <Routes>

      <Route path='/' element={<Main items={items}/>}/>
      <Route path='/cart/:id' element={<CART items={items}/>}/>
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

    </div>
  );
}


function Main ({items}){
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
                return <Items key={el.id} el={el} i={idx+1}/>
              })
            }
            </div>
            </div>
        </>
        )}
        
 function Items ({el,i}) { 
          return (
            <div className='col-md-4' >
          {/* 이미지 경로 설정하는 법 */}
          <img src={'/image/IMG_'+i+'.jpeg'} width={`80%`} height={'70%'} style={{borderRadius:'20px'}}/>
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
