import {useState} from 'react'
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
  border: 1px solid ${({theme}) => theme.textSoft};
  border-radius: 5px;
  background-color: transparent;
`
const Button = styled.button`
  margin-top: 12px;
  padding: 10px 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.6px;
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

const Auth = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async(e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/auth/')
        } catch {

        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <SubTitle>to continue to NewTube</SubTitle>
                <Input
                    placeholder="username"
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <Button
                    onClick={handleLogin}
                >
                    Sign In
                </Button>
                <SubTitle>or</SubTitle>
                <Input
                    placeholder="username"
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    type="email"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                />
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

export default Auth