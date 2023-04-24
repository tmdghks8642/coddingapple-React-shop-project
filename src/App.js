import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Nav,Navbar } from 'react-bootstrap';

import dataList from './dataList'
import { useState } from 'react';

function App() {
  let [items, setitems] = useState(dataList)
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CoZy Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#ABOUT">ABOUT</Nav.Link>
            <Nav.Link href="#ONLINE_STORE">ONLINE STORE</Nav.Link>
            <Nav.Link href="#CoZy_PRODUCT">CoZy PRODUCT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'>
        <h2 className='title'>Hello!</h2>
        <h2 className='title'>CoZy_Shop!</h2>
      </div>

     <div className='container' >
      <div className='row'>
      {
        items.map((el,idx)=>{
          return <Items key={items[idx]} items={items[idx]} i={idx+1}/>
        })
      }
      </div>
     </div>
    </div>
  );
}


function Items ({items,i}) {
return (
  <div className='col-md-4' >
          {/* 이미지 경로 설정하는 법 */}
          <img src={'/image/IMG_'+i+'.jpeg'} width={`80%`} style={{borderRadius:'20px'}}/>
          <h4>{items.title}</h4>
          <p>{items.content}</p>
          <p>가격 : {items.price}</p>
        </div>
)

}






export default App;
