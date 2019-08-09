import React from 'react'
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
export const PrintTheList = (props) => {
  return (
    <div>
      <List style={{ margin: 20 }}>
        {props.list.map((item, index) => (
          <li
            key={index}>{item.taskName}
            <Button variant="outlined" style={{ margin: 1 }} color="primary" id={item.taskName} onClick={() => props.editTask(item.taskName)}
            >Edit</Button>
            <Button variant="outlined" style={{ margin: 1 }} color="primary" id={item.taskName} onClick={() => props.deleteTask(item.taskName)}
            >Delete</Button>
          </li>
        ))
        }
      </List>
    </div>
  )
}
