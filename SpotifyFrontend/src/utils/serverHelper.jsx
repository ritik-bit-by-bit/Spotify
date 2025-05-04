import BackendUrl from "./config";

const makeUnauthenticatePOSTrequest=async(route,body)=>{
    const response =await fetch(BackendUrl+route,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
            body:JSON.stringify(body),
    })
    const formattedResponse = await response.json()
    return formattedResponse;
}
export default makeUnauthenticatePOSTrequest;