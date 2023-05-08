
import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { changename,newCount } from "../store";

function Cart (){
let dispatch = useDispatch();
let state = useSelector((state)=>{return state})


return (
<div>
  <h2>장바구니</h2>

<Table>
  <thead>
    <tr>
      <th>순서</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  <tbody >
    {/* Redux 를 이용해 상태를 store 에 저장하고 가져다 쓰기 */}
  {
   state.cartitems.map((element,idx)=>(
    <tr key={element.id}>
      <td>{idx+1}</td>
      <td>{element.name}</td>
      <td>{element.count}</td>
      <td>  <button onClick={(e)=>{
    // Redux 를 이용해 상태를 변경하는 함수 만들고 클릭시 상태 변경함수 호출해서 상태 변경하기 
      let newArr = state.cartitems.filter(el => el.id === element.id)[0]
          dispatch(newCount(newArr))
      }}>+</button></td>
    
    </tr>

))
}
</tbody>
  
</Table> 

</div>
)

}

export default Cart;