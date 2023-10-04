import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import AlbumHandler from '../../handlers/AlbumHandler'
import styled from 'styled-components'
import 'react-photo-view/dist/react-photo-view.css'
import { useParams } from 'react-router-dom'
import ImageView from './ImageView'
import { PhotoClass } from '../../classes/PhotoClass'

const ControlPanel = styled.div`
    width: 80vw;
    height: 10vh;
`
const SubmitBtn = styled.button`
    display: inline-block;

`
const Gallery = styled.div`
    width: 80vw;
    height: 70vh;
    overflow: scroll;
`
const Img = styled.img`
    width:200px;
    height:200px;
    float:left;
    margin: 5px;
    cursor: pointer;
`
const ShowImageView = styled.div`
    width: fit-content;
    height: fit-content;
    transition: ease-in 0.5s;
`

function AlbumDashboard({id}) {

    const album_handler = new AlbumHandler()

    const params = useParams()
    const {register, handleSubmit} = useForm()
    const [file, setFile] = useState()
    const [images, setImages] = useState()
    const [selectedPhoto, setSelectedPhoto] = useState()
    const [prevPhoto, setPrevPhoto] = useState()
    const [nextPhoto, setNextPhoto] = useState()
    const [releasedView, releaseView] = useState(false)

    const selectPhoto = async (selectedItemPath) => {
        //await setSelectedPhoto(selectedItemPath)
        console.log(selectedItemPath)
        console.log('clicked image')
        //releaseView(true)
    }

    const unreleaseView = () => {
        releaseView(false)
    }

    const sendImage = () => {
        if(!id) {
            id = params.id
        }
        console.log(file)
        album_handler.sendImage(file, id).then(() => {
            setImages(null)
            album_handler.getImages(id).then(res => {
                setImages(res.data.resources)
            })
        }).catch(err => {
            console.log(err)
        })
        /*try {
            let res = album_handler.sendImage(file, id).then(() => {
                album_handler.getImages(id)
            }).catch(err => {
                console.log(err)
            })
            console.log(res)
        } catch(err) {
            console.log(err)
        }*/
    }

    const getImagesArray = (resource) => {
        return resource
    }

    useEffect( () => {
        if(!id) {
            id = params.id
        }
        album_handler.getImages(id).then(res=> {
            console.log(res.data.resources)
            setImages(res.data.resources)
            //getImagesArray(res.data.resources)
            //console.log(images)
        }).catch(err => {
            console.log(err)
        }).finally((res) => {
            getImagesArray(res.data.resources)
        })
        const photo_class = new PhotoClass(id, null)
        console.log(photo_class.getImages())
        getImagesArray(photo_class.getImages())
    }, [])

    return (
        <div>
            <ControlPanel>
                <label className='label' htmlFor='fileinput'>
                    Press here to select image from your device...
                </label>
                <input 
                    id="fileinput"
                    type="file"
                    name="thefile"
                    accept='.jpg'
                    onChange={e => {
                        URL.createObjectURL(e.target.files[0])
                        setFile(e.target.files[0])
                        if(file) {sendImage()}
                    }}
                />
                {/*<SubmitBtn onClick={sendImage}>
                    send image
                </SubmitBtn>*/}
            </ControlPanel>
            
            <Gallery>
                {images ? images.map(item => {
                    return (
                        <>
                            <Img src={item.secure_url} onClick={() => {
                                setSelectedPhoto({url: item.secure_url, id: images.indexOf(item)})
                                //setPrevPhoto(images[images.indexOf(item)-1].secure_url)
                                //setNextPhoto(images[images.indexOf(item)+1].secure_url)
                                releaseView(true)
                            }}/>
                        </>
                    )
                }) : "There are not any images to display..."}
                {releasedView && 
                    <ShowImageView>
                        <ImageView array={images} item={selectedPhoto} unreleaseView={unreleaseView}/>
                    </ShowImageView>
                }
            </Gallery>
        </div>
    )
}

export default AlbumDashboard