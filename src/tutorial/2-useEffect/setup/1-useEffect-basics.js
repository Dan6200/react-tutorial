import React from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [value, setValue] = React.useState(0)
	React.useEffect(() => {
		if (value>10)
			document.title = `New messages(${Math.floor(value/10)*10}+)`
		else if (value)
			document.title = `New messages(${value})`
	}, [value])
	return <React.Fragment>
		<h1>{value}</h1>
		<button className='btn' onClick={()=>setValue(value+1)}>
			update
		</button>
	</React.Fragment>
};

export default UseEffectBasics;
