let if_ = document.querySelectorAll('.grid__item')
move = 0
let ar_cross = []
let ar_circle = []
let win = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    ['1','4','7'],
    ['2','5','8'],
    ['3','6','9'],
    ['1','5','9'],
    ['3','5','7'],
]

// проверка наличия победы у одной из сторон 
function winner_func(array, p){
    for (let i of win){
        let count = 0
        for (let j of i){
            if (array.includes(j)){
                count++
                if (count === 3){
                    alert(`WIN ${p}!!!!!`)
                    document.removeEventListener('click', click2)
                }
            }
            else{break}
        }
    } 
}

// выбор режима 
const player = document.getElementById('player')
const players = document.getElementById('players')

const circle_or_cross = document.querySelector('.menu__content__list_circle-or-cross')

document.addEventListener('click', play)

function play(event){
    if (event.target.closest('#player')){
        if (player.classList.contains('play')){
            return;
        }
        else{
            player.classList.toggle('play')
            players.classList.toggle('play')
            circle_or_cross.style.display = 'flex'
        }
    }
    if (event.target.closest('#players')){
        if (players.classList.contains('play')){
            return;
        }
        else{
            player.classList.toggle('play')
            players.classList.toggle('play')
            circle_or_cross.style.display = 'none'
        }
    }
}

// выбор стороны
const id_cross = document.getElementById('cross')
const id_circle = document.getElementById('circle')

document.addEventListener('click', play_cross_or_circle)

function play_cross_or_circle(event){
    if (event.target.closest('#cross')){
        if (id_cross.classList.contains('play')){
            return;
        }
        else{
            id_cross.classList.toggle('play')
            id_circle.classList.toggle('play')
        }
    }
    if (event.target.closest('#circle')){
        if (id_circle.classList.contains('play')){
            return;
        }
        else{
            id_cross.classList.toggle('play')
            id_circle.classList.toggle('play')
        }
    }
}

// начало игры
let menu = document.querySelector('.menu')
document.addEventListener('click', start)

function start(event){
    if (event.target.closest('.menu__content__start')){
        menu.style.display = 'none'
        if (players.classList.contains('play')){
            document.addEventListener('click', click2)
            document.removeEventListener('click', click)
        }
        if (player.classList.contains('play')){
            document.addEventListener('click', click)
            document.removeEventListener('click', click2)
        }
    }
}

// режим для одного игрока
function click(event){
    let target = event.target.closest('.grid__item');
    if (target && !(target.classList.contains('circle') || target.classList.contains('cross'))){
        if (id_cross.classList.contains('play')) {
            target.classList.add('cross')
            ar_cross.push(target.id);
            winner_func(ar_cross, 'Player')

            if (move === 0){
                setTimeout(function(){
                    if (ar_cross.concat(ar_circle).includes('5')){
                        r = Math.random()
                        if (r <= 0.25){
                            if_['0'].classList.add('circle');
                            ar_circle.push(if_['0'].id);
                        } 
                        else if (0.25 < r < 0.5){
                            if_['2'].classList.add('circle');
                            ar_circle.push(if_['2'].id); 
                        } 
                        else if (0.5 < r < 0.75) {
                            if_['6'].classList.add('circle');
                            ar_circle.push(if_['6'].id); 
                        }  
                        else{
                            if_['8'].classList.add('circle');
                            ar_circle.push(if_['8'].id); 
                        }    
                    }
                    else {
                        if_['4'].classList.add('circle');
                        ar_circle.push(if_['4'].id);
                    }
                }, 0)}
            if (move === 1){
                setTimeout(function(){
                    if (['1','3','7','9'].includes(ar_circle[0]) && ['2','4','6','8'].includes(ar_cross[1])){
                        if (ar_cross[1] === '2'){
                            if_['7'].classList.add('circle');
                            ar_circle.push(if_['7'].id);
                        }
                        else if(ar_cross[1] === '4'){
                            if_['5'].classList.add('circle');
                            ar_circle.push(if_['5'].id);
                        }
                        else if(ar_cross[1] === '6'){
                            if_['3'].classList.add('circle');
                            ar_circle.push(if_['3'].id);
                        }
                        else{
                            if_['1'].classList.add('circle');
                            ar_circle.push(if_['1'].id);
                        }
                    }
                    else if (['1','3','7','9'].includes(ar_circle[0]) && ['1','3','7','9'].includes(ar_cross[1])){
                        if (ar_cross[1] === '3'){
                            if (ar_circle[0] !== '7'){
                                if_['6'].classList.add('circle');
                                ar_circle.push(if_['6'].id);
                            }
                            else{
                                if_['0'].classList.add('circle');
                                ar_circle.push(if_['0'].id);
                            }
                        }
                        else if(ar_cross[1] === '7'){
                            if (ar_circle[0] !== '3'){
                                if_['2'].classList.add('circle');
                                ar_circle.push(if_['2'].id);
                            }
                            else{
                                if_['0'].classList.add('circle');
                                ar_circle.push(if_['0'].id);
                            }

                        }
                        else if(ar_cross[1] === '1'){
                            if (ar_circle[0] !== '9'){
                                if_['8'].classList.add('circle');
                                ar_circle.push(if_['8'].id);
                            }
                            else{
                                if_['6'].classList.add('circle');
                                ar_circle.push(if_['6'].id);
                            }
                        }
                        else{
                            if (ar_circle[0] !== '1'){
                                if_['0'].classList.add('circle');
                                ar_circle.push(if_['0'].id);
                            }
                            else{
                                if_['6'].classList.add('circle');
                                ar_circle.push(if_['6'].id);
                            }
                        }
                    }
                    else{
                        if ((ar_cross.includes('1') && ar_cross.includes('9')) || (ar_cross.includes('3') && ar_cross.includes('7')) || (ar_cross.includes('9') && ar_cross.includes('3'))){
                            if_['5'].classList.add('circle');
                            ar_circle.push(if_['5'].id);
                        }
                        else if (ar_cross.includes('1') && ar_cross.includes('3') || (ar_cross.includes('4') && ar_cross.includes('6'))){
                            if_['1'].classList.add('circle');
                            ar_circle.push(if_['1'].id);
                        }
                        else if ((ar_cross.includes('1') && ar_cross.includes('8')) || (ar_cross.includes('3') && ar_cross.includes('8')) || (ar_cross.includes('7') && ar_cross.includes('2')) || (ar_cross.includes('9') && ar_cross.includes('2')) || (ar_cross.includes('1') && ar_cross.includes('7')) || (ar_cross.includes('2') && ar_cross.includes('8'))){
                            if_['3'].classList.add('circle');
                            ar_circle.push(if_['3'].id);
                        }
                        else if ((ar_cross.includes('1') && ar_cross.includes('2')) || (ar_cross.includes('1') && ar_cross.includes('6')) || (ar_cross.includes('9') && ar_cross.includes('6')) || (ar_cross.includes('2') && ar_cross.includes('6'))){
                            if_['2'].classList.add('circle');
                            ar_circle.push(if_['2'].id);
                        }
                        else if ((ar_cross.includes('3') && ar_cross.includes('4')) || (ar_cross.includes('9') && ar_cross.includes('4')) || (ar_cross.includes('7') && ar_cross.includes('6')) || (ar_cross.includes('7') && ar_cross.includes('9'))){
                            if_['7'].classList.add('circle');
                            ar_circle.push(if_['7'].id);
                        }
                        else if ((ar_cross.includes('1') && ar_cross.includes('4')) || (ar_cross.includes('9') && ar_cross.includes('8')) || (ar_cross.includes('4') && ar_cross.includes('8'))){
                            if_['6'].classList.add('circle');
                            ar_circle.push(if_['6'].id);
                        }
                        else if ((ar_cross.includes('7') && ar_cross.includes('8')) || (ar_cross.includes('3') && ar_cross.includes('6')) || (ar_cross.includes('6') && ar_cross.includes('8'))){
                            if_['8'].classList.add('circle');
                            ar_circle.push(if_['8'].id);
                            }
                        else if ((ar_cross.includes('3') && ar_cross.includes('2')) || (ar_cross.includes('7') && ar_cross.includes('4')) || (ar_cross.includes('2') && ar_cross.includes('4'))){
                            if_['0'].classList.add('circle');
                            ar_circle.push(if_['0'].id);
                        }
                    }
                })
            }
            if (move === 2){
                setTimeout(function(){
                    if (['1','3','7','9'].includes(ar_circle[0]) && ['1','3','7','9'].includes(ar_cross[1])){
                        if (ar_circle.includes('1') && ar_circle.includes('3')){
                            if (ar_cross[2] === '2'){
                                if_['7'].classList.add('circle');
                                ar_circle.push(if_['7'].id);
                            }
                            else{
                                if_['1'].classList.add('circle');
                                ar_circle.push(if_['1'].id);
                            }
                        }
                        if (ar_circle.includes('3') && ar_circle.includes('9')){
                            if (ar_cross[2] === '6'){
                                if_['3'].classList.add('circle');
                                ar_circle.push(if_['3'].id);
                            }
                            else{
                                if_['5'].classList.add('circle');
                                ar_circle.push(if_['5'].id);
                            }
                        }
                        if (ar_circle.includes('7') && ar_circle.includes('9')){
                            if (ar_cross[2] === '8'){
                                if_['1'].classList.add('circle');
                                ar_circle.push(if_['1'].id);
                            }
                            else{
                                if_['7'].classList.add('circle');
                                ar_circle.push(if_['7'].id);
                            }
                        }
                        if (ar_circle.includes('1') && ar_circle.includes('7')){
                            if (ar_cross[2] === '4'){
                                if_['5'].classList.add('circle');
                                ar_circle.push(if_['5'].id);
                            }
                            else{
                                if_['3'].classList.add('circle');
                                ar_circle.push(if_['3'].id);
                            }
                        }
                    } 
                    if (['1','3','7','9'].includes(ar_circle[0]) && ['2','4','6','8'].includes(ar_cross[1])){
                        if (ar_cross[1] === '2'){
                            if (ar_circle[0] === '1'){
                                if (ar_cross[2] === '3'){
                                    if_['6'].classList.add('circle');
                                    ar_circle.push(if_['6'].id);
                                }
                                if (ar_cross[2] === '4'){
                                    if_['5'].classList.add('circle');
                                    ar_circle.push(if_['5'].id);
                                }
                                if (ar_cross[2] === '6' || ar_cross[2] === '9'){
                                    if_['3'].classList.add('circle');
                                    ar_circle.push(if_['3'].id);
                                }
                                if (ar_cross[2] === '7'){
                                    if_['2'].classList.add('circle');
                                    ar_circle.push(if_['2'].id);
                                }
                            }
                            if (ar_circle[0] === '3'){
                                if (ar_cross[2] === '1'){
                                    if_['8'].classList.add('circle');
                                    ar_circle.push(if_['8'].id);
                                }
                                if (ar_cross[2] === '4' || ar_cross[2] === '7'){
                                    if_['5'].classList.add('circle');
                                    ar_circle.push(if_['5'].id);
                                }
                                if (ar_cross[2] === '6'){
                                    if_['3'].classList.add('circle');
                                    ar_circle.push(if_['3'].id);
                                }
                                if (ar_cross[2] === '9'){
                                    if_['0'].classList.add('circle');
                                    ar_circle.push(if_['0'].id);
                                }
                            }
                            if (ar_circle[0] === '7'){
                                if (ar_cross[2] === '9'){
                                    if_['0'].classList.add('circle');
                                    ar_circle.push(if_['0'].id);
                                }
                                else{
                                    if_['8'].classList.add('circle');
                                    ar_circle.push(if_['8'].id);
                                } 
                            }
                            if (ar_circle[0] === '9'){
                                if (ar_cross[2] === '7'){
                                    if_['2'].classList.add('circle');
                                    ar_circle.push(if_['2'].id);
                                }
                                else{
                                    if_['6'].classList.add('circle');
                                    ar_circle.push(if_['6'].id);
                                }
                            }
                        }
                        else if(ar_cross[1] === '4'){
                            if (ar_circle[0] === '1'){
                                if (ar_cross[2] === '2'){
                                    if_['7'].classList.add('circle');
                                    ar_circle.push(if_['7'].id);
                                }
                                if (ar_cross[2] === '3'){
                                    if_['6'].classList.add('circle');
                                    ar_circle.push(if_['6'].id);
                                }
                                if (ar_cross[2] === '8' || ar_cross[2] === '9'){
                                    if_['1'].classList.add('circle');
                                    ar_circle.push(if_['1'].id);
                                }
                                if (ar_cross[2] === '7'){
                                    if_['2'].classList.add('circle');
                                    ar_circle.push(if_['2'].id);
                                }
                            }
                            if (ar_circle[0] === '7'){
                                if (ar_cross[2] === '1'){
                                    if_['8'].classList.add('circle');
                                    ar_circle.push(if_['8'].id);
                                }
                                if (ar_cross[2] === '2' || ar_cross[2] === '3'){
                                    if_['7'].classList.add('circle');
                                    ar_circle.push(if_['7'].id);
                                }
                                if (ar_cross[2] === '8'){
                                    if_['1'].classList.add('circle');
                                    ar_circle.push(if_['1'].id);
                                }
                                if (ar_cross[2] === '9'){
                                    if_['0'].classList.add('circle');
                                    ar_circle.push(if_['0'].id);
                                }
                            }
                            if (ar_circle[0] === '3'){
                                if (ar_cross[2] === '9'){
                                    if_['0'].classList.add('circle');
                                    ar_circle.push(if_['0'].id);
                                }
                                else{
                                    if_['8'].classList.add('circle');
                                    ar_circle.push(if_['8'].id);
                                } 
                            }
                            if (ar_circle[0] === '9'){
                                if (ar_cross[2] === '3'){
                                    if_['6'].classList.add('circle');
                                    ar_circle.push(if_['6'].id);
                                }
                                else{
                                    if_['2'].classList.add('circle');
                                    ar_circle.push(if_['2'].id);
                                }
                            }
                        }
                        else if(ar_cross[1] === '6'){
                            if (ar_circle[0] === '1'){
                                if (ar_cross[2] === '7'){
                                    if_['2'].classList.add('circle');
                                    ar_circle.push(if_['2'].id);
                                }
                                else{
                                    if_['6'].classList.add('circle');
                                    ar_circle.push(if_['6'].id);
                                }
                            }
                            if (ar_circle[0] === '7'){
                                if (ar_cross[2] === '1'){
                                    if_['8'].classList.add('circle');
                                    ar_circle.push(if_['8'].id);
                                }
                                else{
                                    if_['0'].classList.add('circle');
                                    ar_circle.push(if_['0'].id);
                                }
                            }
                            if (ar_circle[0] === '3'){
                                if (ar_cross[2] === '1'){
                                    if_['8'].classList.add('circle');
                                    ar_circle.push(if_['8'].id);
                                }
                                if (ar_cross[2] === '2'){
                                    if_['7'].classList.add('circle');
                                    ar_circle.push(if_['7'].id);
                                }
                                if (ar_cross[2] === '8'){
                                    if_['1'].classList.add('circle');
                                    ar_circle.push(if_['1'].id);
                                }
                                if (ar_cross[2] === '9' || ar_cross[2] === '7'){
                                    if_['0'].classList.add('circle');
                                    ar_circle.push(if_['0'].id);
                                } 
                            }
                            if (ar_circle[0] === '9'){
                                if (ar_cross[2] === '1' || ar_cross[2] === '3'){
                                    if_['6'].classList.add('circle');
                                    ar_circle.push(if_['6'].id);
                                }
                                if (ar_cross[2] === '2'){
                                    if_['7'].classList.add('circle');
                                    ar_circle.push(if_['7'].id);
                                }
                                if (ar_cross[2] === '8'){
                                    if_['1'].classList.add('circle');
                                    ar_circle.push(if_['1'].id);
                                }
                                if (ar_cross[2] === '7'){
                                    if_['2'].classList.add('circle');
                                    ar_circle.push(if_['2'].id);
                                }
                            }
                        }
                        else{
                            if (ar_circle[0] === '1'){
                                if (ar_cross[2] === '3'){
                                    if_['6'].classList.add('circle');
                                    ar_circle.push(if_['6'].id);
                                }
                                else{
                                    if_['2'].classList.add('circle');
                                    ar_circle.push(if_['2'].id);
                                }
                            }
                            if (ar_circle[0] === '3'){
                                if (ar_cross[2] === '1'){
                                    if_['8'].classList.add('circle');
                                    ar_circle.push(if_['8'].id);
                                }
                                else{
                                    if_['0'].classList.add('circle');
                                    ar_circle.push(if_['0'].id);
                                }
                            }
                            if (ar_circle[0] === '7'){
                                if (ar_cross[2] === '1'){
                                    if_['8'].classList.add('circle');
                                    ar_circle.push(if_['8'].id);
                                }
                                if (ar_cross[2] === '4'){
                                    if_['5'].classList.add('circle');
                                    ar_circle.push(if_['5'].id);
                                }
                                if (ar_cross[2] === '6'){
                                    if_['3'].classList.add('circle');
                                    ar_circle.push(if_['3'].id);
                                }
                                if (ar_cross[2] === '3' || ar_cross[2] === '9'){
                                    if_['0'].classList.add('circle');
                                    ar_circle.push(if_['0'].id);
                                } 
                            }
                            if (ar_circle[0] === '9'){
                                if (ar_cross[2] === '1' || ar_cross[2] === '7'){
                                    if_['2'].classList.add('circle');
                                    ar_circle.push(if_['2'].id);
                                }
                                if (ar_cross[2] === '4'){
                                    if_['5'].classList.add('circle');
                                    ar_circle.push(if_['5'].id);
                                }
                                if (ar_cross[2] === '6'){
                                    if_['3'].classList.add('circle');
                                    ar_circle.push(if_['3'].id);
                                }
                                if (ar_cross[2] === '3'){
                                    if_['6'].classList.add('circle');
                                    ar_circle.push(if_['6'].id);
                                }
                            }
                        }
                    }
                    // else{

                    // }
                    winner_func(ar_circle, 'Computer')
                },0)
            }    
        }
        ++move
        if (id_circle.classList.contains('play')){
            target.classList.add('circle')
            ar_circle.push(target.id);
            winner_func(ar_circle, 'Player')
        }
    }
}

// режим для 2-ух игроков
function click2(event){
    let target = event.target.closest('.grid__item');
    let cross = document.querySelectorAll('.cross')
    let circle = document.querySelectorAll('.circle')
    
    if (target && !(target.classList.contains('circle') || target.classList.contains('cross'))){
        console.log('click2')
            if ((cross.length + circle.length) % 2 === 0){
                target.classList.add('cross');
                ar_cross.push(target.id);
                winner_func(ar_cross, 'Player 1')             
            }
            else{
                target.classList.add('circle');
                ar_circle.push(target.id);
                winner_func(ar_circle, 'Player 2')
            }
    }
    else{
        return;
    }
}

// анимация клеток
document.addEventListener('mouseover', color)
document.addEventListener('mouseout', color)
function color(event){
    let target = event.target.closest('.grid__item');

    if (target){
        target.classList.toggle('active');
    }
    else{
        return;
    }
}

// обнуление игры и вызов меню
document.addEventListener('click', new_game)
function new_game(event){
    if (event.target.closest('.button__reload') || event.target.closest('.button__menu')){
        if (players.classList.contains('play')){
            document.addEventListener('click', click2)
        }
        if (player.classList.contains('play')){
            document.addEventListener('click', click)
        }
        ar_cross = []
        ar_circle = []
        move = 0
        if_ = document.querySelectorAll('.grid__item')
        for (let i of if_){
            i.classList = 'grid__item'
        }
    }
    if (event.target.closest('.button__menu')){
        menu.style.display = ''
    }
}


