import React from 'react';
import Card, {CardVariant} from "./components/Card";

function App() {
  return (
    <div className="App">
        <Card onclick={(num) => console.log('void', num)} variant={CardVariant.primery} width={'200px'} height={'200px'} >
            <button>click</button>
            <div>qwerty</div>
        </Card>
    </div>
  );
}

export default App;
