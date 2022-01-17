import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, {initialState} from '../reducers/index';
import {addOne, applyNumber, operationChange, clearDisplay, addToMemory, memoryToTotal, memoryClear} from '../actions/index';

let currentState = initialState;
console.log(currentState);

function App() {
  const[state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleOneClick = (n) => {
    dispatch(applyNumber(n))
  } 

  const handleOperation = (operator) =>{
    dispatch(operationChange(operator))
  }

  const handleClear = () =>{
    dispatch(clearDisplay());
  }

  const handleAddMemory = () =>{
    dispatch(addToMemory());
  }
  
  const handleMemoryTotal = () =>{
    dispatch(memoryToTotal());
  }

  const handleMemoryClear = () =>{
    dispatch(memoryClear());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={()=> handleAddMemory()} />
              <CalcButton value={"MR"} onClick={()=> handleMemoryTotal()}/>
              <CalcButton value={"MC"} onClick={() => handleMemoryClear()}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=> handleOneClick(1)}/>
              <CalcButton value={2} onClick={()=> handleOneClick(2)} />
              <CalcButton value={3} onClick={()=> handleOneClick(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=> handleOneClick(4)} />
              <CalcButton value={5} onClick={()=> handleOneClick(5)} />
              <CalcButton value={6} onClick={()=> handleOneClick(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=> handleOneClick(7)} />
              <CalcButton value={8} onClick={()=> handleOneClick(8)} />
              <CalcButton value={9} onClick={()=> handleOneClick(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=> handleOperation("+")}/>
              <CalcButton value={"*"} onClick={()=> handleOperation("*")}/>
              <CalcButton value={"-"} onClick={()=> handleOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=> handleClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
