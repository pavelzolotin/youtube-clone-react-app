import {useState, useEffect} from 'react';

import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 60%;
  background-color: ${({theme}) => theme.textSoft};
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.textSoft};
`;

const Comment = ({comment}) => {
    const [channel, setChannel] = useState({});

    useEffect(() => {
        const fetchComment = async () => {
            const res = await axios.get(`/users/find/${comment.userId}`);
            setChannel(res.data);
        };
        fetchComment();
    }, [comment.userId]);

    return (
        <Container>
            <Avatar src={channel.img} />
            <Details>
                <Name>
                    {channel.name}
                    <Date>1 day ago</Date>
                </Name>
                <Text>{comment.desc}</Text>
            </Details>
        </Container>
    );
};

export default Comment;