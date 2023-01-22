import './App.css';
import Hello from './components/hello';
import Machine from "./components/machine";
import Messages from "./components/messages";
import HelloFrom from "./components/hello-from";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

      <div>
          <Hello name={'Rahul'}
                 age={32}
                 country={['India','Netherlands']}
                 isFunny={true}
                 bangs={4}
                 img={'https://images.unsplash.com/photo-1674304985678-f1ab79f726c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
                 />

          <p>-----------------------------------------------------------------------</p>

          <Machine s1={'🍇'} s2={'🍉'} s3={'🍊'} />
          <Machine s1={'🍇'} s2={'🍇'} s3={'🍇'} />
          <Machine s1={'🍇'} s2={'🍉'} s3={'🍊'} />

          <p>-----------------------------------------------------------------------</p>

          <Messages messages={[{id:1, message:'Today is Sunday'},{id:2, message:'Tomorrow is Monday'}]}/>

          <p>-----------------------------------------------------------------------</p>

          <HelloFrom to={'Himanshu'}/>

          <p>-----------------------------------------------------------------------</p>
      </div>
  );
}

export default App;
