import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({theme}) => theme.text};
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 50px;
  gap: 10px;
  background-color: ${({theme}) => theme.bgBody};
  border: 1px solid ${({theme}) => theme.dividerColor};
  border-radius: 5px;
`
const Title = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
`
const SubTitle = styled.h2`
  margin: 8px 0 8px 0;
  font-size: 20px;
  font-weight: 300;
`
const Input = styled.input`
  width: 100%;
  padding: 10px;
  color: ${({theme}) => theme.text};
  border: 1px solid ${({theme}) => theme.text};
  border-radius: 5px;
  background-color: transparent;
`
const Button = styled.button`
  margin-top: 12px;
  padding: 10px 20px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  color: ${({theme}) => theme.text};
  background-color: ${({theme}) => theme.dividerColor};
  cursor: pointer;
`
const Info = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  color: ${({theme}) => theme.text};
`
const Links = styled.div`
  margin-left: 50px;
`
const Link = styled.span`
  margin-left: 30px;
`

const AuthN = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <SubTitle>to continue to NewTube</SubTitle>
                <Input placeholder="username"/>
                <Input type="password" placeholder="password"/>
                <Button>Sign In</Button>
                <SubTitle>or</SubTitle>
                <Input placeholder="username"/>
                <Input type="email" placeholder="email"/>
                <Button>Sign Up</Button>
            </Wrapper>
            <Info>
                English(US)
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </Info>
        </Container>
    )
}

export default AuthN