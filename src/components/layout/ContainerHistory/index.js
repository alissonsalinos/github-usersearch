import Menu from '../Menu';
import { ContainerHistoryWrapper } from './styles/ContainerHistoryWrapper';
import History from '../History'

export default function ContainerHistory() {

    return (
        <ContainerHistoryWrapper>
           <Menu />
           <History />
        </ContainerHistoryWrapper>
    )
}
