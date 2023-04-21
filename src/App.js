import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Nav,Navbar } from 'react-bootstrap';
import Image1 from './image/IMG_8770.jpeg'
import Image2 from './image/IMG_9598.jpeg'
import Image3 from './image/IMG_1111.jpeg'

function App() {
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
        <div className='col-md-4' >
          {/* 이미지 경로 설정하는 법 */}
          <img src={`${Image1}`} width={`80%`} style={{borderRadius:'20px'}}/>
          <h4>zl존 선그라시</h4>
          <p>멋짐이 폭발합니다.</p>
        </div>
        <div className='col-md-4'>
        <img src={`${Image2}`} width={`80%`} style={{borderRadius:'20px'}}/>
          <h4>간zl 선그라시</h4>
          <p>사람들의 시선을 느껴보세요</p>
        </div>
        <div className='col-md-4'>
        <img src={`${Image3}`} width={`80%`} style={{borderRadius:'20px'}}/>
          <h4>ToKoy 선그라시</h4>
          <p>쓰는 순간 차도녀</p>
        </div>
      </div>
     </div>


    </div>
  );
}

export default App;
