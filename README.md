[![OTPless](https://d1j61bbz9a40n6.cloudfront.net/website/home/v4/logo/white_logo.svg)](https://otpless.com/)

# React-JS Demo: Otpless Login Page on Click

## Steps to add OTPless SDK to your ReactJS Website

1. **Create an App in [OTPless dashboard](https://otpless.com/dashboard/app) and copy the `APP ID`**
2. **Add OTPLESS Script as a function**

    > Add the following code to your utils/initOtpless.js in root directory.

    ```js
    export const initOTPless = (callback) => {
        const otplessInit = Reflect.get(window, "otplessInit");

        const loadScript = () => {
            const isScriptLoaded = document.getElementById("otpless-sdk");
            if(isScriptLoaded) return;

            const script = document.createElement('script')
            script.id = 'otpless-sdk'
            script.type = 'text/javascript'
            script.src = 'https://otpless.com/v2/auth.js'
            script.setAttribute("data-appid", "PASTE_YOUR_APPID_HERE")
            document.body.appendChild(script);
        };

        otplessInit ? otplessInit() : loadScript();

        Reflect.set(window, "otpless", callback);
    };

    ```

3. **Load the script in Login/Signup component and add callback function**

    > Add following code in Login/Signup component.
    >> retrive data using **otplessUser** object

    ```jsx
    useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search)
		const paramsValue = urlParams.get('ex')
		if (paramsValue) initOTPless(callback)
	}, [])

	const callback = (otplessUser) => {
		removeQueryParam('ex')
		alert(JSON.stringify(otplessUser))
	}

	const openModal = () => {
		const urlParams = new URLSearchParams(window.location.search)
		const paramsValue = urlParams.get('ex')

		if (!paramsValue) {
			const currentURL = window.location.href
			const newParam1 = 'ex=true'
			const updatedURL = `${currentURL}?${newParam1}`
			window.history.pushState(null, '', updatedURL)
		}
		initOTPless(callback)
		const modalContainer = document.getElementById('modalContainer')
		modalContainer ? (modalContainer.style.display = 'flex') : ''

		setTimeout(() => {
			removeQueryParam('ex')
		}, 1000)
	}

	const removeQueryParam = (param) => {
		const url = new URL(window.location.href)
		url.searchParams.delete(param)
		window.history.pushState(null, '', url)
	}

	const closeModal = (e) => {
		removeQueryParam('ex')
		const modalContainer = document.getElementById('modalContainer')
		if (e.target === modalContainer) {
			modalContainer ? (modalContainer.style.display = 'none') : ''
		}
	}
    ```

4. **Add following code to render login page**

    > Add the following div in Login/Signup component.

    ```html
    <div className="modal-container" id="modalContainer" onClick={closeModal}>
        <div id="otpless-login-page"></div>
    </div>
    <button id="loginBtn" onClick={openModal}>Get Started</button>
    ```

### This demo implementation adds extra modularity, scalability and reusability to the otpless-auth sdk

### Integration Options

- [OTPless-Page](https://github.com/reniyal-otpless/otpless-reactjs-demo/)
- [OTPless-Page-OnClick](https://github.com/reniyal-otpless/otpless-reactjs-demo/tree/onclick-page-demo)
- [OTPless-Floater](https://github.com/reniyal-otpless/otpless-reactjs-demo/tree/floater-demo)
- [OTPless-Floater-OnClick](https://github.com/reniyal-otpless/otpless-reactjs-demo/tree/onclick-floater-demo)

### Usage

> **Prerequisites**: [NodeJS](https://nodejs.org/en)

- Install Packages

    ```bash
    npm install
    ```

- Run the demo

    ```bash
    npm run dev
    ```

- Open [localhost:5173](http://localhost:5173) in your browser
- Switch branches to check out available options to integrate *OTPless* in your project

## *Thank You*

## [Visit OTPless](https://otpless.com/platforms/react)
