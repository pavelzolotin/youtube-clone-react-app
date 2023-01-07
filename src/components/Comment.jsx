import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 60%;
  background-color: ${({theme}) => theme.textSoft};
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Name = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.textSoft};
  margin-left: 5px;
`
const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.textSoft};
`

const Comment = () => {
    return (
        <Container>
            <Avatar/>
            <Details>
                <Name>John Doe
                    <Date>1 day ago</Date>
                </Name>
                <Text>Lorem ipsum dolor sit amet consectetur</Text>
            </Details>
        </Container>
    )
}

export default Comment