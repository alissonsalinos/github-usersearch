import styled from 'styled-components'
import Background from '../src/components/layout/Background';
import ContainerHistory from '../src/components/layout/ContainerHistory';
import Footer from '../src/components/layout/Footer';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function History() {
  return (
  <>
      <Background />
      <ContainerHistory />
      <Footer />
  </>
  )
}