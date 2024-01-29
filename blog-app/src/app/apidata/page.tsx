


const gettodo=async () => {

    const    response =await fetch("https://dummyjson.com/todos");
    const data =await response.json();
    return data.todos;
    // console.log(data.todos);
}





export default async function   Apidata() {


const todos=await gettodo();


    

   

  return (
    <div>
  <center>API Data </center>

  

  
      { todos.map((item:any)=> <div key={item.id}>
        <h1>
        {item.id} -{ item.todo}
        </h1>
        </div>)}

    </div>
  )
}
