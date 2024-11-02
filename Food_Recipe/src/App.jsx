import MainPage from "./components/MainPage"
import { Route, Routes } from 'react-router-dom'
import MealInfo from "./components/MealInfo"

function App() {

  return (
    <>
      <div className="place-items-center bg-red-50">
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/:mealId" element={<MealInfo/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
