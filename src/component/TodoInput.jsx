import { useState } from "react";

function TodoInput({onTodoAdd}) {
    const [inputText, setInputText] = useState('')

    const handleInput = (event) => {
        const value = event.target.value;
        setInputText(value);
    }

    const handleClcik = () => {
        onTodoAdd(inputText);
        setInputText('');
    }
    
 

    return  (
        <div>
            <input type="text" value={inputText} onChange={handleInput} />
            <button onClick={() => handleClcik()}>click</button>
            {/* <button onClick={() => onTodoAdd(inputText)}>click</button> */}
            {/* 클릭했을때 인풋텍스트를 그 안에 어떤 인자로 넘기고 싶을때 () => 함수 사용 */}
        </div>
    )
}

export default TodoInput;