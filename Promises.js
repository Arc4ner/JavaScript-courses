/*console.log('Start')
function userInfo(name) {
setTimeout( () => {
console.log('** User info received **')
return name
},3000)
}
let userName = userInfo('Khalid')
console.log(userName)
console.log('End')*/


/*console.log('Start')
function userInfo(name,callBack) {
setTimeout( () => {
console.log('** User info received **')
callBack(name)
},3000)
}
let userName = userInfo('Khalid',name => {
    console.log(`Your name is${name}`)
})
console.log('End')*/


/*console.log('Start')

const newUser = new Promise((resolve, reject) =>{
   setTimeout(()=>{
    const userInfo = {
        name: 'khalid',
        age: 19
    }
    resolve(userInfo)
   },3000)
})
newUser
.then(res => {
    console.log('**User info received**')
    console.log(res)
})
console.log('End')*/


const newUser = new Promise((resolve, reject) =>{
    setTimeout(()=>{
     const userInfo = {
         name: 'khalid',
         age: 11
     }
     resolve(userInfo)
    },3000)
 })
 const addNewUser = userInfo => {
    let userAge = userInfo.age
    let adultAge;
    if(userAge>= 18) {
        adultAge= `${userInfo.name} is an Adult`
        return Promise.resolve(adultAge)
    } else {
        adultAge= `${userInfo.name} is NOT an Adult` 
        return Promise.reject(new Error(adultAge))
    }
    
 }
 newUser
    .then(addNewUser)
    .then(res => {
     console.log('**User info received**')
     console.log(res)
 })
  .catch(err => {
    console.log(err.message)
  })