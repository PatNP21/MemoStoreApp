import React, {useEffect} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 80vw;
    height: 50vh;
    display: block;
    margin: 3vh auto;
    border: 1px solid #aaa;
`

function Events() {

  const hoursCount = 24

  const eventsBar = () => {
    return (
      <div>
        {hoursCount.map(item => {
          return <div>{item}</div>
        })}
      </div>
    )
    for (let i=0; i<hoursCount; i++) {

    }
  }

  return (
    <Container>
        
    </Container>
  )
}

export default Events