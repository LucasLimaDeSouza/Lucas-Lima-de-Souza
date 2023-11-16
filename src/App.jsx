
import { ThemeProvider } from "styled-components"

import theme from './theme/theme'
import { Header } from "./Components/Header"
import { Container } from "./Global/style"
import { About } from "./Components/About"
import { Contact } from "./Components/Contact"
import { Jobs } from "./Components/Jobs"

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import GlobalStyles from "./Global/GlobalStyle"

function App() {

  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
              <Header/>
            <Container>

              <Routes>
                <Route path="/contatos/*" element={<Contact />} />
                <Route path="/" element={<About />} />
                <Route path="/portifolio/*" element={<Jobs />} />
              </Routes>
              
            </Container>
          </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
