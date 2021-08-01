import React from "react"
import Fade from 'react-reveal/Fade';
const Project = () => {
  return(
    <div>
     
    	<div className="project project1">
		
				<div className="details">
				<Fade left cascade>
					<h3>Oracle Manufacturing</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						At, aperiam.
					</p>
				</Fade >
				</div>
				<div className="img-contanier">
				<Fade left cascade>
					<img src="https://images.unsplash.com/photo-1619314367032-b6f1e670383f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
				</Fade>
				</div>
			</div>
   
    </div>
  )
}
export default Project
