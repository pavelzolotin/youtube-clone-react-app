import styled from 'styled-components'
import Comment from './Comment'

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

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar/>
                <Input placeholder="Add a comment..."/>
            </NewComment>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </Container>
    )
}

export default Comments