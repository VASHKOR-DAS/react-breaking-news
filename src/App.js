import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import TopHeadline from './components/TopHeadline/TopHeadline';




function App() {
  return (
    <div>
      <Header></Header>
      <br /> <br />
      <TopHeadline></TopHeadline>
      <br /> <br />
      <News></News>
    </div>
  );
}

export default App;