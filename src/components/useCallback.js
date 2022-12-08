import React, { useCallback, useState } from 'react';
import Todo from './Todo';


const UseCallback = () => {
    const [todo, setTodo] = useState([]);
    const [count, setCount] = useState(0);

    // const addTodo = () => {
    //     setTodo((todo) => [...todo, 'New Todo']);
    // }

    //Only render when todo gets update 
    const addTodo = useCallback(() => {
        setTodo((todos) => [...todos, 'New Record']);
    }, [todo]);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <>
            <section className='callback-cmp'>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <Todo todo={todo} addTodo={addTodo} />
                            <hr />
                            <h3>Count: {count} </h3>
                            <button className="btn-secondary" onClick={increment}> + </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default UseCallback;
