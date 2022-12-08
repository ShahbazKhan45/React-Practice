import React,{memo} from 'react';

const Todo = ({ todo, addTodo }) => {
    console.log("Todo Render")
    return (
        <>
            <section className='todo-cmp'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 my-5">
                            <h1>UseCallback Example</h1>
                            {todo.map((data, index) => {
                                return <p key={index}>{data} {index + 1}</p>
                            })}
                            <button className="btn-secondary" onClick={addTodo}> Add Todo </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default memo(Todo);
