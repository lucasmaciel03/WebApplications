import {useState} from "react";

function AdminDashboard({name}){
  return(
    <h2>You are authorized to this page, {name}</h2>
  )
}

  function App() {
    const [color, setColor] = useState('white');

    // function changeColor(newColor) {
    //   if(newColor === 'white'){
    //     setColor('#ffffff');
    //   }
    //   if(newColor === 'red'){
    //     setColor('#ff0000');
    //   }
    //   if(newColor === 'green'){
    //     setColor('#00ff00');
    //   }
    //   if(newColor === 'blue'){
    //     setColor('#0000ff');
    //   }
    // }

    return (
      <div className="container" style={{
        background: color
      }}>  
      <div className="box">  {color !== 'white' && <h3>Color has Changed</h3>}
      <h1>Change the background</h1>
        <button onClick={() => {
          setColor('white')
        }}>White</button>
         <button onClick={() => {
          setColor('red')
        }}>Red</button>
         <button onClick={() => {
          setColor('green')
        }}>Green</button>
         <button onClick={() => {
          setColor('blue')
        }}>Blue</button>
      </div>
    
      </div>
    )
  }

    // function App(){
  //   const [numero, setNumero] = useState(1);
  
  //   return (
  // <div>
  //     <h1>{numero}</h1>
  //     <button  onClick ={() =>{
  //         setNumero(numero + 1)
  //   }}> +1
  //     </button>
  //   </div>
  
  //   ) 
  // }

  // Primeiro Exemplo
// function App() {
//   let isLoggedIn = false;

//   if(isLoggedIn){
//     return <AdminDashboard/>
//   }else{
//     return <LoginForm/>
//   }
//   return (
//     <div>
//       Hello World
//     </div>
//   );
// }

  // Segundo Exemplo 
// function App() {
//   let isLoggedIn = false;

//   return(
//     <div>
//       {isLoggedIn ? <AdminDashboard/> : <LoginForm/>};
//     </div>

//     // ? (IF)
//     // : (Else)
//   );
// }

  // Terceiro Exemplo
// function App() {
//   let isLoggedIn = true;

//   return(
//     <div>
//       {isLoggedIn && <AdminDashboard name="Lucas"/> };
//     </div>

//     // ? (IF)
//     // : (Else)
//   );
// }

  // // Quarto Exemplo
  // function LoginForm(){
  //   return(
  //     <div>
  //       <label htmlFor="email">Email</label>
  //       <input type="text" name="email"></input>
  //       <label htmlFor="password">Password</label>
  //       <input type="password" name="password"></input>
  //     </div>
  //   )
  // }
  



export default App;
