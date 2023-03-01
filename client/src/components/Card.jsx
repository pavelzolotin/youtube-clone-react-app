import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import styled from 'styled-components';
import {format} from 'timeago.js';

const Container = styled.div`
  display: ${({type}) => type === 'sm' && 'flex'};
  gap: 12px;
  width: ${({type}) => type !== 'sm' && '360px'};
  margin-bottom: ${({type}) => type === 'sm' ? '12px' : '45px'};;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Image = styled.img`
  display: flex;
  flex: 1;
  width: 100%;
  height: ${({type}) => type === 'sm' ? '100px' : '200px'};
  object-fit: cover;
  background-color: #999;
  border-radius: 10px;
`;

const Details = styled.div`
  display: flex;
  flex: 1;
  margin-top: ${({type}) => type !== 'sm' && '15px'};
  gap: 12px;
`;

const ChannelImage = styled.div`
  display: ${({type}) => type === 'sm' && 'none'};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`;

const Name = styled.h2`
  font-size: 14px;
  color: ${({theme}) => theme.textSoft};
  margin: 8px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.text};
  margin: 8px 0;
`;

const Card = ({type, video}) => {
    const [channel, setChannel] = useState({});

    useEffect(() => {
        const fetchChannel = async() => {
            const res = await axios.get(`/users/find/${video.userId}`);
            setChannel(res.data);
        };
        fetchChannel();
    }, [video.userId]);

    return (
        <Link to={`/video/${video._id}`}>
            <Container type={type}>
                <Image
                    type={type}
                    src={video.imgUrl}
                />
                <Details type={type}>
                    <ChannelImage
                        type={type}
                        src={channel?.img}
                    />
                    <Texts>
                        <Title>
                            {video.title}
                        </Title>
                        <Name>
                            {channel?.name}
                        </Name>
                        <Info>
                            {video.views} views • {format(video.createdAt)}
                        </Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    );
};

export default Card;