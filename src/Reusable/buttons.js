import styled from "styled-components";

export const btn = (color, bg) => {
	return styled("button")`
		  font-size: 32px;
		  color: ${color};
		  background: ${bg};
		  font-weight: bold;
		  padding: 20px 15px;
		  margin: 15px;
		  margin-top: 30px;
		  min-width: 85vw;

		  @media (min-width: 768px) {
		    min-width: 300px;
		    max-width: 400px;
		  }
	`;
}

