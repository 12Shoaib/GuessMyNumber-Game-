import home from './home.module.css'
import Button from '../../Atoms/Buttton/Button'
import {TbMathIntegralX} from 'react-icons/tb'
import {TbMathXDivideY2} from 'react-icons/tb'
import {TbMathPiDivide2} from 'react-icons/tb'
import {TbMathOff} from 'react-icons/tb'
import {BsQuestion} from 'react-icons/bs'
import {FaSmileWink} from 'react-icons/fa'
import {TbMath} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/game')
    }
    return(
        <div className={home.main__Component}>
            <div className={home.section__One}>
                <TbMathIntegralX className={home.style__Icon1} />
                <TbMathXDivideY2 className={home.style__Icon2} />
                <TbMathPiDivide2 className={home.style__Icon3} />
                <TbMathOff className={home.style__Icon4} />
                <BsQuestion className={home.style__Icon5} />
                <TbMath className={home.style__Icon6} />
                <TbMathPiDivide2 className={home.style__Icon7} />
                <h1 className={home.heading__Two}>Maths is fun 
                <FaSmileWink className={home.smile_Icon} />
                </h1>
                
            </div>
            <div className={home.section__Two}>
            <h1 className={home.heading__One}>Welcome to fun learning game !!</h1>
            <Button onClick={handleNavigate} name='Start' />
            <div className={home.instruction__Tab}>
                <h2 className={home.heading__Three}>Instructions : </h2>
                <ul className={home.instruction__Wrapper}>                    
                    <li className={home.bold_Tags}>Click on start button to start the game </li>
                    <li className={home.bold_Tags}>Enter the range of numbers you want the target number to be between, and click New Target </li>
                    <li className={home.bold_Tags}>Enter your guess</li>
                    <li className={home.bold_Tags}>check if your value is too high or too low</li>
                    <li className={home.bold_Tags}>Manipulate your guess</li>
                    <li className={home.bold_Tags}>The app will tell you when you are right, and how many attempts you had</li>
                </ul>
            </div>
            </div>

        </div>
    )
}

export default Home