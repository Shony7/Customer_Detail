import { AiFillDelete } from 'react-icons/ai'
import { FaEdit } from 'react-icons/fa'

const CData = (props)=>
{
    return(
        <div className="card-box">
            <p className = "id">Customer { props.index + 1 }</p>
            <p className = "name">Name : { props.customer.customerName }</p>
            <p className = "loc">Location : { props.customer.customerLocation }</p>
            <div className='edit-delete'>
                <AiFillDelete style = {{ color:'#007bff', cursor:'pointer'}} 
                    onClick={()=> props.deleteCus(props.customer.id)}
                />
                <FaEdit style = {{ color:'#007bff', cursor:'pointer'}} 
                    onClick={()=> props.editButtonClicked(props.customer.id)}
                />
            </div>
        </div>
    )
}

export default CData;