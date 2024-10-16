import Slider from '../slider/slider'
import { GlobalStyle } from './styles';
import {slides} from '../../const'

export default function App() {
  return (
    <> 
      <GlobalStyle /> 
      <Slider slides={slides}/>
    </>    
  )

}
