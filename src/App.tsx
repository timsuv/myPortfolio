import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router';
import "preline";

function App() {
  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
}
export default App
