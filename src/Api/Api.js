import axios from "axios";



export const axiosApi = axios.create({ baseURL: 'https://61c2f2dc9cfb8f0017a3e7c8.mockapi.io/chickenRider', });


const getPlayersDataFromApi = async() => {
    try {
        const data =   axiosApi.get('')
        const playersList= await data
        return playersList
    }catch (err){
        console.log(err)
    }
}

export default getPlayersDataFromApi

export const findPlayer= async (id)=>{
    // const DATA= getDataBase();
    // return DATA.find(shoe=>shoe.id===id);
    let selectedPlayer ;
    await axiosApi.get(`/${id}`)
        .then(res=>{selectedPlayer=res})
    return selectedPlayer

}

export const deletePlayer= async (id)=>{
    console.log('deleteplayer')
    let selectedPlayer ;
    await axiosApi.delete(`/${id}`)
        .then(res=>{selectedPlayer=res})
    return selectedPlayer
}

export const updatePlayer= async (id,player)=>{
    console.log('updateplayer',player)
    await axiosApi.put(`/${id}`,player)
}


export const AddPlayer= async (player)=>{
    console.log('addplayer',player)
    await axiosApi.post(`/`, player )

}