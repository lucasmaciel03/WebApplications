import {useState, useEffect} from "react";

const alunosAUX = [
  {
    numero:123,
    username: 'asd1',
    nome: "João"
  },
  {
      numero: 124,
      username: 'asd2',
      nome: "Lucas"
  }
];
//  
// },{
//   numero: 124,
//   username: 'asd2',
//   nome
// }


function App() {
  // const [name, setName] = useState("Lucas from state");
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log(count)
  // },[])

  // function Example1(props) {
  //   // useEffect(() => {
  //   //   console.log(count)
  //   // },[])
  //   return (
  //     <h1>
  //       {props.name}
  //     </h1>
  //   );
  // }()
  const [alunos,setList] = useState(alunosAUX);

  return (
    <div>
      {alunos.map((alunos, INDEX) => (
        <h5 key={alunos.numero} id={alunos.numero}>
          {alunos.nome + "com username: " + alunos.username}
        </h5>
      ))}
      <button onClick={() => {
        const newList = [...alunos];
        newList.push({
          numero: 166,
          username: "NEWALUNO",
          nome: "NEW ALUNO NOME"
        })
        setList(newList);
      }}>
        Add Item to List
      </button>
      {/* <h2>Teste</h2>
      <Example1 name={name}></Example1>
      <br></br>
      <button
      onClick={() => {
        setName("counter -" + count)
      }}>Click Me</button>

      <button
      onClick={() => {
        console.log(count)
        setCount(count + 1)
      }}>Add +1 to Counter</button> */}
    </div>
  );
}

export default App;
