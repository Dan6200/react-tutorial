import React from "react";

const UseStateCounter = () => {
	const [val, setVal] = React.useState(0)
	return <React.Fragment>
		<section style= { {margin: "4rem 0"} }>
			<h2>regular counter</h2>
			<h3>{val}</h3>
			<button className='btn' onClick={()=>val>0?setVal(val-1):null}>
				decrease
			</button>
			<button className='btn' onClick={()=>setVal(0)}>
				reset
			</button>
			<button className='btn' onClick={()=>setTimeout(() => setVal(val=>val+1), 2000)}>
				increase
			</button>
		</section>
	</React.Fragment>
};

export default UseStateCounter;
