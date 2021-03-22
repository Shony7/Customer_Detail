import './App.css';
import Header from './components/Header';
import Customer from './components/Customer';
import { useState } from 'react';
import Data from './components/Data';

function App() {

  const [customers, setCustomers] = useState([])
  const addCustomerOnClick = (customer)=>{
    console.log(customer)
    const id = Math.random()
    const newCustomer = {id,...customer}
    setCustomers([...customers,newCustomer])
  }

  const deleteCustomerOnClick = (id)=>{
    setCustomers(customers.filter((cust)=> cust.customerId !== id))
  }

  return (
    <div>
      <div className='container'>
        <div className='outer-box'>
          <Header title = "Customer Information"></Header>
          <Customer addCustomer = {addCustomerOnClick}/>
        </div>
        { customers.length > 0 ? <Data customers={customers} deleteCus = {deleteCustomerOnClick}></Data> : 'No Details'}
      </div>
    </div>
  );
}

export default App;
