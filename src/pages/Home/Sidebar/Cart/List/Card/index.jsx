import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../../../../../app/features/Cart/actions';
import { Trash } from '@styled-icons/boxicons-regular'
import { Wrapper, Container, Image, Title, Counter, TrashButton, Num, Button, Price } from './styled'

const Card = ({ item }) => {
	const dispatch = useDispatch();

	const handlePlus = item => {
		dispatch(addItem(item));
	}

	const handleMin = item => {
		dispatch(removeItem(item));
	}

	return (
		<Wrapper>
			<Container>
				<Image>
					<img src={`https://api.muhammadyogi.website/images/products/${item.image_url}`} alt="Gambar" width="100%" />
				</Image>
				<Title>{item.name}</Title>
			</Container>
			<Counter>
				{
					item.qty === 1
						? <TrashButton onClick={() => handleMin(item)}><Trash size='24' /></TrashButton>
						: <Button onClick={() => handleMin(item)}>-</Button>
				}
				<Num>{item.qty}</Num>
				<Button onClick={() => handlePlus(item)}>+</Button>
			</Counter>
			<Price>${(Math.round((item.price * item.qty) * 100) / 100).toFixed(2)}</Price>
		</Wrapper>
	)
}

export default Card