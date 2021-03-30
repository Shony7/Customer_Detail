import CData from "./CData";

const Cards = (props)=>
{
    return(
        <div>
            <h5 className="sec">Details</h5>
            <hr className="hr-text"/>
            <div class="flex-container">
                {props.customers.map((customer,index) => (
                    <CData 
                        customer = {customer} 
                        index={index} 
                        deleteCus = {props.deleteCus}
                        editButtonClicked = {props.editButtonClicked}
                    />
                ))}
            </div>
        </div>
    )
}

export default Cards;