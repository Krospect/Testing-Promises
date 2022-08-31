// 1. Then

// const emailRef=document.querySelector(".email");

// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then(response =>{
//     return response.json()    
// }).then(data=>{
//     console.log(data)
//     emailRef.innerHTML=data.email
// })


// // 2. Async/Await
// async function main(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log(data)
//     emailRef.innerHTML=data.email
// }


// main();

// function getSubscriptionStatus(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve("VIP")
//         },2000);
//     })
// }

// //1. Then
// getSubscriptionStatus().then(response => console.log(response))

// // 2. Async/Await
// async function main(){
// console.log(await getSubscriptionStatus())
// }

// main();


function getVideo(subscriptionStatus){
    return new Promise((resolve,reject) => {
        if(subscriptionStatus==='VIP'){
            resolve("show video")
        }else if(subscriptionStatus==='FREE'){
            resolve("show trailer")
        }else{
            reject("no video")
        }
    })
}

async function main(){
    console.log(await getVideo('FREE'))
}

main();