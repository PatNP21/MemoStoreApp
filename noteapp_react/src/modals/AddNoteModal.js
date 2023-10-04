import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'
import ReactModal from 'react-modal'
import './../modalStyles.css'

const Title = styled.p`
  text-align: center;
`
const Label = styled.label`
  text-align: center;
  font-weight: 300;
  color: #888;
  cursor:pointer;
`
const Input = styled.input`
  margin: 1vh auto;
  border:none;
  width: 40vw;
  border-bottom: 1px solid #ccc;
`
const Textarea = styled.textarea`
  margin: 1vh auto;
  border:none;
  border-bottom: 1px solid #ccc;
  width: 40vw;
  height: 15vh;
  resize: none;
`
const Img = styled.img`
  width: 40%;
  height: fit-content;
  background-image: size;
  display: block;
  margin: 2vh auto;
`
const SubmitBtn = styled.input`
  margin: auto;
  width: 10vw;
  height: 5vh;
`

function AddNoteModal({addNote, addNoteModal, user_id}) {

    const {state} = useLocation()
    const {register, handleSubmit} = useForm()
    const [photo, setPhoto] = useState()

    useEffect(() => {
      console.log(`user_id to add note: ${user_id}`)
    }, [])

    return (
      <ReactModal id='addModalWindow' isOpen={addNoteModal}>
          <Title>Create new note</Title>
          <div class="close_icon">
            <i class="fa-sharp fa-solid fa-xmark"></i>
          </div>
          <form onSubmit={handleSubmit(addNote)}>
              <input type="hidden" {...register('user_id')} value={user_id}/>
              <input type="hidden" {...register('creating_date')} value={new Date().toLocaleDateString('en-CA')}/>
              <Input type="text" placeholder='Title' {...register("title")}/><br/>
              <Textarea type="text" placeholder='Content' {...register("content")}/><br/>
              {<Label htmlFor='fileInput'>Enter multimedia file</Label>}
              {<input 
                type="file"
                {...register('multimedia')} 
                id="fileInput" 
                accept='.jpg'
                onChange={e => {
                  let el = URL.createObjectURL(e.target.files[0])
                  setPhoto(el)
                }}
              />}<br/>
              <Img src={photo}/>
              <SubmitBtn type="submit" value="Add note"/>
          </form>
      </ReactModal>
    )
}

export default AddNoteModal