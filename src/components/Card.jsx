import {Link} from 'react-router-dom'

import styled from 'styled-components'

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`
const Image = styled.img`
  width: 100%;
  height: 200px;
  background-color: #999;
`
const Details = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 12px;
`
const ChannelImage = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #999;
`
const Texts = styled.div``
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`
const Name = styled.h2`
  font-size: 14px;
  color: ${({theme}) => theme.textSoft};
  margin: 8px 0;
`
const Info = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.text};
  margin: 8px 0;
`

const Card = () => {
    return (
        <Link to="/video/test" style={{textDecoration:'none'}}>
            <Container>
                <Image/>
                <Details>
                    <ChannelImage/>
                    <Texts>
                        <Title>Title</Title>
                        <Name>Name</Name>
                        <Info>500,000 views 1 day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}

export default Card