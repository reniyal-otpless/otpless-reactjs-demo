export const initOTPless = (callback) => {
	const otplessInit = Reflect.get(window, 'otplessInit')

	const loadScript = () => {
		const isScriptLoaded = document.getElementById("otpless-sdk");
		if(isScriptLoaded) return;

		const script = document.createElement('script')
		script.id = 'otpless-sdk'
		script.type = 'text/javascript'
		script.src = 'https://otpless.com/auth.js'
		// TODO: Add your app id
		script.setAttribute('appId', 'PASTE_YOUR_APPID_HERE')
		document.body.appendChild(script)
	}

	otplessInit ? otplessInit() : loadScript()

	Reflect.set(window, 'otpless', callback)
}
