import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incNumber,decNumber} from '../redux-file/Action'
const Home = () => {

    const mystate = useSelector((state)=>state.chngNumber)
    // console.log(mystate);

    const dispatch = useDispatch()
  return (
    <>
        <div className='container'>
            <h1>Basic Counter for Increment or Decrement</h1>
            <h4>Using React and Redux</h4>

            <div className='quantity'>  
                <a className='quantity__minus' title='Decrement' onClick={()=>dispatch(decNumber())}><span>-</span></a>
                <input name="quantity" type="text" className='quantity__input' value={mystate} />
                <a className='quantity__plus' title='Increment' onClick={()=>dispatch(incNumber())}><span>+</span></a>
            </div>
        </div>

    </>
  )
}

export default Home