import './App.css';

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

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}/>
      <Exercice parts={part1} numberExcercice={exercises1}/>
      <Exercice parts={part2} numberExcercice={exercises2}/>
      <Exercice parts={part3} numberExcercice={exercises3}/>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App