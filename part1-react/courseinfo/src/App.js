import './App.css';
import {useState} from "react";


const Title = ({course})=>{
  return (
    <h1>
      {course}
    </h1>
  )
}
const Exercice = ({numberExcercice, parts})=>{
  return (
    <p>
      {parts} {numberExcercice}
    </p>
  )
}

const Contador = ({number}) => {
  return <h1>{number}</h1>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const [contador, setContador] = useState(0)

  const incremetal = (e)=>{
    setContador((valorAnterior)=>{
        if(e.target.className === "incre"){
          return valorAnterior + 1
        }else if (e.target.className === "decre"){
          return valorAnterior - 1
        }
    })
  }
  return (
    <div>
      <Contador number={contador} />
      <button
      className='incre'
        onClick={incremetal}
      >
        Incrementar
      </button>
      <button
        className='decre'
        onClick={incremetal}
      >
        Decrementar
      </button>
      <Title course={course}/>
      <Exercice parts={part1} numberExcercice={exercises1}/>
      <Exercice parts={part2} numberExcercice={exercises2}/>
      <Exercice parts={part3} numberExcercice={exercises3}/>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App