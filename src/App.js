import {useState} from 'react'
import styled, {ThemeProvider} from 'styled-components'

import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

import {darkTheme, lightTheme} from './utils/Theme'

const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bgBody};
  transition: background-color .3s ease;
`
const Wrapper = styled.div``

function App() {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <ThemeProvider
            theme={darkMode ? darkTheme : lightTheme}
        >
            <Container>
                <Sidebar
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />
                <Main>
                    <Navbar/>
                    <Wrapper></Wrapper>
                </Main>
            </Container>
        </ThemeProvider>
    )
}

export default App
