import {useState} from 'react'
import {useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'

import styled from 'styled-components'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import Upload from './Upload'

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

  &:focus-visible {
    outline: none;
  }
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
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`
const UploadFileButton = styled.div`
  cursor: pointer;
`
const SearchClose = styled.div`
  display: flex;
  margin-right: 15px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
  cursor: pointer;
`

const Navbar = () => {
    const [uploadFileOpen, setUploadFileOpen] = useState(false)
    const [query, setQuery] = useState('')
    const {currentUser} = useSelector(state => state.user)
    const navigate = useNavigate()

    const addQuery = (e) => {
        setQuery(e.target.value)
    }

    const clearQuery = () => {
        setQuery('')
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <Search>
                        <Input
                            placeholder="Search"
                            onChange={addQuery}
                            value={query}
                        />
                        {
                            query.length > 0 ? (
                                <SearchClose
                                    onClick={clearQuery}
                                >
                                    <span>X</span>
                                </SearchClose>
                            ) : (
                                ''
                            )
                        }
                        <SearchIcon>
                            <SearchOutlinedIcon
                                onClick={() => navigate(`/search?q=${query}`)}
                            />
                        </SearchIcon>
                    </Search>
                    {currentUser ? (
                        <User>
                            <UploadFileButton>
                                <VideoCallOutlinedIcon
                                    onClick={() => setUploadFileOpen(true)}
                                />
                            </UploadFileButton>
                            <Avatar
                                src={currentUser.img}
                            />
                            {currentUser.name}
                        </User>
                    ) : (
                        <Link to="sign-in" style={{textDecoration: 'none'}}>
                            <Button>
                                <AccountCircleOutlinedIcon/>
                                SIGN IN
                            </Button>
                        </Link>
                    )
                    }
                </Wrapper>
            </Container>
            {
                uploadFileOpen &&
                <Upload
                    setUploadFileOpen={setUploadFileOpen}
                />
            }
        </>
    )
}

export default Navbar