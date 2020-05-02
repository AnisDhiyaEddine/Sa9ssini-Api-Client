const axios = require(axios)

const signup = async(user)=>{ 
    try {
        const response = await axios.post(url+'/users',user)
        window.localStorage.setItem("sa9ssini_access_token",response.data.token)
        return response;
    } catch (error) {
        console.log(error)  
    }
} 

const login = async({email,password})=>{
    try {
        const response = await axios.post(url+'/users/login',{email,password})
        window.localStorage.setItem("sa9ssini_access_token",response.data.token)
        return response;}
         catch (error) {
        console.log(error)
    }
    }

const logout = async()=>{
    try {
        const headers = { Authorization: `Bearer ${window.localStorage.getItem('sa9ssini_access_token')}` };
        const response = await axios.post('/users/logout',{headers})
        console.log(response)
        return response;
    } catch (error) {
        console.log(error)
    }
}



module.exports = {signup,login,logout}