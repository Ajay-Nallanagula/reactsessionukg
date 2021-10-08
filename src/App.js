import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

//This can come from another component or ajax api rest call
const products = [
  { id: 'phn21', name: 'Iphone', price: 80000 },
  { id: 'lp22', name: 'Laptop', price: '60000' },
  { id: '23', name: 'Tab', price: '40000' },
]

function App() {
  return (
    <>
      <div className='container'>
        {products.map(({ name, price, id }) => {
          return <Card name={name} price={price} key={id} />
        })}
      </div>
    </>
  );
}

export default App;















