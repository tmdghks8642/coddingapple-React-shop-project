
import { Table } from "react-bootstrap"
import { useSelector } from "react-redux";


function Select (){

let cartitems = useSelector((state)=>{return state.cartitems})

console.log(cartitems)
return (
<div>
<Table>
  <thead>
    <tr>
      <th>순서</th>
      <th>상품명</th>
      <th>수량</th>
      <th>변경하기</th>
    </tr>
  </thead>
  {
   cartitems.map((el,idx)=>(
      <tbody key={el.id}>
    <tr>
      <td>{idx+1}</td>
      <td>{el.name}</td>
      <td>{el.count}</td>
      <td>클릭하십셔</td>
    </tr>
  </tbody>

   ))
  }
  
</Table> 

</div>
)

}

export default Select;