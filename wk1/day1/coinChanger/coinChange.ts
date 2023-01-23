function coinChange(paid : number, price: number): string {
    const myChangeDir : Record<string, number>={
        "dollar": 100,
        "quarter" : 25,
        "dime" : 10,
        "nickel": 5,
        "penny": 1
    }
    var change : number = (paid * 100) - (price* 100)
    var myChangeNames:string[]=[]
    if (change === 0){
        return "You paid the exact amount.";
    }
    else if(change < 0){
        return "You don't have enough money to pay for this item.";
    }
    else{
        for(const i in myChangeDir){
            var counter: number = Math.floor(change/myChangeDir[i]);
            change=change%myChangeDir[i]
            let stringToPush:string=''
            if(change ===0 && myChangeNames.length >= 1){
                stringToPush+="and "
            }
            if(counter > 1 && i !== 'penny'){
                stringToPush+=`${counter} ${i}s`
            }
            else if(counter > 1 && i == "penny"){
                stringToPush+=`${counter} pennies`
            }
            else if (counter===1){
                stringToPush+=`${counter} ${i}`
            }
            if (stringToPush !== ''){
                myChangeNames.push(stringToPush)
            }
        }
    }
    let myAnswer:string;
    if (myChangeNames.length > 2){
        myAnswer=myChangeNames.join(', ')
    }
    else{
        myAnswer=myChangeNames.join(' ')
    }
    return `Your optimal change is ${myAnswer}.`
}
module.exports=coinChange;