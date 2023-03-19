import Home from './Components/Home/Home'
import { Route , Routes } from 'react-router-dom'
import Game from './Components/Game/Game'


const App = () => {  
return(
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/game' element={<Game />} />
        </Routes>
    </div>
)
}

export default App 