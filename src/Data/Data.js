export const ImagesData = {
    background:{
        forest:'/assets/images/backgrounds/forest-regular.jpg'
    }
}
//
// const SoundsList={
//
// }



export const Character = {
    chickenRider:{
        id:1,
        name:'chicken-rider',
        playerName:'playerName',
        health:100,
        power:'',
        images:['/assets/images/characters/chicken2.png'],
        sounds:''
    }
}

// class EnemyClass  {
//     constructor(name,health,power,images,sounds){
//         this.name=name
//         this.health=health
//         this.power=power
//         this.images = images
//         this.sounds = sounds
//     },
// }

export const EnemyData = {
    deer:{
        name:'deer',
        health:50,
        Power:'none',
        images:['/assets/images/enemies/deer1.png'],
        sounds:''
    },
}

export const RoomsData = {
    room1:{
        id:1,
        name: 'Room 1',
        value:1,
        image: '/assets/images/backgrounds/forest-regular.jpg',
        enemy: EnemyData['chicken'],
        music: ''
    },

}
