import {Link} from 'react-router-dom'

import styled from 'styled-components'

import LogoImage from '../img/logo.png'
import HomeIcon from '@mui/icons-material/Home'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined'
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined'

const Container = styled.div`
  flex: 1;
  position: sticky;
  top: 0;
  height: 100vh;
  font-size: 14px;
  background-color: ${({theme}) => theme.bgSidebar};
  color: ${({theme}) => theme.text};
  transition: all .3s;
`
const Wrapper = styled.div`
  padding: 18px 26px
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 25px;
`
const Img = styled.img`
  height: 25px;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 7px 0 7px 10px;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.dividerColor};
  }
`
const SectionDivider = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({theme}) => theme.dividerColor};
  transition: border .3s ease;
`
const Login = styled.div``

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
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`

const Sidebar = ({darkMode, setDarkMode}) => {
    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                    <Logo>
                        <Img src={LogoImage}/>
                        NewTube
                    </Logo>
                </Link>
                <Item>
                    <HomeIcon/>
                    Home
                </Item>
                <Item>
                    <ExploreOutlinedIcon/>
                    Explore
                </Item>
                <Item>
                    <SubscriptionsOutlinedIcon/>
                    Subscriptions
                </Item>
                <SectionDivider/>
                <Item>
                    <VideoLibraryOutlinedIcon/>
                    Library
                </Item>
                <Item>
                    <HistoryOutlinedIcon/>
                    History
                </Item>
                <SectionDivider/>
                <Login>
                    Sign in to like videos, comment and subscribe.
                    <Link to="authN" style={{textDecoration: 'none'}}>
                        <Button>
                            <AccountCircleOutlinedIcon/>
                            SIGN IN
                        </Button>
                    </Link>
                </Login>
                <SectionDivider/>
                <Title>Best of NewTube</Title>
                <Item>
                    <LibraryMusicOutlinedIcon/>
                    Music
                </Item>
                <Item>
                    <SportsBasketballOutlinedIcon/>
                    Sports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon/>
                    Gaming
                </Item>
                <Item>
                    <MovieOutlinedIcon/>
                    Movies
                </Item>
                <Item>
                    <ArticleOutlinedIcon/>
                    News
                </Item>
                <Item>
                    <LiveTvOutlinedIcon/>
                    Live
                </Item>
                <SectionDivider/>
                <Item>
                    <SettingsOutlinedIcon/>
                    Settings
                </Item>
                <Item>
                    <FlagOutlinedIcon/>
                    Report
                </Item>
                <Item>
                    <HelpOutlineOutlinedIcon/>
                    Help
                </Item>
                <Item
                    onClick={() => setDarkMode(!darkMode)}
                >
                    <SettingsBrightnessOutlinedIcon/>
                    {darkMode ? 'Dark Theme' : 'Light Theme'}
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Sidebar