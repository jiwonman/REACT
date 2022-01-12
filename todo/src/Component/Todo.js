import { Container, Input, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import TodoList from './TodoList';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        marginTop: '10%',
    }
})



function Todo() {

    function onRemove(id) {
        SetTodo(addData=> {
            return addData.filter((item, index)=>{
                return index !==id
            })
        })
    }  
    
    
    const [input, SetInput] = useState("");
    const [todo, SetTodo] = useState([]);

    function addTodo (event){
        SetTodo(addData => {
            return [...addData, input];
        })
        SetInput("");
    }

    const classes = useStyles();
    return (

        <div className={classes.root}>
            <h1 style={{width:'400px', margin:'0 auto', backgroundColor: 'rgba(255, 255, 128, .5)'}}>TodoList</h1>
            <Container style={{width:'400px', margin:'0 auto', backgroundColor: 'rgba(255, 255, 128, .5)'}}>
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
                            id={index}
                            item={item}
                            onRemove = {onRemove}
                        />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Todo
