import { MouseEventHandler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import styled from 'styled-components'

interface Dots {
  x: number
  y: number
}

function App() {
  const [dots, setDots] = useState<Dots[]>([])

  const draw = (e: MouseEvent) => {
    console.log(e)
    const {clientX, clientY} = e;
    setDots([...dots, {x: clientX, y: clientY}])
  }

  console.log(dots)

  return (
    <>
      <ContainerSyles.AppWrapper>
        <ContainerSyles.ButtonWrapper>
          <button>Undo</button>
          <button>Redo</button>
        </ContainerSyles.ButtonWrapper>

        <ContainerSyles.ClickZone className='dot-zone' onClick={draw}>
          {dots.map(({x, y}: Dots, i: number)=>{
            return <ContainerSyles.Dot key={`dots-${i}`} style={{left: `${x}px`, top:`${y}px`}}/>
          })}
        </ContainerSyles.ClickZone>
      </ContainerSyles.AppWrapper>
    </>
  )
}

export default App


const ContainerSyles = {
  AppWrapper: styled.div`
      width: 100%;
      height: 100%;
      border: solid white;
  `,
  ButtonWrapper: styled.div`
    border-bottom: solid white
  `,
  ClickZone: styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1
`,
  Dot: styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
`,

}