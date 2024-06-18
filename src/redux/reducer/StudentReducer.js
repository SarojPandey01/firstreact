const initialData ={
    name:'Saroj'

}
const StudentReducer = (state=initialData,action)=>{
    switch (action.type) {
        case 'CHANGE_NAME':
            return{
                ...state,
                name:action.payload
            }
            
    
        default:
            return state
    }
}
export default StudentReducer