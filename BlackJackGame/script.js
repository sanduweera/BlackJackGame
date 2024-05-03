function main() {

    let confirm = document.getElementById("mainResult").innerHTML;
    if (confirm == "You LOST!") {
        alert("Game over! Please restart the game");
    } else {

        //generate random card
        let x;
        do {
            x = Math.floor(Math.random() * 100 / 7.6);
        } while(x == 0); //to exclude 0

        //current total
        let currentTT = parseInt(document.getElementById("result").innerHTML);
        let total = currentTT + x;
        document.getElementById("result").innerHTML = total;

        //condition
        if(total < 21){
            document.getElementById("mainResult").innerHTML = "Generate another card?";
        } else if(total == 21){
            document.getElementById("mainResult").innerHTML = "You have WON!!";
            alert("Congratulations!");
            document.getElementById("btn-res").style.display = "block";
        } else if (total > 21){
            document.getElementById("mainResult").innerHTML = "You LOST!";
            alert("Lost :( Click restart to play again");
            document.getElementById("btn-res").style.display = "block";
        }

        //add image
        var img = document.createElement("img"); //aluthen img ekk create krgnn
        img.src = "images/" + x + ".png";
        img.height = 300;

        document.body.appendChild(img);

        
    }
}

//restar the game
function restart() {
    location.reload();
}