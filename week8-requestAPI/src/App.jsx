import axios from "axios";
import { useEffect, useState} from "react";
// https://jsonplaceholder.typicode.com/posts
/**
 * 
 * GET
 * POST
 * PUT
 * DELETE
 * 
 * https://jsonplaceholder.typicode.com/posts
 * 
 * client - login page
 * cliente - POST request {username + password} -> envia para o servidor
 * servidor - recebe o pedido, e verifica 
 *
 * axios.get( url, option ?)
 * axios.post( url, { headers: { Authorization: tokenValue }param : { param1: valor1 }})
 * axios.put (url, playload, options?)
 * axios.delete ( url, playload, options?)
 * 
 */
const App = () => {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  const getData = async () => {
    const res = await axios.get(url)
 
    if (!res) return
    console.log(res)
  };

  useEffect(() => {
    getData();
  }, [])

  return (
  <div>
    <h1> API Requests aula </h1>
    {posts.map((item) => (
      <p key={item.id}>{item.body}</p>
    ))}
    <button onClick ={() => {
      getData();
    }}> fetch data</button>
  </div>
  );
};

export default App;
