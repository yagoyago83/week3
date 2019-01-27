function whatisyourname(name) {
    if (name === 'Yagmyr') {
        console.log('Hey Yagmyr nice to meet you')
    } else {
        console.log('Who are you i dont know you')
    }
}
whatisyourname('Yagmyr');


function returntwelve(number) {

    for (i = 0; i <= number; i++) {
        if (number + number === 12) {
            console.log('this is 12')
        } else {
            console.log('no this is not 12');
        }
    }
}
returntwelve(6);