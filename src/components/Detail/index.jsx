import { Wrapper, Image, Title, PriceTag, } from './styled'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Detail = () => {;
  const [ item, setItem ] = useState();
  const { name } = useParams();

  useEffect(() => {
    if (name) {
        detailProduct(name)
    }
  }, [name]);

  const detailProduct = async (name) => {
    const response = await axios.get(`https://server.muhammadyogi.website/api/product/${name}`);
    if(response.status === 200){
        setItem(response.data)
    }
  };

  const price = (Math.round(item.price * 100) / 100).toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

	return (
		<Wrapper>
			<Image>
				<img src={`https://server.muhammadyogi.website/images/products/${item.image_url}`} alt="Gambar" width="100%" />
			</Image>
			<Title>{item.name}</Title>
			<PriceTag>{price}</PriceTag>
            <h3> {item.productInfo} </h3>
            <h3> {item.description} </h3>
		</Wrapper>
	)
}

export default Detail