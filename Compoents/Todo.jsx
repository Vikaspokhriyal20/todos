import React from 'react'
const Todo = ({ id, title, description, mongoId, complete, deleteTodos, completeTodo }) => {
    return (
        <tr>
            <th>
                {id + 1}
            </th>
            <td className={`${complete ? 'crossline':''}`}>
                {title}
            </td>
            <td className={`${complete ? 'crossline':''}`}>
                {description}
            </td>
            <td className={`${complete ? 'completed':'notcomplete'}`}>
                {complete ? "Completed" : "Pending"}
            </td>
            <td className='flex-btn'>
                <button onClick={() => deleteTodos(mongoId)} className='delete btn'>✖</button>
               {complete ? ' ': <button onClick={()=>completeTodo(mongoId)} className='done btn'>✔</button> } 
            </td>
        </tr>
    )
}

export default Todo
