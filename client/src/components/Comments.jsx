import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import axios from 'axios';
import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div``
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 60%;
  background-color: ${({theme}) => theme.textSoft};
`
const Input = styled.input`
  width: 12%;
  padding: 5px;
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.textSoft};
  color: ${({theme}) => theme.textSoft};
  background-color: transparent;
  outline: none;
`

const Comments = ({videoId}) => {
    const {currentUser} = useSelector(state => state.user);

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async() => {
            try {
                const res = await axios.get(`/comments/${videoId}`);
                setComments(res.data);
            } catch (err) {}
        }
        fetchComments();
    }, [videoId])

    return (
        <Container>
            <NewComment>
                <Avatar
                    src={currentUser.img}
                />
                <Input placeholder="Add a comment..."/>
            </NewComment>
            {
                comments.map(comment => (
                    <Comment
                        key={comment._id}
                        comment={comment}
                    />
                ))
            }
        </Container>
    );
}

export default Comments;