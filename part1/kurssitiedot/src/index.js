import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.ex_amnt}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name={props.part1} ex_amnt={props.ex1}/>
      <Part name={props.part2} ex_amnt={props.ex2}/>
      <Part name={props.part3} ex_amnt={props.ex3}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
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
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))