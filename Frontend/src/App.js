// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';


function App() {
  // function greet()
  // {
  //   let namelist=["kedar","raj","asmita","ramarao"];
  //   let rnd =Math.floor(Math.random()* namelist.length);
  //   return namelist[rnd];
  // }
  // let person={
  //   firstname:"shaik mohammed ",
  //   lastname:"saifuddin sumair"
  // };
  return (
    <div className="App">
      <Header title ="ToDo List"/>
      <Content/>
      <Footer/>
       {/* <h1 style={{backgroundColor:"Blue",color:"red"}}>
         working on react
      </h1>
       <h2>Good Morning {greet()}</h2>
       <h3>Today : {" "+ new Date()}</h3>
       <h3>
        My Details : {person.firstname + " " + person.lastname }
       </h3> */}
    </div>
);
}

export default App;
