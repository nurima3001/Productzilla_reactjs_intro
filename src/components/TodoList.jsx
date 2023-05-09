import React, { Component } from 'react';

export default class TodoList extends Component {
    state = {
        tasks: [
            { id:1, name: 'Mengerjakan Post Test', completed: false},
            { id:2, name: 'Mengerjakan Pre Test', completed: true},
            { id:3, name: 'Menghadiri Bootcamp PZ', completed: false}
        ]
    };

    handleTaskClick = (id) => {
        const tasks = [...this.state.tasks];
        const taskIndex = tasks.findIndex(task => task.id === id);
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        this.setState({ tasks });
    };
  
    render() {
        const tasks = this.state.tasks.map(task => (
            <li key={task.id} onClick={() => this.handleTaskClick(task.id)}>
                {task.name} - {task.completed ? 'Selesai' : 'Belum Selesai'}
            </li>
        ));

        return (
            <div>
                <ul>
                    {tasks}
                </ul>
            </div>
        );
    }
}



