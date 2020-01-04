export default function(state=[], action){
    switch (action.type){
        case "CREATE_COURSE":
            debugger;
            return [...state, {...action.course} ];
        default: 
            return state;
    }
}