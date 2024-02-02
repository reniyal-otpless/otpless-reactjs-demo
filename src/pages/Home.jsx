import { useEffect } from 'react'
import { initOTPless } from '../utils/initOtpless'
import { useNavigate } from 'react-router-dom'

function Home() {
	useEffect(() => initOTPless(handleOtplessData), [])
	const navigate = useNavigate()
	const handleOtplessData = (otplessUser) => {
		localStorage.setItem('token', otplessUser.token)
		navigate('/result')
	}

	return <div id='otpless-login-page'></div>
}
export default Home
