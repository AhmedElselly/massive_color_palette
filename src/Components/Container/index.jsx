import React from 'react'
import { useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import '../../Animation.css'

const index = ({children}) => {
	const location = useLocation();
	return (
		<div>
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
		</div>
	)
}

export default index