import input from './input.module.css'

const Input = (props) => {
    return (
        <div className={input.main__Component}>
            <input
             onBlur={props.onBlur}
             value={props.value} 
             onChange={props.onChange}
             placeholder={props.placeholder} 
             type='text' 
             className={input.input__Field} />
        </div>
    )
}
export default Input