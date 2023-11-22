// const p = new Promise((resolve, reject)=>{
//     // reject("bc")
//     resolve("abc")

// })
// console.log("abc")
// p.then((a)=>{
// console.log("resolve",a)
// }).catch(()=>{
//     console.log("reject")

// })

// const fun = async()=>{
//     try{
//     console.log("xyz")
//     let a = await p 
//     console.log("resolve",a)
//     console.log("pqr")
//     }catch{
//         console.log("reject")
//     }

// }
// fun()

// ( function(){
//     try{


//         // console.log("xyz")
//         let a 
//         // console.log("resolve",a)
//         // console.log("pqr")
//         }catch{
//             // console.log("reject")
//         }
// })()

// ;(async ()=>{
//     try{
//                 console.log("xyz")
//                 // let a = await p
//                 // console.log("resolve",a)
//                 console.log("pqr")
//                 }catch{
//                     console.log("reject")
//                 }
// })()

// console.log("abc2")



// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (1 == 1) {
//             resolve({ name: "raj", mark: 20 })
//         } else {
//             reject("ERROR: something went wrong")
//         }
//     }, 3000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (1 == 1) {
//             resolve({ name: "raj2", mark: 20 })
//         } else {
//             reject("ERROR: something went wrong2")
//         }
//     }, 1000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (1 == 1) {
//             resolve({ name: "raj2", mark: 20 })
//         } else {
//             reject("ERROR: something went wrong2")
//         }
//     }, 1000)
// })

// async function getData (){
//     // return "hello"
//     //   return new Promise((resolve, reject)=>{

//     //   })
//     return p1
// }
// getData().then()
// console.log("before")

// loading
// let id
// p1
//     .then((res) => {
//         console.log(res)
//         id = res?.id

//         p2
//             .then((res) => {
//                 console.log(res)
//                 id = res?.id

//                 //loading stop
//             })
//             .catch((error) => {
//                 console.log(error)
//                 //loading stop

//             })
//             .finally(() => {
//                 console.log("finally")
//                 //loading stop
//             })
//         console.log("inner p")
//         //loading stop
//     })
//     .catch((error) => {
//         console.log(error)
//         //loading stop

//     })
//     .finally(() => {
//         console.log("finally")
//         //loading stop
//     })

    // p2
    //         .then((res) => {
    //             console.log(res)
    //             id = res?.id

    //             //loading stop
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //             //loading stop

    //         })
    //         .finally(() => {
    //             console.log("finally")
    //             //loading stop
    //         })
    //     console.log("inner p")
    //     //loading stop


// console.log("after")

// console.log(getData().then((res)=>console.log(res)))

// async function getData(){
//     const res = await p1
// }


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (1 == 1) {
            resolve({ name: "raj", mark: 20 })
        } else {
            reject("ERROR: something went wrong")
        }
    }, 3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (1 == 1) {
            resolve({ name: "raj2", mark: 20 })
        } else {
            reject("ERROR: something went wrong2")
        }
    }, 1000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (1 == 1) {
            resolve({ name: "raj3", mark: 20 })
        } else {
            reject("ERROR: something went wrong3")
        }
    }, 1000)
})

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (1 == 1) {
            resolve({ name: "raj4", mark: 20 })
        } else {
            reject("ERROR: something went wrong4")
        }
    }, 0)
})

// const getData = async () =>{
//     try{
//     console.log("in async before")
//     const res = await p4
//     console.log(res);
//     console.log("in async after")
//     }catch(err){
//       console.log(err)
//     }finally{

//     }

// }

// p4.then(()=>{
//     console.log("hello")
// })

// console.log("before")

// getData()

// console.log("after")

//
//
//getData


setTimeout(()=>{
    console.log("timeout")
},0) 


fetch("https://reqres.in/api/users/3")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
})

// !(async()=>{
//     const res = await p4
// })()

// const fun =(asd)=>{
    
// }

// const p5 = new Promise((resolve, reject)=>{
//     resolve("abc")
// })

// Promise
// .then(fun)
// .then((res)=>{

// })
// .catch(()=>{

// })
// .finally(()=>{

// })

// async function getData (){
//     try{
//        let res = await promise
//     }catch{
        
//     }finally{

//     }
// }

// const getData  = async ()=>{
//     try{
//        let res = await promise
//     }catch{
        
//     }finally{

//     }
// }


