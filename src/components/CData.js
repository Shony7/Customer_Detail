import { AiFillDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'

const CData = (props)=>{
    var x
    return(
        <div className="card-box">
            <p className = "id">Customer {props.index + 1}</p>
            <p className = "name">Name : { props.customer.customerName }</p>
            <p className = "loc">Location : { props.customer.customerLocation }</p>
            <div className='edit-delete'>
                <AiFillDelete style = {{ color:'#007bff', cursor:'pointer'}} 
                    onClick={()=> props.deleteCus(props.customer.customerId)} 
                />
                <FaEdit style = {{ color:'#007bfa', cursor:'pointer'}} />
            </div>
        </div>
    )
}

export default CData;