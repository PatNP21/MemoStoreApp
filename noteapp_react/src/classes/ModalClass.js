import AddNoteModal from '../modals/AddNoteModal'

export class ModalClass {

    constructor(isOpenState) {
        this.isOpenState_ = isOpenState
    }

    addNoteModal(isOpenState) {
        return <AddNoteModal isOpenState={this.isOpenState_}/>
    }
}