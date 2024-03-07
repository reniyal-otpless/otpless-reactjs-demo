import { useEffect } from 'react'
import { initOTPless } from '../utils/initOtpless'
import { useNavigate } from 'react-router-dom'

function Home() {
	// Note: We are adding 'ex' parameter to open login page automatically after redirection in between of authentication process
	const navigate = useNavigate()

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search)
		const paramsValue = urlParams.get('ex')
		if (paramsValue) initOTPless(handleUserData)
	}, [])

	/** handleUserData - otpless callback function
	 * @description
	 * This function is called after authentication is done by otpless-sdk.
	 * Use this function to further process the otplessUser object, navigate to next page or perform any other action based on your requirement.
	 * @param {Object} otplessUser
	 * @returns {void}
	 */
	const handleUserData = (otplessUser) => {
		removeQueryParam('ex')
		// Replace the following code with your own logic
		console.log(otplessUser)
		alert(JSON.stringify(otplessUser));
		navigate('/result')
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
		initOTPless(handleUserData)
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

	return (
		<main>
			<div className='modal-container' id='modalContainer' onClick={closeModal}>
				<div id='otpless-login-page'></div>
			</div>
			<button onClick={openModal}>Get Started</button>
		</main>
	)
}
export default Home
