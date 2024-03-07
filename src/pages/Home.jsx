import { useEffect } from 'react'
import { initOTPless } from '../utils/initOtpless'
import { useNavigate } from 'react-router-dom'

function Home() {
	const navigate = useNavigate()
	useEffect(() => initOTPless(handleOtplessData), [])

	/** handleUserData - otpless callback function
	 * @description
	 * This function is called after authentication is done by otpless-sdk.
	 * Use this function to further process the otplessUser object, navigate to next page or perform any other action based on your requirement.
	 * @param {Object} otplessUser
	 * @returns {void}
	 */
	const handleOtplessData = (otplessUser) => {
		// Replace the following code with your own logic
		console.log(otplessUser)
		alert(JSON.stringify(otplessUser));
		navigate('/result')
	}

	return <button id='otpless' custom="true">Get Started</button>
}
export default Home
