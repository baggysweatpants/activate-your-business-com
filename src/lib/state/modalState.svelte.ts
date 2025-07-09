export const modalState = $state({
    visible: true,
})

export function closeModal() {
    modalState.visible = false;
}

export function openModal(){
    modalState.visible = true;
}