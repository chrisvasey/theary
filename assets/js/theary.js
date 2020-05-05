// Play (an ascending) (G)(Maj7) (Arpeggio) starting from the (3rd) on the (D) String.
// Play (a descending) (D)(7) (Arpeggio)
// Play {direction} {note}{chordType} Arpeggio starting from the {interval} on the {guitarString} String.

var direction = ['an ascending', 'a descending'];
var note = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#'];
var chordType = ['maj7', 'min7', '7'];
var interval = ['1st', '3rd', '5th', '7th'];
var guitarString = ['Low E', 'A', 'D', 'G', 'B', 'High E'];

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateArp() {
    var output = "Play " + randomItem(direction) + " <code>" + randomItem(note) + randomItem(chordType) + "</code> arpeggio starting from the <code>" + randomItem(interval) + "</code> on the <code>" + randomItem(guitarString) + "</code> string.";
    console.log(output);

    //Output to website
    $('#output').html(output);
}

generateArp();