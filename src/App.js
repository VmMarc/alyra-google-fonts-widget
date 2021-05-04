import "bootstrap/dist/css/bootstrap.css"
import DarkMode from "./components/DarkMode"
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

const App = () => {
  // const =[url, setUrl] = useState(`https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity`)
  return (
    <div className="App">
      <Header />
      <DarkMode>
        <Main />
      </DarkMode>
      <Footer />
    </div>
  );
}

export default App;