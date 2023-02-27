import { sumPrice } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Container, Total, Button } from './styled'

const Counter = ({cart}) => {	
	const navigate = useNavigate();	
	const subtotal = (Math.round(sumPrice(cart) * 100) / 100).toFixed(2);
	
	const formatRupiah = value => {
	  return `Rp${new Intl.NumberFormat('id-ID', {minimumFractionDigits: 2}).format(value)}`;
	}
	
	return (
	  <Wrapper>
		<Container>
		  <Total>Subtotal</Total>
		  <Total>{formatRupiah(subtotal)}</Total>
		</Container>
		{ cart.length > 0 
		  ? <Button onClick={_ => navigate('/checkout')}>Checkout</Button>
		  : <Button disabled>Go Mart</Button>
		}
	  </Wrapper>
	)
}

export default Counter