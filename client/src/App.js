import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
import SignIn from './pages/SignIn';
import Search from './pages/Search';

import {darkTheme, lightTheme} from './utils/Theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: ${({theme}) => theme.text};
    text-decoration: none;

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({theme}) => theme.scrollbarBgColor};
    transition: background-color .3s;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    background-color: #aaaaaa;
  }
`;

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bgBody};
  transition: background-color .3s;
`;

const Wrapper = styled.div`
  padding: 60px 90px;
`;

function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <ThemeProvider
            theme={darkMode ? darkTheme : lightTheme}
        >
            <GlobalStyle />
            <Container>
                <BrowserRouter>
                    <Sidebar
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    />
                    <Main>
                        <Navbar />
                        <Wrapper>
                            <Routes>
                                <Route path="/">
                                    <Route index element={
                                        <Home type="random" />
                                    } />
                                    <Route path="trends" element={
                                        <Home type="trend" />
                                    } />
                                    <Route path="subscriptions" element={
                                        <Home type="subscribe" />
                                    } />
                                    <Route path="search" element={
                                        <Search />
                                    } />
                                    <Route path="sign-in" element={
                                        <SignIn />
                                    } />
                                    <Route path="video">
                                        <Route path=":id" element={
                                            <Video />
                                        } />
                                    </Route>
                                </Route>
                            </Routes>
                        </Wrapper>
                    </Main>
                </BrowserRouter>
            </Container>
        </ThemeProvider>
    );
}

export default App;
