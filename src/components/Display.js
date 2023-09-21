export default function Display ({input, output}){
    return (
        <div className="output">
            <span className="result">{output}</span>
            <span className="input" id="display">{input}</span>
        </div>
    )
}