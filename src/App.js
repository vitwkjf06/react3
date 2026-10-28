import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Hello from "./components/Hello";
import Form from './components/Form';
import Range from './components/Range';
import Posts from "./components/Posts";

function App()
{
    let posts =
    [
            { id: '1', title: 'Procedure C++', description: 'Процедурное программирование на языке С++' },
            { id: '2', title: 'OOP C++', description: 'Объектно-ориентированное программирование на языке С++' },
            { id: '3', title: 'Windows Desktop', description: 'Разработка настольных приложений для Windows' },
    ];
  return (
    <div className="App">
      {/* <Header/> */}
      <Hello />
      <Form />
      <Range />
      < Posts posts={posts} />
    </div>
  );
}

export default App;
