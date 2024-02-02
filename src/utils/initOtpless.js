export const initOTPless = (callback) => {
	console.log('called init')
	const otplessInit = Reflect.get(window, 'otplessInit')

	const loadScript = () => {
		const script = document.createElement('script')
		script.src = 'https://otpless.com/auth.js'
		script.id = 'otplessIdScript'
		// script.setAttribute('cid', 'YOUR_CID_HERE')
		document.body.appendChild(script)
	}

	otplessInit ? otplessInit() : loadScript()

	Reflect.set(window, 'otpless', callback)
}
