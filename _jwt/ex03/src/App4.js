import React, {createContext, useContext, useState} from 'react';

const MyContext = createContext();


function MyComponent() {
    return (
        <>
            <h1>MyComponent</h1>
            <MyComponent01 />
            <MyComponent02 />
        </>
    )
}

function MyComponent01() {
    const {setData} = useContext(MyContext);

    return (
        <>
            <h3>MyComponent01</h3>
            <button onClick={() => setData('Hello World')}>set data</button>
        </>
    )
}

function MyComponent02() {
    const {data} = useContext(MyContext);

    return (
        <>
            <h3>MyComponent02</h3>
            <dl>
                <dt>data</dt>
                <dd>{data}</dd>
            </dl>
        </>
    )
}

function App3(props) {
    const dataState = useState("");

    return (
        <MyContext.Provider value={{data: dataState[0], setData: dataState[1]}}>
            <MyComponent />
        </MyContext.Provider>
    );
}

export default App3;