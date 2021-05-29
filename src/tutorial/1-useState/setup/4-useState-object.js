import React from 'react';

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
	  name: 'peter',
	  age: 24,
	  message: 'random message'
  })
  return <React.Fragment>
  	<h1>{person.name}</h1>
	<h2>{person.age}</h2>
	<h2>{person.message}</h2>
	<button className='btn' onClick={() => {
		person.message==='hello world'?
		setPerson({...person, message: 'random message'})
		: setPerson({...person, message: 'hello world'})}}>
			change message
		</button>
  </React.Fragment>
}

export default UseStateObject;
