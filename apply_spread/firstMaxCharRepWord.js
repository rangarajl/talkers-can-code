<!DOCTYPE html>
<html>
<body>

<p>Click the button to find the first word with max repeated chars</p>

<button onclick="LetterCount('they are standing on the floor')">Try it</button>

<p id="demo"></p>

<script>

function LetterCount(str) {
// cases to consider:
// they are standing on the floor - floor
// hello apple pie - hello
// apple the greatest fruit -  greatest
// various cases
// single word with repitition - umbrella,understand
// single word without repition - claps
// other words - "" single space new line and other ascii non printable characters -1
// are number strings also considered?
// multiple words with repition:
// null string - -1
if(str === null || str === '')
return -1;
var strArr = str.split(' ');
var repeatCount = []; // repeatCount = [1,0,2,0]
for (i=0;i<strArr.length;i++){// strArr = ["apple","the","greatest"."fruit"]
    var sortedWord = strArr[i].split('').sort().join(''); // aelpp,eht,aeegrstt,
    var repeat = 0; // track of repeition for that word
    for(j=0;j<sortedWord.length-1;j++){ // since u r looking ahead loop until the last but one char
        if(sortedWord.charAt(j)===sortedWord.charAt(j+1)){ // if p == p or e==e or t==t
            repeat ++;
        }
    }

    repeatCount.push(repeat); // [1] for the 1st word, [1,0] after second word and so on
}

    // max of repeatArr
    if (Math.max.apply(null, repeatCount)> 0) {
        var firstMaxRepWord = strArr[repeatCount.indexOf(Math.max.apply(null, repeatCount))];
        document.getElementById("demo").innerHTML = firstMaxRepWord;

    }
    else{
  document.getElementById("demo").innerHTML = "-1"; // no repitions case
    }



}

</script>

</body>
</html>
