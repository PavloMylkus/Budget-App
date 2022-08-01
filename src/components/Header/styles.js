import styled from 'styled-components';


export const Nav = styled.nav`
	margin:15px 5px;
	
	background-color: ${({ theme }) => theme.backgroundNav};
	display: flex;
	align-items: center;
    justify-content: space-between;
	flex-wrap: wrap;
	padding:5px;
		ul {
			display: flex;
			list-style: none;
			padding: 0 5px;
			
			li {
				margin-right: 25px;
				a{
					color:${({ theme }) => theme.linkColor}
				}
			}
		}
`;

Nav.displayName = 'Nav';