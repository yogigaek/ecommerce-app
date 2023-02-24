import { Wrapper, Title, Caption, Button } from './styled'

const Guest = () => {
	return (
		<Wrapper>
			<Title>Market Place</Title>
			<Caption>You've to sign in first before make any order</Caption>
			<Button to='/auth/signin'>LOGIN</Button>	
		</Wrapper>
	)
}

export default Guest