import styled from "styled-components";

export const btn = (color, bg, hoverBg, onClick, type, disabled) => {
	return styled("button")`
		  font-size: 32px;
		  color: ${color};
		  background: ${bg};
		  font-weight: bold;
		  padding: 20px 15px;
		  margin: 15px 0;
		  margin-top: 30px;
		  min-width: 85vw;

		  @media (min-width: 768px) {
		    min-width: 300px;
		    max-width: 400px;
		  }

		  :hover, :active {
		  	background: ${hoverBg}
		  }
	`;
}

