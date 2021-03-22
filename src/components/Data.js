import CData from "./CData";

const Data = (props)=>{
    return(
        <div>
            <h5 className="sec">Customer Information</h5>
            <hr className="hr-text"/>
            <div>
                {props.customers.map((customer,index) => (
                    <CData customer = {customer} index={index} deleteCus = {props.deleteCus}></CData>
                ))}
            </div>
        </div>
    )
}

export default Data;