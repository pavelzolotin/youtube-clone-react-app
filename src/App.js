import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Video from './pages/Video'
import AuthN from './pages/AuthN'

import {darkTheme, lightTheme} from './utils/Theme'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`
const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bgBody};
  transition: background-color .3s;
`
const Wrapper = styled.div`
  padding: 25px 85px;
`

function App() {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <ThemeProvider
            theme={darkMode ? darkTheme : lightTheme}
        >
            <GlobalStyle/>
            <Container>
                <BrowserRouter>
                    <Sidebar
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
                    <Main>
                        <Navbar/>
                        <Wrapper>
                            <Routes>
                                <Route path="/">
                                    <Route index element={<Home/>}/>
                                    <Route path="authN" element={<AuthN/>}/>
                                    <Route path="video">
                                        <Route path=":id" element={<Video/>}/>
                                    </Route>
                                </Route>
                            </Routes>
                        </Wrapper>
                    </Main>
                </BrowserRouter>
            </Container>
        </ThemeProvider>
    )
}

export default App
