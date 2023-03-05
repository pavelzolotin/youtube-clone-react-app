import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

import styled from 'styled-components';
import LogoImage from '../assets/img/logo.png';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Upload from './Upload';

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 56px;
  background-color: ${({theme}) => theme.bgSidebar};
  z-index: 10;
  transition: background-color .3s;

  @media (max-width: 767px) {
    height: 95px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  padding: 5px 20px;

  @media (max-width: 767px) {
    align-items: start;
    justify-content: space-between;
  }
`;

const LogoBox = styled.div`
  @media (min-width: 767px) {
    display: none;
  }
`;

const Logo = styled.div`
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #f5f5f5;
  }
`;

const Img = styled.img`
  height: 25px;
`;

const Search = styled.div`
  position: absolute;
  width: 40%;
  left: 0;
  right: 0;
  margin: 0 auto 0 auto;

  @media (max-width: 767px) {
    width: 90%;
    margin: 40px auto 0 auto;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 15px;
  color: #b7b7b7;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  font-size: 18px;
  color: #b7b7b7;
  padding: 10px 25px;
  letter-spacing: 0.16px;
  border: 2px solid #343739;
  border-radius: 30px;
  background: transparent;
  transition: border .3s ease;

  & ~ .search__input--bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #343739;
    border-radius: 30px;
    opacity: 0;
    transition: .5s;
    z-index: -1;
  }
  
  &:focus-visible {
    outline: none;
    border: 2px solid #7e7e7e;
    transition: border .3s ease;
  }

  &:focus ~ .search__input--bg {
    transition: .5s;
    opacity: 1;
    outline: none;
  }
`;

const InputBg = styled.span`
  &:focus {
    transition: .5s;
    opacity: 1;
    outline: none;
  }
`;

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
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const UploadFileButton = styled.div`
  cursor: pointer;
`;

const SearchClose = styled.div`
  position: absolute;
  top: 15px;
  right: 55px;
  font-size: 14px;
  color: #7e7e7e;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const Navbar = () => {
    const [uploadFileOpen, setUploadFileOpen] = useState(false);
    const [query, setQuery] = useState('');
    const {currentUser} = useSelector(state => state.user);
    const navigate = useNavigate();

    const addQuery = (e) => {
        setQuery(e.target.value);
    };

    const clearQuery = () => {
        setQuery('');
    };

    return (
        <>
            <Container>
                <Wrapper>
                    <LogoBox>
                        <Link to="/">
                            <Logo>
                                <Img src={LogoImage}/>
                                NewTube
                            </Logo>
                        </Link>
                    </LogoBox>
                    <Search>
                        <Input
                            placeholder="Search"
                            onChange={addQuery}
                            value={query}
                        />
                        {
                            query.length > 0 ? (
                                <SearchClose onClick={clearQuery}>
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
                        <InputBg className="search__input--bg"/>
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
                        <Link to="sign-in">
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
    );
};

export default Navbar;