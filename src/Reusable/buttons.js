import styled from "styled-components";

export const btn = (color, bg, hoverBg, radius) => {
	return styled("button")`
		  font-size: 32px;
		  color: ${color};
		  background: ${bg};
		  font-weight: bold;
		  padding: 20px 15px;
		  margin: 15px 0;
		  cursor: pointer;
		
		  min-width: 85vw;
		  border: none;
		  border-radius: ${radius};

		  @media (min-width: 768px) {
		    min-width: 300px;
		    max-width: 400px;
		  }

		  :hover, :active {
		  	background: ${hoverBg};
		  }

		  :first-child {
		  	  margin-top: 30px;
		  }
	`;
}

