import React from 'react';
import ReactDOM from 'react-dom/client'


//JSX is a HTML or XML like syntax not HTMl in JS
//React Element
const greet = (<span>hello </span>);

const Title = ()=> (
<div>

<h1 id='heading'>
    {greet}
     react in jsx 🚀</h1>
</div>
);

//console.log(JSXheading);



//React Functional element
//there are different ways to do it
// 1. if we have to return a single value or in a single line
const SampleHeadingComponent = ()=>true;

// 2 . more than 1 line or basic syntax
const SampleHeadingComponent2 = ()=>{
    return <h1 className='heading'>this is a functional component</h1>;
}
// another way of doing the same

//Component Composition
const SampleHeadingComponent3= ()=>(
    <div id='container'>
        {Title()}
        <Title/>
        <Title></Title>
        {/* in the next line we can execute any js operation inside {} */}
        <h2>{100+200}</h2>
        <h1 className='heading'>this is a func component</h1>
    </div>
);

 
 




 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SampleHeadingComponent3/>);










// const parent= React.createElement("div",{id:"parent"},
// [    React.createElement("div",{id:"child"},[
//     React.createElement("h1",{},"hello!!"),
//     React.createElement("h2",{},"hii")
// ]
// ),    React.createElement("div",{id:"child2"},[
//     React.createElement("h1",{},"hello"),
//     React.createElement("h2",{},"bye")
// ]
// )]
// );

// //const heading = React.createElement("h1",{id :"heading"},"hello world!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);




