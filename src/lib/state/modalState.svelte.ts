export const modalState = $state<{visible: boolean}>({
    visible: false,
})

export function closeModal() {
    modalState.visible = false;
}

export function openModal(){
    modalState.visible = true;
}