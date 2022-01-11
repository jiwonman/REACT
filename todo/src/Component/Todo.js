import { Container, Input, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import TodoList from './TodoList';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        marginTop: '10%',
        backgroundColor: 'rgba(255, 255, 128, .5)'
    }
})

function Todo() {
    const [input, SetInput] = useState("내용을 입력하세요.");
    const [todo, SetTodo] = useState([]);

    function addTodo(event){
        SetTodo(addData => {
            return [...addData, input];
        })
    }

    const classes = useStyles();
    return (

        <div className={classes.root}>
            <h1>TodoList</h1>
            <Container>
                <div>
                    <Input
                        type='text'
                        value={input}
                        onChange={(event) => { SetInput(event.target.value)}}
                    />
                    <Button onClick={addTodo} ><AddIcon/></Button>
                </div>
                <div>
                    {todo.map((item, index) => (
                        <TodoList
                            key={index}
                            id={index}
                            item={item}
                        />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Todo
