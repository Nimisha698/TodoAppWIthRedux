import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
export const EnterTask = (props) => {
    return (<div>
        <h1> ToDo App</h1>

        <TextField
            id="taskname"
            style={{ margin: 8 }}
            placeholder="Enter task name"

            variant="outlined"

        />
        <Button variant="contained" style={{ margin: 20 }} color="secondary" onClick={() => { props.addTaskToList(); console.log("hi") }} l={10}>Add Task
      </Button>
    </div>
    )
}