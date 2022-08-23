export const Button = (props) => {
    console.log(props.text);
    return (
        <button onClick={() => props.action()}>{props.text}</button>
    )
}