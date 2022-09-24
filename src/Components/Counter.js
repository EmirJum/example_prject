import React, { useState } from "react";


export default function Counter() {
	const [count, setCount] = useState(0)
	function incriment () {
		setCount(count + 1)
	}
	function decrement () {
		setCount(count - 1)
	}
	return (
		<div>
			<button onClick={incriment}>+</button>
			<h1>{count}</h1>
			<button onClick={decrement}>-</button>
		</div>
	)
}