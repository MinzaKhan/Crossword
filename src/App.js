import logo from './logo.svg';
import './App.css';
import './stylesheet2.css';
import { useEffect } from 'react';
import { useState } from 'react';
const options = [{id: '-1', pos: '0', sup:'', name:' '},{id: '1', pos: '1',sup:'1', name:''},{id: '-1', pos: '2',sup:'', name:' '},{id: '-1', pos: '3',sup:'', name:' '},{id: '-1', pos: '4',sup:'', name:' '}, {id: '5', pos: '5',sup:'3', name:' '},{id: '-1', pos: '6',sup:'', name:' '},{id: '-1', pos: '7',sup:'', name:' '}];
const options1 = [{id: '8', pos: '0',sup:'2', name:' '},{id: '-2', pos: '1',name:'R'},{id: '10', pos: '2', name:' '},{id: '11',pos: '3', name:' '},{id: '-2', pos: '4', name:'G'}, {id: '13', pos: '5',name:' '},{id: '-1', pos: '6',name:' '},{id: '-1',pos: '7', name:' '}];
const options2 = [{id: '-1', pos: '0', name:' '},{id: '17', pos: '1', name:' '},{id: '-1', pos: '2', name:' '},{id: '-1', pos: '3', name:' '},{id: '-1', pos: '4', name:' '}, {id: '21', pos: '5', name:' '},{id: '-1', pos: '6', name:' '},{id: '-2', pos: '7', sup :'5', name:'R'}];
const options3 = [{id: '-1', pos: '0', name:' '},{id: '25', pos: '1',name:' '},{id: '-1', pos: '2', name:' '},{id: '-1',pos: '3', name:' '},{id: '28', pos: '4', sup : '4', name:' '}, {id: '-2', pos: '5',name:'L'},{id: '30', pos: '6',name:' '},{id: '31',pos: '7', name:' '}];
const options4 = [{id: '-1', pos: '0', name:' '},{id: '33', pos: '1', name:' '},{id: '-1', pos: '2', name:' '},{id: '-1', pos: '3', name:' '},{id: '-1', pos: '4', name:' '}, {id: '37', pos: '5', name:' '},{id: '-1', pos: '6', name:' '},{id: '39', pos: '7', name:' '}];
const options5 = [{id: '-1', pos: '0', name:' '},{id: '-1', pos: '1',name:' '},{id: '-1', pos: '2', name:' '},{id: '-1',pos: '3', name:' '},{id: '-1', pos: '4', name:' '}, {id: '45', pos: '5',name:' '},{id: '-1', pos: '6',name:' '},{id: '-1',pos: '7', name:' '}];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

function App() {
  const [score, setScore] = useState(null);
  const[change, setChange] = useState(false)
  const[userAnswer, setuserAnswer] = useState(null)
  const[disabled, setDisabled] = useState(true)
  const[position, setPosition] = useState(null)
  const[red, setRed] = useState(false)
  const[orange, setOrange] = useState(false)
  const[blue, setBlue] = useState(false)
  const[green, setGreen] = useState(false)
  const[yellow, setYellow] = useState(false)
useEffect(() => {
  setChange(true)
  
}, [score])

if(change === true && score!=null&&userAnswer!=null){
  if(score>=0 && score<=7){

    options[score].name=userAnswer
  }
  else if(score>7 && score<=15){

    options1[position].name=userAnswer
  }
  else if(score>15 && score<=23){

    options2[position].name=userAnswer
  }
  else if(score>23 && score<=31){

    options3[position].name=userAnswer
  }
  else if(score>31 && score<=39){

    options4[position].name=userAnswer
  }
  else if(score>39 && score<=47){

    options5[position].name=userAnswer
  }
  setuserAnswer(null)
  setChange(false)
  setScore(null)

}
if(red===false){
if(options3[7].name==='E'&&options4[7].name==='D'){
  setRed(true)

}}
if(orange===false){
  if(options1[0].name==='O'&&options1[2].name==='A'&&options1[3].name==='N'&&options1[5].name==='E'){
    setOrange(true)
  
  }}
if(green===false){
if(options[1].name === 'G'&& options2[1].name === 'E'&& options3[1].name === 'E' && options4[1].name === 'N'){
  setGreen(true)

}
}
if(yellow===false){
  if(options[5].name==='Y'&&options1[5].name==='E'&&options2[5].name==='L'&&options4[5].name==='O'&&options5[5].name==='W'){
    setYellow(true)
  
  }}
if(blue===false){
if(options3[4].name==='B'&&options3[6].name==='U'&&options3[7].name==='E'){
  setBlue(true)

}}



  return (
    
    <div className="App">
      <h3 style={{color: '#00CED1'}}><u>CROSSWORD - COLORS!</u></h3>
      <center>
      <div align="center" className='container10'>
    
      <div align="center" className='container12'>
        {options.map(option => (  
  
    
        <button key={option.id} 

    className={`ui floating message options ${score === option.id || (green&&option.id ==='1')||(yellow&&option.id ==='5') ? "selected1" : "not-selected"} ${option.id ==='-1'|| option.id ==='-2'  ? "dis" : null}` } onClick={()=>{setScore(option.id);setPosition(option.id); setDisabled(true)}}
   disabled ={option.id === '-1'|| option.id ==='-2' || (green&&option.id ==='1')||(yellow&&option.id ==='5')?true:false}
    ><sup className='supers'>{option.sup}</sup>
        {option.name}    
           
    </button>
    
))

}


</div>


<div className='container12'>
        {options1.map(option => ( 
  
    
        <button key={option.id} 

    className={`ui floating message options ${score === option.id ||(yellow&&option.id ==='13')||(orange&&(option.id==='8'||option.id==='9'||option.id==='10'||option.id==='11'||option.id==='12'||option.id==='13'||option.id==='14'||option.name==='R'||option.name==='G'))? "selected1" : "not-selected"} ${option.id ==='-1' || option.id ==='-2' ? "dis" : null}` } onClick={()=>{setScore(option.id); setPosition(option.pos); setDisabled(true)}}
    disabled ={option.id === '-1'|| option.id ==='-2' ||(yellow&&option.id ==='13')||(orange&&(option.id==='8'||option.id==='9'||option.id==='10'||option.id==='11'||option.id==='12'||option.id==='13'||option.id==='14'))?true:false}
    ><sup className='supers'>{option.sup}</sup>
        {option.name}
        
    </button>
    
))

}
</div>
<div className='container12'>
        {options2.map(option => ( 
  
    
        <button key={option.id} 

    className={`ui floating message options ${score === option.id||(red&&option.name==='R')||(yellow&&option.id ==='21')||(green&&option.id ==='17') ? "selected1" : "not-selected"} ${option.id ==='-1'|| option.id ==='-2'  ? "dis" : null}` } onClick={()=>{setScore(option.id); setPosition(option.pos); setDisabled(true)}}
   disabled ={option.id === '-1'|| option.id ==='-2'||(yellow&&option.id ==='21')||(green&&option.id ==='17')?true:false}
   ><sup className='supers'>{option.sup}</sup>
        {option.name}
        
    </button>
    
))

}
</div>
<div className='container12'>
        {options3.map(option => ( 
  
    
        <button key={option.id} 

    className={`ui floating message options ${score === option.id||(blue&&option.id ==='28')||(blue&&option.id ==='30')||(blue&&option.id ==='31')||(red&&option.id==='31')||(green&&option.id==='25') ? "selected1" : "not-selected"} ${option.id ==='-1'|| option.id ==='-2'  ? "dis" : null}` } onClick={()=>{setScore(option.id); setPosition(option.pos); setDisabled(true)}}
   disabled ={option.id === '-1'|| option.id ==='-2'||(red&&option.id==='31')||(green&&option.id==='25')||(blue&&option.id ==='28')||(blue&&option.id ==='30')||(blue&&option.id ==='31')?true:false}
    ><sup className='supers'>{option.sup}</sup>
        {option.name}
        
    </button>
    
))

}
</div>
<div className='container12'>
        {options4.map(option => (
  
    
        <button key={option.id} 

    className={`ui floating message options ${score === option.id||(yellow&&option.id ==='37') ||(red&&option.id==='39')||(green&&option.id==='33')? "selected1" : "not-selected"} ${option.id ==='-1'|| option.id ==='-2'  ? "dis" : null}` } onClick={()=>{setScore(option.id); setPosition(option.pos); setDisabled(true)}}
   disabled ={option.id === '-1'|| option.id ==='-2'||(yellow&&option.id ==='37')||(red&&option.id==='39')||(green&&option.id==='33')?true:false}
    ><sup className='supers'>{option.sup}</sup>
        {option.name}
        
    </button>
    
))

}
</div>
<center><div className='container12'>
        {options5.map(option => ( 
    
        <button key={option.id} 

    className={`ui floating message options ${score === option.id|| (yellow&&option.id ==='45') ? "selected1" : "not-selected"} ${option.id ==='-1'|| option.id ==='-2'  ? "dis" : null}` } onClick={()=>{setScore(option.id); setPosition(option.pos); setDisabled(true)}}
   disabled ={option.id === '-1'|| option.id ==='-2'||(yellow&&option.id ==='45')?true:false}
    ><sup className='supers'>{option.sup}</sup>
        {option.name}
        
    </button>
    
))

}
</div></center>

</div>
</center>

<div className='container11'>
        {letters.map(letter => ( 
  
    <p>
        <button key={letter} 

    className={`ui floating message options2 ${userAnswer === letter ? "selected1" : "not-selected"}
    ` } disabled = {score?false:true} onClick= {() => setuserAnswer(letter)}
   
    >
        {letter}
        
    </button></p>
    
))

}




</div>
    </div>
    
  );
}

export default App;
