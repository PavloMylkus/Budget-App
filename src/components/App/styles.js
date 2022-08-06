import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body{
	padding:0;
	margin:0;
	background:${props => props.theme.background};
}
`;

export const Wrapper = styled.div`
color:${({ theme }) => theme.color};
	padding:5px;
	background:${props => props.theme.background};
`;
