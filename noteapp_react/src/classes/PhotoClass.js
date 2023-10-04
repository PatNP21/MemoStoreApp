import axios from "axios";
import AlbumHandler from "../handlers/AlbumHandler";

export class PhotoClass {

    constructor(id, file) {
        this.id_ = id
        this.file_ = file
    } 

    album_handler = new AlbumHandler()
    albumArray
    theFile = null

    getImages() {
        return this.album_handler.getImages(this.id_)
    }

    sendImage() {
        this.album_handler.sendImage(this.file_, this.id_).then(res => {
            return res
        }).catch(err => {
            return err
        })
    }

    showPreviousImage(index, array) {
        return array[index-1]
    }

    showNextImage(index, array) {
        return array[index+1]
    } 
}