import './button.css'

export const Button = (props) => {
    return (
        <button className='show-more-btn' onClick={() => props.action()}>{props.text}</button>
    )
}