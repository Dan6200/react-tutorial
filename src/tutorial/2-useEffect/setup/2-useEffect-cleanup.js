import React from 'react'
// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [size, setSize] = React.useState(window.innerWidth)
	const [color, setColor] = React.useState("0xeee234")

	React.useEffect(() => {
		const changeColor = () => {
			const div = document.getElementsByTagName("body")[0]
			div.style.backgroundColor='#'+color.substring(2)
			setColor( ( (parseInt(color, 16) + 100) % Number.MAX_SAFE_INTEGER
				).toString(16)
			)
			setSize(window.innerWidth)
		}

		window.addEventListener('resize', changeColor)

		return () => window.removeEventListener('resize', changeColor)
	})
	return <>
		<h1>Window</h1>
		<h2>{size}px</h2>
	</>
}

export default UseEffectCleanup
