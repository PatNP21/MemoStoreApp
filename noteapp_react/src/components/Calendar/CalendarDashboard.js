import React, { useEffect } from 'react'
import Calendar from 'react-calendar'
import './Calendar.css';
import Events from './Events';
import styled from 'styled-components';
import { CalendarClass } from '../../classes/CalendarClass';

const Container = styled.div`
    height: 94vh;
`
const TodayDate = styled.div`
    justify-content: center;
    align-items: center;
    width: 85vw;
    height: 10vh;
    display: block;
`
const CalendarDiv = styled.div`
    width: 85vw;
    height: 55vh;
    display: block;
`
const EventsDiv = styled.div`
    width: 85vw;
    height: 50vh;
    display: block;
`
function DrawTable() {
    const table = document.createElement('div')
    table.style.height = '360px'

    for(let i=0; i<6; i++) {
        const tr = document.createElement('div')
        for(let j=0; j<7; j++) {
            const td = document.createElement('div')
            td.style.width = '60px'
            td.style.height = '60px'
            td.style.display = 'inline-block'
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }

}

function CalendarDashboard() {

    const calendar_class = new CalendarClass()

    useEffect(() => {
        console.log(calendar_class.getCurrentDate())
    }, [])

    return (
        <Container>
            <TodayDate>
                {calendar_class.months[calendar_class.getCurrentDate().getMonth()]} {calendar_class.getCurrentDate().getDay()} {calendar_class.getCurrentDate().getFullYear()}
            </TodayDate>
            <CalendarDiv id="calendarDiv">
                {DrawTable()}
            </CalendarDiv>
        </Container>
    )
}

export default CalendarDashboard