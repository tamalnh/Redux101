// const data = {
//     type: 'MOVIES_LIST',
//     payload: [
//         {id:"1", name: "Pulp fiction"}
//     ]
// }



export default function (state = null, action) {
    switch (action.type) {
        case 'MOVIES_LIST':
            return action.payload; 
    
        default:
            return state; 
    }
}