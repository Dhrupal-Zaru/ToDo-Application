import React, { useState } from 'react'
import styles from './Home.module.css'
import { useAddTask } from '../features/tasks/useAddTask';
import { useUpdateTask } from '../features/tasks/useUpdateTask'
import { useDeleteTask } from '../features/tasks/useDeleteTask';
import { useTasks } from '../features/tasks/useTasks';
import { useUser } from '../features/users/useUser';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [title, setTitle] = useState('');

    const { isLoading, tasks } = useTasks();
    const { isCreating, createTask } = useAddTask();
    const { isUpdating, updateTask } = useUpdateTask();
    const { isDeleting, deleteTask } = useDeleteTask();

    const { currentUser, isLoading:LoadingUser } = useUser();
    const navigate = useNavigate();

    function handleChange(e) {
        setTitle(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        createTask(title);
        setTitle('')
    }
    // console.log(tasks)

    function handleLogout(){
        localStorage.removeItem('token')
        navigate('/login');
    }

    if (isLoading || isCreating || isDeleting || isUpdating || LoadingUser) return <p className={styles.loading}>Loading...</p>

    return (
        <>
            <div className={styles.user}>
                <h2 className={styles.userInfo}>
                    {currentUser.name}
                </h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className='app'>
                <div className={styles.home}>
                    <h1>Welcome to The ToDo Application</h1>
                    <p>Start adding ToDo's</p>
                    <div className={styles.homeBody}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input type='text' name='task' placeholder='Enter Task here..' value={title} onChange={handleChange} />
                            <button>Add Task</button>
                        </form>
                        <ul className={styles.tasks}>
                            {tasks.map((item) => {
                                return (
                                    <li key={item._id} className={styles.task}>
                                        <h2 style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.title}</h2>
                                        <div className={styles.icon}>
                                            {!item.completed && <span onClick={() => updateTask(item._id)}>✅</span>}
                                            <span onClick={() => deleteTask(item._id)}>❌</span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
