let competitors = ["Anna", "Beth", "Cara", "David"]

competitors.forEach(function (e, i, a) {

    if (i == 0) {
        document.write(`The No1 winner is Anna.<br>`)
    }
    else if (i == 1) {
        document.write(`The No2 winner is Beth.<br>`)
    }
    else if (i == 2) {
        document.write(`The No3 winner is Cara.<br>`)
    }
    else {
        document.write(`Sorry, David is not one of the winners.`)
	}

})