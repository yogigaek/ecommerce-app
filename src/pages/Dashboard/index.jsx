import Sidebar from './Sidebar'
import { Wrapper, Content } from './styled'
import photosImage from '../../assets/photos.png';

const Dashboard = () => {
	return (
		<Wrapper>
			<Sidebar />
			<Content>
			<img src={photosImage} alt="Photos" />
			</Content>
		</Wrapper>
	)
}

export default Dashboard