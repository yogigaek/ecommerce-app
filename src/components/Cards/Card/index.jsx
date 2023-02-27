import { useSelector } from 'react-redux';
import { Wrapper, Image, Title, PriceTag } from './styled'

const Card = ({item, onAddToCart}) => {
  const auth = useSelector(state => state.auth);

  const price = (Math.round(item.price * 100) / 100).toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

	return (
		<Wrapper onClick={() => auth.user ? onAddToCart() : null }>
			<Image>
				<img src={`https://server.muhammadyogi.website/images/products/${item.image_url}`} alt="Gambar" width="100%" />
			</Image>
			<Title>{item.name}</Title>
			<PriceTag>{price}</PriceTag>
		</Wrapper>
	)
}

export default Card