import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${({ value }) => value < 0
		? ({ theme }) => theme.background
		: ({ theme }) => theme.backgroundNav};
    /* border: 1px solid #dbdbdb; */
    border-radius: 3px;
    padding: 5px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
Wrapper.displayName = 'TransactionWrapper'

export const TransactionDate = styled.div`
    flex-grow: 1;
`;
TransactionDate.displayName = 'TransactionDate';

export const Value = styled.div`
    flex-grow: 1;
`;
Value.displayName = 'Value'

export const Comment = styled.div`
    flex-grow: 2;
`;
Comment.displayName = 'Comment'

export const Icon = styled.span`
img{
	max-width:20px;
	margin-right:10px;
}
`;
export const DeleteBtn = styled.button`
	border-radius: 4px;
	border: 0;
	/* font-weight:300; */
	font-size:26px;
	cursor: pointer;
	transition: all .2s;
	color: ${({ theme }) => theme.color};
	background-color:${({ theme }) => theme.background};
	&:hover{
		background-color: gray;
	}
`;
Comment.displayName = 'DeleteBtn'
Icon.displayName = 'Icon';