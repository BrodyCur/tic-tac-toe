document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.querySelector('.game-board');
    let boxes = document.querySelectorAll('.box');
    let box1 = document.querySelector('#b1');
    let box2 = document.querySelector('#b2');
    let box3 = document.querySelector('#b3');
    let box4 = document.querySelector('#b4');
    let box5 = document.querySelector('#b5');
    let box6 = document.querySelector('#b6');
    let box7 = document.querySelector('#b7');
    let box8 = document.querySelector('#b8');
    let box9 = document.querySelector('#b9');
    const row1 = document.querySelectorAll('.row1');
    const row2 = document.querySelectorAll('.row2');
    const row3 = document.querySelectorAll('.row3');
    const col1 = document.querySelectorAll('.col1');
    const col2 = document.querySelectorAll('.col2');
    const col3 = document.querySelectorAll('.col3');

    let playerTurn = 'X';

    function reset() {
        playerTurn = 'X';
        boxes.forEach((box) => {
            box.innerText = '';
            box.classList.remove('filled');
        });
    };

    function draw() {
            if (box1.classList.contains('filled') && box2.classList.contains('filled') && box3.classList.contains('filled') && box4.classList.contains('filled') && box5.classList.contains('filled') && box6.classList.contains('filled') && box7.classList.contains('filled') && box8.classList.contains('filled') && box9.classList.contains('filled') && !winner()) {
                alert('Draw!!');
                reset();
            }
    }

    function winner() {
        if (row1[0].innerText === 'X' && row1[1].innerText === 'X' && row1[2].innerText === 'X') {
            alert('Player X is the Winner Baby!!');
            reset();
        } else if (row1[0].innerText === 'O' && row1[1].innerText === 'O' && row1[2].innerText === 'O') {
            alert('Player O is the Winner Baby!!');
            reset();
        };

        if (row2[0].innerText === 'X' && row2[1].innerText === 'X' && row2[2].innerText === 'X') {
            alert('Player X is the Winner Baby!!');
            reset();
        } else if (row2[0].innerText === 'O' && row2[1].innerText === 'O' && row2[2].innerText === 'O') {
            alert('Player O is the Winner Baby!!');
            reset();
        };

        if (row3[0].innerText === 'X' && row3[1].innerText === 'X' && row3[2].innerText === 'X') {
            alert('Player X is the Winner Baby!!');
            reset();
        } else if (row3[0].innerText === 'O' && row3[1].innerText === 'O' && row3[2].innerText === 'O') {
            alert('Player O is the Winner Baby!!');
            reset();
        };

        if (col1[0].innerText === 'X' && col1[1].innerText === 'X' && col1[2].innerText === 'X') {
            alert('Player X is the Winner Baby!!');
            reset();
        } else if (col1[0].innerText === 'O' && col1[1].innerText === 'O' && col1[2].innerText === 'O') {
            alert('Player O is the Winner Baby!!');
            reset();
        };

        if (col2[0].innerText === 'X' && col2[1].innerText === 'X' && col2[2].innerText === 'X') {
            alert('Player X is the Winner Baby!!');
            reset();
        } else if (col2[0].innerText === 'O' && col2[1].innerText === 'O' && col2[2].innerText === 'O') {
            alert('Player O is the Winner Baby!!');
            reset();
        };

        if (col3[0].innerText === 'X' && col3[1].innerText === 'X' && col3[2].innerText === 'X') {
            alert('Player X is the Winner Baby!!');
            reset();
        } else if (col3[0].innerText === 'O' && col3[1].innerText === 'O' && col3[2].innerText === 'O') {
            alert('Player O is the Winner Baby!!');
            reset();
        };

        if (row1[0].innerText === 'X' && row2[1].innerText === 'X' && row3[2].innerText === 'X') {
            alert('Player X is the Winner Baby!!');
            reset();
        } else if (row1[0].innerText === 'O' && row2[1].innerText === 'O' && row3[2].innerText === 'O') {
            alert('Player O is the Winner Baby!!');
            reset();
        };

        if (row3[0].innerText === 'X' && row2[1].innerText === 'X' && row1[2].innerText === 'X') {
            alert('Player X is the Winner Baby!!');
            reset();
        } else if (row3[0].innerText === 'O' && row2[1].innerText === 'O' && row1[2].innerText === 'O') {
            alert('Player O is the Winner Baby!!');
            reset();
        };
    };

    gameBoard.addEventListener('click', (e) => {
        if (e.target.innerText) {
            alert("that's an illegal move friend.");
        } else if (!e.target.innerText && playerTurn === 'X') {
            e.target.innerText = playerTurn;
            e.target.classList.add('filled');
            playerTurn = 'O';
            setTimeout(winner, 200);
            setTimeout(draw, 200);
        } else if (!e.target.innerText && playerTurn === 'O') {
            e.target.innerText = playerTurn;
            e.target.classList.add('filled');
            playerTurn = 'X';
            setTimeout(winner, 200);
            setTimeout(draw, 200);
        };
    });
});


