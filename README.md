[![OTPless](https://d1j61bbz9a40n6.cloudfront.net/website/home/v4/logo/white_logo.svg)](https://otpless.com/platforms/react)

# React-JS Demo: Otpless Login Floater on Click

## Steps to add OTPless SDK to your ReactJS Website

1. **Add OTPLESS Script as a function**

    > Add the following code to your utils/initOtpless.js in root directory.

    ```js
    export const initOTPless = (callback) => {
        const otplessInit = Reflect.get(window, "otplessInit");

        const loadScript = () => {
            const isScriptLoaded = document.getElementById("otplessIdScript");
            if(isScriptLoaded) return;

            const script = document.createElement("script");
            script.src = "https://otpless.com/auth.js";
            script.id = "otplessIdScript";
            script.setAttribute("cid","YOUR_CID_HERE");
            document.body.appendChild(script);
        };

        otplessInit ? otplessInit() : loadScript();

        Reflect.set(window, "otpless", callback);
    };

    ```

2. **Load the script in Login/Signup component and add callback function**

    > - Add following code in Login/Signup component.
    > - retrive data using **otplessUser** object

    ```jsx
    useEffect(() => initOTPless(callback), []);

    const callback = (otplessUser) => {
        alert(JSON.stringify(otplessUser));
    };
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

> Received User Data Format

```js
// otpless user Format
{
    "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "timestamp": "YYYY-MM-DD HH:MM:SS",
    "timezone": "+XX:XX",
    "mobile": {
        "name": "User Name",
        "number": "User Mobile Number"
    },
    "email": {
        "name": "User Name ",
        "email": "User Email"
    }
}
```
