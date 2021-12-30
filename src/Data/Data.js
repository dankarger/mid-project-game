export const ImagesData = {
    background:{
        tree1:'/assets/images/backgrounds/trees-green.jpg',
        map:'map10.jpg',
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
    deer2:{
        name:'deer2',
        health:70,
        Power:'none',
        images:['/assets/images/enemies/deer1.png'],
        sounds:''
    },
}

export const RoomsData = {
    homePage:{
        id:11,
        name: 'home-page',
        value:1,
        image: '/assets/images/backgrounds/trees-green.jpg',
        music: ''
    },
    room1:{
        id:1,
        name: 'Room 1',
        value:1,
        image: '/assets/images/backgrounds/forest-regular.jpg',
        enemy: EnemyData['deer'],
        music: ''
    },
    room2:{
        id:2,
        name: 'Room 2',
        value:2,
        image: '/assets/images/backgrounds/trees-green.jpg',
        enemy: EnemyData['deer2'],
        music: ''
    },room3:{
        id:2,
        name: 'Room 3',
        value:3,
        image: '/assets/images/backgrounds/trees-green.jpg',
        enemy: EnemyData['deer2'],
        music: ''
    },room4:{
        id:4,
        name: 'Room 1',
        value:4,
        image: '/assets/images/backgrounds/trees-green.jpg',
        enemy: EnemyData['deer2'],
        music: ''
    },

}
