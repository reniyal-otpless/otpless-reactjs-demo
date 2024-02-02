import { useEffect } from 'react'
import { initOTPless } from '../utils/initOtpless'
import { useNavigate } from 'react-router-dom'

function Home() {
	// Note: We are adding 'ex' parameter to open login page automatically after redirection in between of authentication process
	const navigate = useNavigate()

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search)
		const paramsValue = urlParams.get('ex')
		if (paramsValue) initOTPless(callback)
	}, [])

	const callback = (otplessUser) => {
		removeQueryParam('ex')
		localStorage.setItem('token', otplessUser.token)
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
