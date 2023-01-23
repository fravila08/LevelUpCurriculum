function coinChange(paid, price) {
    var myChangeDir = {
        "dollar": 100,
        "quarter": 25,
        "dime": 10,
        "nickel": 5,
        "penny": 1
    };
    var change = (paid * 100) - (price * 100);
    var myChangeNames = [];
    if (change === 0) {
        return "You paid the exact amount.";
    }
    else if (change < 0) {
        return "You don't have enough money to pay for this item.";
    }
    else {
        for (var i in myChangeDir) {
            var counter = Math.floor(change / myChangeDir[i]);
            change = change % myChangeDir[i];
            var stringToPush = '';
            if (change === 0 && myChangeNames.length >= 1) {
                stringToPush += "and ";
            }
            if (counter > 1 && i !== 'penny') {
                stringToPush += "".concat(counter, " ").concat(i, "s");
            }
            else if (counter > 1 && i == "penny") {
                stringToPush += "".concat(counter, " pennies");
            }
            else if (counter === 1) {
                stringToPush += "".concat(counter, " ").concat(i);
            }
            if (stringToPush !== '') {
                myChangeNames.push(stringToPush);
            }
        }
    }
    var myAnswer;
    if (myChangeNames.length > 2) {
        myAnswer = myChangeNames.join(', ');
    }
    else {
        myAnswer = myChangeNames.join(' ');
    }
    return "Your optimal change is ".concat(myAnswer, ".");
}
module.exports = coinChange;
