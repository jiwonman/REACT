import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

function TodoList({item, id}) {

    return (
        <div>
            <ol start={id+1}>
                <li>
                    {item}<Button ><DeleteIcon/></Button>
                </li>
            </ol>
        </div>

    )
}

export default TodoList
