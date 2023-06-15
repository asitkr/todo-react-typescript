import React, { FC } from 'react';
import { ITask } from '../Interfaces';

interface Props {
    task?: ITask;
    completeTask(taskNameToDelete: any): void;
}

const TodoTask: FC <Props> = ({ task, completeTask }) => {
    return (
        <div className='task'>
            <div className='content'>
                <span>{task?.taskName}</span> &nbsp;
                <span>{task?.deadLine}</span>
            </div>
            <button onClick={() => completeTask(task?.taskName)}>X</button>
        </div>
    )
}

export default TodoTask;