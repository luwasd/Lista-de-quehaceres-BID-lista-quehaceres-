import React, {useState} from 'react'

const IngresoTareas = (props) => {

    const { tareas, setTareas } = props;
    console.log("Desde ingreso: " + tareas)

    const handleSubmit = (e) => {
        e.preventDefault();
        setTareas([...tareas, {
            id: Math.random().toString(36).substr(2, 18),
            tarea: e.target.tarea.value,
            done: false
        }])
        e.target.tarea.value = "";
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='tarea' placeholder='Agregar tareas' />
            <input type="submit" value='Agregar' />
        </form>
    )
}

export default IngresoTareas