import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

function TodoList({item, id, onRemove}) {

    return (
        <div>
            <ol start={id+1}>
                <li key ={id}>
                    {item}<Button style={{textAlign:'right'}} onClick={() => onRemove(id) }><DeleteIcon/></Button>
                </li>
            </ol>
        </div>

    )
}

export default TodoList
