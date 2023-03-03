//Array destructuring
//using es6
// old method of writting an array into parts before es6
// const myBioData = ["Abdul Quddos","Code crafter",23]
// let myName = myBioData[0]
// let myChannel = myBioData[1]
// let myAge = myBioData[2]
// console.log(myName)

// const myBioData = ["Abdul Quddos","Code crafter",23]
// let [myName,youtubeChannel,age,myDegree="BSE"] = myBioData;
// console.log(`my name is ${myName} and my degree is ${myDegree}`)


//object destructuring
const myBioData ={
    myName: "Abdul Quddos",
    myChannelName: "Code Crafter",
    myAge:23
}
let {myName,myChannelName,myAge,newVariable="abdul bro"} = myBioData
console.log(myBioData.newVariable)