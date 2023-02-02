import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import axios from 'axios';
import styled from 'styled-components';
import {format} from 'timeago.js';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';

import Recommendation from '../components/Recommendation';
import Comments from '../components/Comments';
import {fetchSuccess, like, dislike} from '../redux/videoSlice';
import {subscription} from '../redux/userSlice';

const Container = styled.div`
  display: flex;
  gap: 24px;
`
const VideoWrapper = styled.div``

const Content = styled.div`
  flex: 5;
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

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`

const Video = () => {
    const {currentUser} = useSelector(state => state.user);
    const {currentVideo} = useSelector(state => state.video);
    const dispatch = useDispatch();

    const path = useLocation().pathname.split('/')[2];

    const [channel, setChannel] = useState({});

    useEffect(() => {
        const fetchData = async() => {
            try {
                const videoRes = await axios.get(`/videos/find/${path}`);
                const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`);
                setChannel(channelRes.data);
                dispatch(fetchSuccess(videoRes.data));
            } catch (err) {}
        }
        fetchData();
    }, [path, dispatch]);

    const handleLike = async() => {
        await axios.put(`/users/like/${currentVideo._id}`);
        dispatch(like(currentUser._id));
    }

    const handleDislike = async() => {
        await axios.put(`/users/dislike/${currentVideo._id}`);
        dispatch(dislike(currentUser._id));
    }

    const handleSubscribe = async() => {
        currentUser.subscribedUsers.includes(channel._id)
            ? await axios.put(`/users/unsubscribe/${channel._id}`)
            : await axios.put(`/users/subscribe/${channel._id}`);
        dispatch(subscription(channel._id));
    }

    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <VideoFrame
                        src={currentVideo?.videoUrl}
                        controls
                    />
                </VideoWrapper>
                <Title>
                    {currentVideo?.title}
                </Title>
                <Details>
                    <Info>
                        {currentVideo?.views} views • {format(currentVideo?.createdAt)}
                    </Info>
                    <Buttons>
                        <Button
                            onClick={handleLike}
                        >
                            {
                                currentVideo.likes?.includes(currentUser?._id) ? (
                                    <ThumbUpIcon/>
                                ) : (
                                    <ThumbUpOutlinedIcon/>
                                )
                            }{''}
                            {currentVideo.likes?.length}
                        </Button>
                        <Button
                            onClick={handleDislike}
                        >
                            {
                                currentVideo.dislikes?.includes(currentUser?._id) ? (
                                    <ThumbDownIcon/>
                                ) : (
                                    <ThumbDownOffAltOutlinedIcon/>
                                )
                            }{''}
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
                        <Image
                            src={channel?.img}
                        />
                        <ChannelDetail>
                            <ChannelName>{channel?.name}</ChannelName>
                            <ChannelCounter>{channel?.subscribers} subscribers</ChannelCounter>
                            <Description>
                                {currentVideo?.desc}
                            </Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe
                        onClick={handleSubscribe}
                    >
                        {
                            currentUser.subscribedUsers?.includes(channel?._id)
                                ? 'Subscribed'
                                : 'Subscribe'
                        }
                    </Subscribe>
                </Channel>
                <SectionDivider/>
                <Comments
                    videoId={currentVideo?._id}
                />
            </Content>
            <Recommendation
                tags={currentVideo?.tags}
            />
        </Container>
    );
}

export default Video;