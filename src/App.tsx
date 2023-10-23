import { ThemeProvider } from 'styled-components';
import { Button } from "./Components/Button";
import { DefaultTheme } from './styles/themes/default';
import { LightTheme } from './styles/themes/light';
import { useState } from 'react';


export function App() {

  const [personalizedTheme , setPersonalizedTheme] = useState(DefaultTheme)
  function handleChangeTheme(){
    if(personalizedTheme === DefaultTheme){
      setPersonalizedTheme(LightTheme)
    }else{
      setPersonalizedTheme(DefaultTheme)
    }
  }

  return (
    <>
      <ThemeProvider theme={personalizedTheme}>
        <Button variant="primary"/>
        <Button variant="secondary"/>
        <Button variant="success"/>
        <Button variant="danger"/>
        <Button />
      </ThemeProvider>
      <button onClick={handleChangeTheme}>Change</button>
    </>
  )
}


