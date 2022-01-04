function PlaySound(file,volume=1) {
        let audio = new Audio(file)
        audio.play()
        audio.volume=volume
}

export default PlaySound;