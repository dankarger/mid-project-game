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
        // id:1,
        name:'chicken-rider',
        playerName:'playerName',
        health:100,
        power:'',
        images:{default:'/assets/images/characters/chicken-rider.png',
                hit:'',
                death:'',
                 attack:''
                },

        sounds:''
    }
}
export class PlayerClass  {
    constructor({id,name,playerName,health,power,images,sounds}){
        this.id=id
        this.playerName=playerName
        this.name=playerName
        this.health=health
        this.power=power
        this.images = images
        this.currentImage = images.default
        this.sounds = sounds
    }
}

export class EnemyClass  {
    constructor({name,health,power,images,sounds}){
        this.name=name
        this.health=health
        this.power=power
        this.images = images
        this.currentImage = images.default
        this.sounds = sounds
    }
}

export const EnemyData = {
    deer:{
        name:'DEER',
        health:50,
        Power:'none',
        images:{
            default:'/assets/images/enemies/deer1.png',
            hit:'/assets/images/enemies/deer3-hit3.png',
            death:'/assets/images/enemies/deer3-dead.png',
            attack:''
        },
        sounds:''
    },
    deer2:{
        name:'Deer2',
        health:70,
        Power:'none',
        images: {default:'/assets/images/enemies/deer1.png',
                  hit:'/assets/images/enemies/deer3-hit3.png',
                  death:'/assets/images/enemies/deer3-dead.png'
                    },
        sounds:''
    },cow:{
        name:'COW',
        health:90,
        Power:'none',
        images: {default:'/assets/images/enemies/cow1.png',
                 hit:'/assets/images/enemies/deer3-hit3.png',
                 death:'/assets/images/enemies/deer3-dead.png'
        },
        sounds:''
    },
    merchant:{
        name:'MERCHANT',
        health:70,
        Power:'none',
        images:{default:'/assets/images/enemies/merchant.jpg',
                   hit:'/assets/images/enemies/deer3-hit3.png',
                   death:'/assets/images/enemies/deer3-dead.png'
                },
        sounds:''
    },
    girafe:{
        name:'GIRAFE',
        health:100,
        Power:'none',
        images:{default:'/assets/images/enemies/girafe.png',
                hit:'/assets/images/enemies/deer3-hit3.png',
                death:'/assets/images/enemies/deer3-dead.png'
                },
        sounds:''
    },
    boss:{
        name:'BOSS',
        health:200,
        Power:'none',
        images:{
            default:'/assets/images/enemies/virus.png',
            hit:'/assets/images/enemies/deer3-hit3.png',
            death:'/assets/images/enemies/deer3-dead.png'
        },
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
        image: '/assets/images/backgrounds/forest-flip.png',
        enemy: EnemyData['cow'],
        music: ''
    },
    room3:{
        id:2,
        name: 'Room 3',
        value:3,
        image: '/assets/images/backgrounds/mountain8.jpg',
        enemy: EnemyData['merchant'],
        music: ''
    },
    room4:{
        id:4,
        name: 'Room 4',
        value:4,
        image: '/assets/images/backgrounds/forest-red.png',
        enemy: EnemyData['girafe'],
        music: ''
    },
    boss:{
        id:5,
        name: 'Boss level',
        value:4,
        image: '/assets/images/backgrounds/forest-red.png',
        enemy: EnemyData['boss'],
        music: ''

}}
