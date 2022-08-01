import React, {
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react';

const Counter = () => {

	const [clicks, setClicks] = useState(0);
	const [step, setStep] = useState(1);

	const curentValue = useRef(0);

	const showValue = () => {

		setTimeout(() => {

			alert(curentValue.current)
		}, 3000)
	}

	const d = useMemo(() => {
		return 2 + step + '- my date'
	}, [step])

	useEffect(() => {
		console.log('render', clicks, step);
		document.title = `Component render Clicked ${clicks} times`;

		curentValue.current = clicks;

		setStep((prevValue) => prevValue + 1)
	}, [clicks, setStep])
	return (
		<div>
			<h1>{d}</h1>
			<div>Clicked: {clicks}</div>
			<button onClick={() => setClicks(clicks + step)}>Click</button>
			<br />
			<button onClick={showValue}>Show value</button>
			<br />
			<input name='step' ref={curentValue} value={step} onChange={(e) => setStep(+e.target.value)} />
		</div>

	);
}

export default Counter;