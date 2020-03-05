import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet' // incase of default export
import ClassComponents from './components/ClassComponents'
import Hello from './components/Hello'
import UseState from './components/UseState'
import Counter from './components/Counter'
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import { Destructuring } from "./components/Destructuring";
import { EventBinding } from "./components/EventBinding";
import ChildToParentComponent from "./components/ChildToParentComponent";
import RefsDemo from "./components/RefsDemo";
import StyleSheet from "./components/StyleSheet";
//Importing module css here
import style from './ModuleStylesheet.module.css'
import Form from "./components/Form";
import LifeCycleMounting from "./components/LifeCycleMounting";
import ReactFragmentDemo from "./components/ReactFragmentDemo";
import FragmentDemoTable from "./components/FragmentDemoTable";
import ParentForPureComponent from "./components/ParentForPureComponent";

//10 Nov : Finished Videos till 26, 17 done (skipping 18 & 19) start from 27
//https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3 

class App extends Component {
  render() { 
    return (
      <div className="App">
        {/* <ParentForPureComponent /> */}
        {/* <FragmentDemoTable />
        <ReactFragmentDemo /> */}
        {/* <LifeCycleMounting /> */}
        <Form />
        {/* <StyleSheet primary = {true}></StyleSheet>
        <h1 className = {style.modulePrimary}>Module css file (Works on in the parent class thus prevents from css classes conflicts)</h1> */}
        {/* <RefsDemo /> */}
        {/* <ChildToParentComponent /> */}
        {/* <EventBinding /> */}
        {/* <ClassClick></ClassClick> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <Counter /> */}
        {/* <Destructuring myName="Rashmi" heroName="Don"></Destructuring> */}
        {/* <UseState /> */}
        {/* <Greet name="Rashmi" nickName="Rashi">
          This is children element!!!
          <br />
          <button>ACTION</button>
        </Greet> */}
        {/* <Greet name="Rashmi second greet" nickName="Developer" /> */}
        {/* <ClassComponents name="Rashmi" nickName="Rashi" /> */}
        {/* <ClassComponents name="Rashmi second greet" nickName="Developer" /> */}
        {/* <Hello /> */}
      </div>
    );  
  }
}

export default App;
