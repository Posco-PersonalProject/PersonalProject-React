import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Board = () => {
    const [comment, setComment] = useState();

    const navigate = useNavigate();
    const Board = () => {
        axios.post('/api/board', {comment:comment})
        .then((res) => {
            navigate('/BoardList');
        });
    }
    return (
        <div>
            방명록 : <input type="text" onChange={(e)=>{setComment(e.target.value)}}/><br /><br />
            <button onClick={Board}>작성완료</button>
        </div>
    );
};

export default Board;