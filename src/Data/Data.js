export const ImagesData = {
    background:{
        tree1:'/assets/images/backgrounds/trees-green.jpg',
        map:'map10.jpg',
    }
}
//
export const SoundsList={
       click1:'/assets/sounds/simple_click.wav',
        click2:'/assets/sounds/woody_click.wav',
        click3:'/assets/sounds/simple_resonant_click.wav',
        click4:'/assets/sounds/Camera.wav',
        click5:'/assets/sounds/foto_klick_2.wav',
        boing1:'/assets/sounds/BoingBox01.wav',

        swish:'/assets/sounds/Swish.wav',
        health1:'/assets/sounds/WindowShadewav',
        message3:'/assets/sounds/message3.wav',
        whoosh1:'/assets/sounds/short_whoosh1.wav',
        whoosh2:'/assets/sounds/short_whoosh5.wav',
        low1:'/assets/sounds/bass_deny1.wav',
        mapAnimation:'/assets/sounds/foto_klick_2.wav',

}



export class PlayerClass  {
    constructor({id,playerName,health,power,images,sounds}){
        this.id=id
        this.name=playerName
        this.score=0
        this.health=health
        this.totalHealth=health
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
        this.totalHealth=health
        this.power=power
        this.images = images
        this.currentImage = images.default
        this.sounds = sounds
    }
}


export const Character = {
    chickenRider:{
        // id:1,
        name:'chicken-rider',
        // playerName:'playerName',
        avatar:'ALONZO',
        health:100,
        totalHealth:100,
        power:'',
        images:{default:'/assets/images/characters/chicken-rider.png',
            hit:'/assets/images/characters/chicken-rider-attack.png',
            death:'/assets/images/characters/chicken-rider-dead.png',
            attack:'/assets/images/characters/chicken-rider-attack.png'
        },

        sounds:{
            hit:SoundsList['low1'],
        }
        }
}

export const AVATARS={
    ALONZO:"/assets/images/characters/avatar1.png",
    The_KING:"/assets/images/characters/avatar2.png",
    LOUIE:"/assets/images/characters/avatar3.png"
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
        sounds:{
            hit:SoundsList['click2'],
        }
    },
    deer2:{
        name:'Deer2',
        health:70,
        Power:'none',
        images: {default:'/assets/images/enemies/deer1.png',
                  hit:'/assets/images/enemies/deer3-hit3.png',
                  death:'/assets/images/enemies/deer3-dead.png'
                    },
        sounds:{
            hit:SoundsList['low1'],
        }
    },cow:{
        name:'COW',
        health:90,
        Power:'none',
        images: {default:'/assets/images/enemies/cow1.png',
                 hit:'/assets/images/enemies/cow-hit.png',
                 death:'/assets/images/enemies/cow-dead.png',
                    attack:'/assets/images/enemies/cow-att.png',

        },
        sounds:{
            hit:SoundsList['message3'],
        }
    },
    merchant:{
        name:'SKATES',
        health:70,
        Power:'none',
        images:{default:'/assets/images/enemies/skates.png',
                   hit:'/assets/images/enemies/skates-hit.png',
                   death:'/assets/images/enemies/skates-dead.png',
                    attack:'/assets/images/enemies/skates-att.png'
                },
        sounds:''
    },
    girafe:{
        name:'GIRAFE',
        health:100,
        Power:'none',
        images:{default:'/assets/images/enemies/girafe.png',
                hit:'/assets/images/enemies/girafe-hit.png',
                death:'/assets/images/enemies/girafe-dead.png',
                attack:'/assets/images/enemies/girafe-att.png'
                },
        sounds:{
            hit:SoundsList['low1'],
        }
    },
    boss:{
        name:'BOSS',
        health:200,
        Power:'none',
        images:{
            default:'/assets/images/enemies/virus.png',
            hit:'/assets/images/enemies/virus-hit.png',
            death:'/assets/images/enemies/virus-dead.png',
            attack:'/assets/images/enemies/virus-att.png'
        },
        sounds:{
            hit:SoundsList['whoosh2'],
        }
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
    room0:{
        id:0,
        name: 'Room 0',
        value:0,
        image: '/assets/images/backgrounds/forest-regular.jpg',
        enemy: EnemyData['deer'],
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
        value:5,
        image: '/assets/images/backgrounds/forest-red.png',
        enemy: EnemyData['boss'],
        music: ''

}}
