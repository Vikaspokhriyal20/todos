'use client'
import Todo from "@/Compoents/Todo";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [formData, setFormData] = useState({
    title: '',
    description:'',
  });

  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {
    const response = await axios('/api');
    setTodoData(response.data.todos);
  }

  const deleteTodos = async (id) => {
    const response = await axios.delete('/api', {
      params: {
        mongoId:id
      }
    });
    toast.success(response.data.msg);
    fetchTodos();
  }

  const completeTodo = async (id) => {
    const response = await axios.put('/api', {}, {
      params: {
        mongoId:id
      }
    })
    toast.success(response.data.msg);
    fetchTodos();
  }

  useEffect(() => {
    fetchTodos();
  }, []);


  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form => ({...form,[name]:value}));
    console.log(formData);
  }

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    try {
      // api code
      const response = await axios.post('/api', formData);
      toast.success(response.data.msg)
      setFormData({
        title: '',
        description:'',
      })
      await fetchTodos();
    } catch (error) {
      toast.error('Error')
    }
  }

  return (
    <>
     <ToastContainer/>
        <form onSubmit={onSubmitHandle} className="flex-col container-half">
          <input value={formData.title} onChange={onChangeHandler}  type="text" name="title" placeholder="Enter Title" className="inputbox" />
          <textarea onChange={onChangeHandler} value={formData.description} name="description" id="description" className="inputbox" placeholder="Description"></textarea>
          <button type="Submit" className="addtodo"> Add Todo</button>
        </form>

        <div className="container">
          <table>
            <thead>
              <tr>
                <th>
                  ID
                </th>
                <th>
                  TITLE
                </th>
                <th>
                  DESCRIPTION
                </th>
                <th>
                  STATUS
                </th>
                <th>
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
            {todoData.map((item , index) => {
               return <Todo key={index} id={index} title={item.title} description={item.description} complete={item.isCompleted} mongoId={item._id} deleteTodos={deleteTodos} completeTodo={completeTodo}/>
             })}
            </tbody>
          </table>
        </div>
    </>
  )
}