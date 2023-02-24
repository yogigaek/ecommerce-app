import Sidebar from './Sidebar'
import { Wrapper, Content } from './styled'

const Dashboard = () => {
	return (
		<Wrapper>
			<Sidebar />
			<Content>
				Happy Shopping &#128522;
			</Content>
		</Wrapper>
	)
}

export default Dashboard