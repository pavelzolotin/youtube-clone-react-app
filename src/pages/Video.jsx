import styled from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined'
//import ThumbDownIcon from '@mui/icons-material/ThumbDown'
//import ThumbUpIcon from '@mui/icons-material/ThumbUp'

import Comments from '../components/Comments'
import Card from '../components/Card'

const Container = styled.div`
  display: flex;
  gap: 24px;
`
const VideoWrapper = styled.div``

const Content = styled.div`
  flex: 5;
`
const Recommendation = styled.div`
  flex: 2;
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin: 20px 0 10px 0;
  color: ${({theme}) => theme.text};
`
const Info = styled.span`
  color: ${({theme}) => theme.textSoft};
`
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme}) => theme.text};
`
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`
const SectionDivider = styled.hr`
  margin: 20px;
  border: 1px solid ${({theme}) => theme.textSoft};
`
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
`
const ChannelName = styled.span`
  font-weight: 500;
`
const ChannelCounter = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 5px 0 20px 0;
  color: ${({theme}) => theme.textSoft};
  font-size: 12px;
`
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 60%;
  background-color: ${({theme}) => theme.textSoft};
`
const Description = styled.p`
  font-size: 14px;
`
const Subscribe = styled.button`
  height: max-content;
  padding: 10px;
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
`

const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe
                        width="100%"
                        height="720px"
                        src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                        title="NewTube Video Player"
                        frameBorder="0"
                        allow="accelerometer: autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </VideoWrapper>
                <Title>Title</Title>
                <Details>
                    <Info>7,948,154 views Jun 22, 2022</Info>
                    <Buttons>
                        <Button>
                            <ThumbUpOutlinedIcon/>
                            123
                        </Button>
                        <Button>
                            <ThumbDownOffAltOutlinedIcon/>
                            Dislike
                        </Button>
                        <Button>
                            <ReplyOutlinedIcon/>
                            Share
                        </Button>
                        <Button>
                            <AddTaskOutlinedIcon/>
                            Save
                        </Button>
                    </Buttons>
                </Details>
                <SectionDivider/>
                <Channel>
                    <ChannelInfo>
                        <Image/>
                        <ChannelDetail>
                            <ChannelName>New Channel</ChannelName>
                            <ChannelCounter>2m subscribes</ChannelCounter>
                            <Description>
                                Lorem ipsum dolor sit amet consectetur
                            </Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>Subscribe</Subscribe>
                </Channel>
                <SectionDivider/>
                <Comments/>
            </Content>
            <Recommendation>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
            </Recommendation>
        </Container>
    )
}

export default Video