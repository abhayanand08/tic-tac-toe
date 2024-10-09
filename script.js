let square = document.querySelectorAll('.boxes')
console.log(square)

let resetbtn = document.querySelector('.reset-btn')
let turn = true;

const allpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let cnt = 0;

square.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Square is clicked");
        if(turn){
            box.innerText = "O";
            turn = false;
        }else{
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        cnt++;

        let isWinner = check_winner();
        if(cnt === 9 && !isWinner){
            game_draw();
        }
    });
});

resetbtn.addEventListener("click", () => {
    console.log("reset button is clicked")
    cnt = 0;
    turn = true;
    enable_game();
});

const game_draw = () => {
    console.log("Game is a Draw")
    disable_game();
};

const disable_game = () => {
    for(let it of square){
        it.disabled = true;
    }
};

const enable_game = () => {
    for(let it of square){
        it.disabled = false;
        it.innerText = "";
    }
};

const check_winner = () => {
    for(let pattern of allpattern){
        let val1 = square[pattern[0]].innerText;
        let val2 = square[pattern[1]].innerText;
        let val3 = square[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3) {
            console.log("Winner", val3);
            disable_game(); 
            return true;}
        }
    }
};