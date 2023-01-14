import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import styled from 'styled-components'
import axios from 'axios'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'
import app from '../firebase'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000000a7;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 600px;
  height: 600px;
  background-color: ${({theme}) => theme.bgBody};
  color: ${({theme}) => theme.text};
  padding: 20px;
  gap: 20px;
`
const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  cursor: pointer;
`
const Title = styled.h1`
  text-align: center;
`
const Input = styled.input`
  border: 1px solid ${({theme}) => theme.dividerColor};
  color: ${({theme}) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  z-index: 999;
`
const Desc = styled.textarea`
  border: 1px solid ${({theme}) => theme.dividerColor};
  color: ${({theme}) => theme.text};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({theme}) => theme.dividerColor};
  color: ${({theme}) => theme.text};
`
const Label = styled.label`
  color: ${({theme}) => theme.text};
  font-size: 14px;
`

const Upload = ({setUploadFileOpen}) => {
    const [img, setImg] = useState(null)
    const [video, setVideo] = useState(null)
    const [imgPercentage, setImgPercentage] = useState(0)
    const [videoPercentage, setVideoPercentage] = useState(0)
    const [inputs, setInputs] = useState({})
    const [tags, setTags] = useState([])

    const navigate = useNavigate()

    const handleUpload = async(e) => {
        e.preventDefault()
        const res = await axios.post('/videos', {...inputs, tags})

        setUploadFileOpen(false)
        res.status === 200 && navigate(`/video/${res.data._id}`)
    }

    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const handleTags = (e) => {
        setTags(e.target.value.split(','))
    }

    const uploadFile = (file, urlType) => {
        const storage = getStorage(app)
        const fileName = new Date().getTime() + file.name
        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                urlType === 'imgUrl' ? setImgPercentage(Math.round(progress)) : setVideoPercentage(Math.round(progress))
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused')
                        break;
                    case 'running':
                        console.log('Upload is running')
                        break;
                    default:
                        break;
                }
            },
            (error) => {},
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs((prev) => {
                        return {...prev, [urlType]: downloadURL}
                    })
                })
            }
        )
    }

    useEffect(() => {
        video && uploadFile(video, 'videoUrl')
    }, [video])

    useEffect(() => {
        img && uploadFile(img, 'imgUrl')
    }, [img])

    return (
        <Container>
            <Wrapper>
                <Close
                    onClick={() => setUploadFileOpen(false)}
                >
                    X
                </Close>
                <Title>Upload a new video</Title>
                <Label>Video:</Label>
                {
                    videoPercentage > 0 ? (
                        `Uploading: ${videoPercentage}%`
                    ) : (
                        <Input
                            type="file"
                            accept="video/*"
                            onChange={e => setVideo(e.target.files[0])}
                        />
                    )
                }
                <Input
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                />
                <Desc
                    placeholder="Description"
                    rows={8}
                    name="description"
                    onChange={handleChange}
                />
                <Input
                    type="text"
                    placeholder="Separate the tags with commas."
                    onChange={handleTags}
                />
                <Label>Image:</Label>
                {
                    imgPercentage > 0 ? (
                        `Uploading: ${imgPercentage}%`
                    ) : (
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={e => setImg(e.target.files[0])}
                        />
                    )
                }
                <Button
                    onClick={handleUpload}
                >
                    Upload
                </Button>
            </Wrapper>
        </Container>
    )
}

export default Upload