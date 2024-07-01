import React, { useState, useEffect } from 'react';
import { Container } from '../Container';
import { useAuth } from '../context/AuthContext';
import {
  deleteToDoTask,
  updateToDoTask,
  createToDoTask,
  findAllToDoTasks,
} from '../services/toDoService';
import Task from './Task';
import './styles.css';

const TaskList = () => {
  const { user } = useAuth();
  const [allTasks, setAllTasks] = useState([]);
  const [toDoTasks, setToDoTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [isNewTaskInputVisible, setIsNewTaskInputVisible] = useState(false);
  const [newTaskText, setNewTaskText] = useState('');

  async function getToDoTasks() {
    try {
      const response = await findAllToDoTasks();
      setAllTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getToDoTasks();
  }, []);

  useEffect(() => {
    if (user) {
      getToDoTasks();
    }
  }, [user]);

  useEffect(() => {
    const filteredToDoTasks = allTasks.filter((task) => !task.done);
    const filteredDoneTasks = allTasks.filter((task) => task.done);

    setToDoTasks(filteredToDoTasks);
    setDoneTasks(filteredDoneTasks);
  }, [allTasks]);

  const addTask = async (text) => {
    try {
      const newTask = await createToDoTask({ text, done: false });
      setAllTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskText('');
      getToDoTasks();
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  const handleAddTaskClick = () => {
    setIsNewTaskInputVisible(true);
  };

  const handleNewTaskInputChange = (e) => {
    setNewTaskText(e.target.value);
  };

  const handleNewTaskSubmit = () => {
    if (newTaskText.trim()) {
      addTask(newTaskText.trim());
      setNewTaskText('');
      setIsNewTaskInputVisible(false);
    }
  };

  const moveTaskToDone = async (task) => {
    try {
      const updatedTask = { ...task, done: true };
      await updateToDoTask(task._id, updatedTask);
      setAllTasks((prevTasks) =>
        prevTasks.map((t) => (t._id === task._id ? updatedTask : t)),
      );
    } catch (error) {
      console.error('Erro ao mover tarefa para concluída:', error);
    }
  };

  const moveTaskToDo = async (task) => {
    try {
      const updatedTask = { ...task, done: false };
      await updateToDoTask(task._id, updatedTask);
      setAllTasks((prevTasks) =>
        prevTasks.map((t) => (t._id === task._id ? updatedTask : t)),
      );
    } catch (error) {
      console.error('Erro ao mover tarefa para a fazer:', error);
    }
  };

  const toggleTask = async (id) => {
    try {
      const taskToToggle = allTasks.find((task) => task._id === id);

      if (!taskToToggle) {
        return { success: false, message: 'Tarefa não encontrada.' };
      }

      taskToToggle.done = !taskToToggle.done;

      return { success: true, task: taskToToggle };
    } catch (error) {
      console.error('Erro ao alternar o estado da tarefa:', error);
      return {
        success: false,
        message: 'Erro ao alternar o estado da tarefa.',
      };
    }
  };

  const clearTasks = () => {
    setAllTasks((prevTasks) => {
      const filteredTasks = prevTasks.filter((task) => !task.checked);
      return filteredTasks;
    });
  };

  const deleteTask = async (taskId) => {
    try {
      await deleteToDoTask(taskId);
      setAllTasks((prevTasks) =>
        prevTasks.filter((task) => task._id !== taskId),
      );
      getToDoTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (taskId, updatedData) => {
    try {
      const response = await updateToDoTask(taskId, updatedData);
      setAllTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === taskId ? response : task)),
      );
      getToDoTasks();
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData('taskId');
    console.log(`Task ID received: ${taskId}`);

    const task = allTasks.find((task) => task._id === taskId);

    if (task) {
      console.log(`Task found: ${task.text}`);
      if (task.done) {
        console.log('Moving task to to-do');
        await moveTaskToDo(task);
      } else {
        console.log('Moving task to done');
        await moveTaskToDone(task);
      }
    } else {
      console.log('Task not found');
    }
  };

  const handleCancelNewTask = () => {
    setNewTaskText('');
    setIsNewTaskInputVisible(false);
  };

  return (
    <div className="task-lists-wrapper">
      <div className="task-lists">
        <Container.Root borderColor="#E88D39">
          <Container.Header>
            <Container.Title>To-Do</Container.Title>
            <Container.SubTitle className="container__subtitle--orange">
              Take a breath.
            </Container.SubTitle>
            <Container.Description className="container__description--orange">
              Start doing.
            </Container.Description>
          </Container.Header>
          <Container.Content
            tasks={toDoTasks}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClearTasks={clearTasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
          >
            {isNewTaskInputVisible ? (
              <div className="new-task-input">
                <input
                  type="text"
                  value={newTaskText}
                  onChange={handleNewTaskInputChange}
                  placeholder="Enter new task"
                />
                <a
                  onClick={handleNewTaskSubmit}
                  className="task-add-link--save"
                >
                  save
                </a>
                <a
                  onClick={handleCancelNewTask}
                  className="task-add-link--cancel"
                >
                  cancel
                </a>
              </div>
            ) : (
              <div className="task-add-container">
                <input
                  type="checkbox"
                  onChange={handleAddTaskClick}
                  className="task-add-checkbox"
                />
                <label onClick={handleAddTaskClick} className="task-add-link">
                  this is a new task
                </label>
              </div>
            )}
            {toDoTasks.map((task) => (
              <Task
                key={task._id}
                id={task._id}
                text={task.text}
                checked={task.checked}
                done={task.done}
                moveTask={(fromIndex, toIndex) => {
                  const updatedTasks = [...toDoTasks];
                  const [movedTask] = updatedTasks.splice(fromIndex, 1);
                  updatedTasks.splice(toIndex, 0, movedTask);
                  setToDoTasks(updatedTasks);
                }}
                updateTask={updateTask}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                draggable
              />
            ))}
          </Container.Content>
          <Container.ClearButton onClick={clearTasks}>
            erase all
          </Container.ClearButton>
        </Container.Root>

        <Container.Root borderColor="#4AC959">
          <Container.Header>
            <Container.Title>Done</Container.Title>
            <Container.SubTitle className="container__subtitle--green">
              Congratulations!
            </Container.SubTitle>
            <Container.Description className="container__description--green">{`You have done ${doneTasks.length} tasks`}</Container.Description>
          </Container.Header>
          <Container.Content
            title="Done"
            tasks={doneTasks}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClearTasks={clearTasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
          >
            {doneTasks.map((task) => (
              <Task
                key={task._id}
                id={task._id}
                text={task.text}
                checked={task.checked}
                done={task.done}
                moveTask={(fromIndex, toIndex) => {
                  const updatedTasks = [...doneTasks];
                  const [movedTask] = updatedTasks.splice(fromIndex, 1);
                  updatedTasks.splice(toIndex, 0, movedTask);
                  setDoneTasks(updatedTasks);
                }}
                updateTask={updateTask}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                draggable
              />
            ))}
          </Container.Content>
          <Container.ClearButton onClick={clearTasks}>
            erase all
          </Container.ClearButton>
        </Container.Root>
      </div>
    </div>
  );
};

export default TaskList;
