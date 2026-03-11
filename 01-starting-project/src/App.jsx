import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');
  const [num, setNum] = useState(0);

  const [greet, setGreet] = useState("Welcome, Guest");

  const [isVisible, setIsVisible] = useState(true);

  // const [userName, setUserName] = useState(null);

  // function handleSelect(name){
  //   setUserName(name)
  // }

  function handleVisiblity(){
    setIsVisible((prev) => !prev);
  }
  function handleGreet(){
    // let newGreet = [...greet]
    // newGreet = "Welcome, User";
    // setGreet(newGreet)
    setGreet("Welcome, User")
  }

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
    //console.log(selectedButton);
  }  

  function increase (){
    setNum(num+1)
  }

  function decrease (){
    setNum(num-1)
  }
  
  function increaseByFive (){
    setNum(num+5)
  }
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcept
            title = {CORE_CONCEPTS[0].title}
            description = {CORE_CONCEPTS[0].description}
            image = {CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect ={()=> handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect ={()=> handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect ={()=> handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect ={()=> handleSelect('state')}>State</TabButton>
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
        <section>
          <h2>{num}</h2>
          <h2>{num}</h2>
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
          <button onClick={increaseByFive}>Increase by 5</button>
        </section>
        <section>
          <h1>{greet}</h1>
          <button onClick={handleGreet}>Change</button>
        </section>
        <section>
          <button onClick = { () => setIsVisible(!isVisible)}>Toggle Secret</button>
          {isVisible && <p>The secret code is 1234!</p>}
        </section>
        {/* <section>
         
          <button onClick={() => handleSelect('Max')}>Pass MAX</button>
          <button onClick={() => handleSelect('Anna')}>Pass ANNA</button>
          <button onClick={() => handleSelect('Tejas')}>Pass TEJAS</button> 

          <h3>Selected: {userName}</h3>
        </section> */}
      </main>
    </div>
  );
}

export default App;
