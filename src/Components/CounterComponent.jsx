import React, { useState } from 'react'
import './CounterCss.css'
const CounterComponent = () => {
  let [ms,setMin]=useState('00');
  let [sec,setSec]=useState('00');
  let x=0;
  let m=0;
  let my='';
  function start(){
    my=setInterval(myTimer,1000);
  }
  function myTimer(){
    x=x+1;
    let temp = ''
    if(x<10){
      temp=`<span>0${x}</span>`;
    }
    else{
      temp=`<span>${x}</span>`;
    }
    if(x==60){
      temp=`<span>00</span>`
    }
    document.getElementById("h").innerHTML=temp;
    if(x>59){
      m=m+1;
      x=0;
      let temp2=''
      if(m<10){
        temp2=`<span>0${m}</span>`
        if(x<10){
          temp=`<span>0${x}</span>`;
        }
        else{
          temp=`<span>${x}</span>`;
        }
      }
      else{
        temp2=`<span>${x}</span>`
        if(x<10){
          temp=`<span>0${x}</span>`;
        }
        else{
          temp=`<span>${x}</span>`;
        }
      }
      document.getElementById('m').innerHTML=temp2;
    }
  } 

    function stopfunc(){
      clearInterval(my);
    }
    function reset(){
      setMin('00')
      setSec('00')
      document.getElementById('h').innerHTML=ms;
      document.getElementById('m').innerHTML=sec;
      clearInterval(my);
      x=0;
      m=0;
    }
      
  return (
    <React.Fragment>
      <h1>StopWatch</h1>
      <div class='whole'>
      <div class="dis">
        <span id="m">{ms}</span>
        <span> : </span>
        <span id="h">{sec}</span><br/>
      </div>
      <div class = 'butto'>
      <div>
        <button class="st" onClick={start}>Start</button>
      </div>
      <div>
        <button class="sto" onClick={stopfunc}>Stop</button>
      </div>
      <div>
        <button class="rs" onClick={reset}>Reset</button>
      </div>
      </div>
      </div>
    </React.Fragment>
  )
}

export default CounterComponent