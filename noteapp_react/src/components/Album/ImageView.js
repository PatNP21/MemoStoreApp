import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {RxCross2} from 'react-icons/rx'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineLeft} from 'react-icons/ai'
import { PhotoClass } from '../../classes/PhotoClass'
import './album.css'

const Grid = styled.div`
    width: 85vw;
    height: 84vh;
    justify-content:center;
    align-items: center;
    background: rgba(102, 102, 102, 0.8);
    display: grid;
    grid-template-rows: auto auto auto;
    position: absolute;
    transform: scale(1);
    z-index: 1,
    top: 0,
    left: 0,
`
const X = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1vh 1vw;
    width: fit-content;
    height: fit-content;
    color: white;
    cursor: pointer;
`
const SwitchSection = styled.div`
    height: 84vh;
    width: 9vw;
    color: white;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: absolute;
    top:0;
    display: inline-block;
`
const Switch = styled.div`
    margin:auto;
    line-height:84vh;
    font-size: 2rem;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
`
const ImgGrid = styled.div`
    justify-content: center;
    align-items: center;
    display: inline-block;
    positive:absolute;
    width: auto;
    height: auto;
    max-height: 60vh;
    margin: 0 auto;
    opacity: 1;
`
const Img = styled.img`
    margin: auto;
    width: auto;
    max-width: 60vw;
    height: auto;
    max-height: 75vh;
`

function showPreviousImage(index, array) {
    if(index > 0) {
        return {url: array[index-1].url, id: index-1}
    } else {
        return {url: array[array.length-1].url, id: array.length-1}
    }
    
}

function showNextImage(index, array) {
    if(index < array.length-1) {
        return {url: array[index+1].url, id: index+1}
    } else {
        return {url: array[0].url, id: 0}
    }
    
} 

function ImageView({array, item, unreleaseView}) {

    let temp
    const [item_src, setItemSrc] = useState()
    const [item_id, setItemId] = useState(0)

    useEffect(() => {
        setItemSrc(item.url)
        console.log(item_src)
        setItemId(item.id)
    }, [])

    return (
        <Grid>
            <SwitchSection className='switchleft'>
                <Switch onClick={() => {
                    let temp
                    console.log(`before: ${item_id}`)
                    temp = showPreviousImage(item_id, array)
                    setItemSrc(temp.url)
                    setItemId(temp.id)
                    console.log(`after: ${item_id}`)
                }
                }>
                    <AiOutlineLeft/>
                </Switch>
                
            </SwitchSection>
            <ImgGrid className='section'>
                <Img id="showImage" src={item_src}/>
            </ImgGrid>
            <SwitchSection className='switchright'>
                <X onClick={unreleaseView}>
                    <RxCross2 style={{fontSize: "2rem"}}/>
                </X>
                <Switch onClick={() => {
                    console.log(`before: ${item_id}`)
                    temp = showNextImage(item_id, array)
                    setItemSrc(temp.url)
                    setItemId(temp.id)
                    console.log(`after: ${item_id}`)
                    
                }}>
                    <AiOutlineRight/>
                </Switch>
            </SwitchSection>
        </Grid>
    )
    }

export default ImageView