var Location1 = 3;
var Location2 = 5;
var Location3 = 0;

var guess;
var guesses = 0;
var hits = 0;
var isSunk = false;

while (isSunk == false) {

    guess = prompt("Telsiz: Torpido hazır efendim!, Hangi koordinatlara ateşlememizi emredersiniz? (0,7)")
    
    if (guess < 0 || guess > 7) {
        alert("Telsiz: Koordinat anlaşılamadı efendim! (0,7)");
    } else {

            guesses++;
            if (guess == Location1 || guess == Location2 || guess == Location3){
                alert("Telsiz: Hedef vuruldu!");
                hits++;
                    if(hits == 3){
                        isSunk = true;
                        alert("Telsiz: Hedef batırıldı!");
                    }
            }
            else {
                alert("Telsiz: Hedef vurulamadı!");
            }
    }
}
var stats = guesses + "tahminde gemi batırıldı." + "İsabet oranınız: " + (3/guesses);
alert(stats);