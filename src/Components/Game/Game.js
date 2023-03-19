import game from './game.module.css'
import { useState, useEffect , useRef  } from "react"
import Input from '../../Atoms/Input/Input'
import Button from '../../Atoms/Buttton/Button'


const Game = () => {
    const [targetOne  , setTargetOne] = useState(0)
    const [targetTwo  , setTargetTwo] = useState(100)
    const [target , setTarget] = useState('')
    const [userInput , setUserInput] = useState('')
    const [output , setOutput] = useState("Enter the number and guess it")
    let count  = useRef(0)

    useEffect(() => {
        generateTarget()
    },[])

    const handleTargetOneCapture = (e) => {
        setTargetOne(e.target.value)
    }
    const handleTargetTwoCapture = (e) => {
        setTargetTwo(e.target.value)
    }
    const generateTarget = () => {
        const num =Math.ceil( Math.random () * (targetTwo-targetOne) + 1 )
        setOutput("Enter the number and guess it")
        setTarget(num)
    }
    const handleUserInput = (e) => {
        setUserInput(e.target.value)
    }
    const validateNumber = () => {
        count.current = count.current +1
        if(userInput === ""){
            setOutput("Field cannot be empty")
        }else if(userInput == target){
            setOutput(`Congratulations..! It took you ${count.current} attempts to guess the number`)
        }else if(userInput >= target){
            setOutput(`My number is less than ${userInput}`)
        }else if(userInput <= target){
            setOutput(`My number is greater than ${userInput}`)
        }   
    }
    return(
        <div className={game.main__Component}>
            <h1 className={game.heading__One}>Guess My Number .?</h1>
            <h1>Please set your target range</h1>
            <div className={game.section__One}>
            <Input onChange={handleTargetOneCapture} value={targetOne} placeholder='Enter target number..' onBlur={generateTarget} />
            <Input onChange={handleTargetTwoCapture} value={targetTwo} placeholder='Enter target number..' onBlur={generateTarget}/>
            <Button onClick={generateTarget} name='New target' />
            </div>
            <h2 className={game.heading__Two}>{output}</h2>
            <Input onChange={handleUserInput} placeholder='Guess the number...' />
            <Button onClick={validateNumber} name='Guess' />
        </div>
    )
}
export default Game