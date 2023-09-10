import React from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import '../../Animation.css'

const Container = ({ children }) => {
	const location = useLocation()
	const currentOutlet = useOutlet()
	return (
		<TransitionGroup>
			<CSSTransition
				key={location.pathname}
				timeout={500}
				classNames="page"
				unmountOnExit
			>
				<div className="page">
					{children}
				</div>
			</CSSTransition>
		</TransitionGroup>
	)
}

export default Container