import styled from 'styled-components'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 56px;
  background-color: ${({theme}) => theme.bgSidebar};
  transition: background-color .3s;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  padding: 0 20px;
`
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 40%;
  left: 0;
  right: 0;
  margin: auto;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`
const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.text};
  cursor: pointer;
`
const Input = styled.input`
  width: 100%;
  color: ${({theme}) => theme.text};
  font-size: 16px;
  border: none;
  background-color: transparent;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin: 15px 0 15px 0;
  cursor: pointer;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search"/>
                    <SearchIcon>
                        <SearchOutlinedIcon/>
                    </SearchIcon>
                </Search>
                <Button>
                    <AccountCircleOutlinedIcon/>
                    SIGN IN
                </Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar