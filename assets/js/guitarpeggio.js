/*
    We want to deplay a random combination of options in a format that will read like this:
    "Play (an ascending) (G)(Maj7) (Arpeggio) starting from the (3rd) on the (D) String."
*/

/*
    Here we declare our options
*/
var direction = ['an ascending <i class="fa fa-arrow-up"></i>', 'a descending <i class="fa fa-arrow-down"></i>'];
var note = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#'];
var chordType = ['maj7', 'min7', '7'];
var interval = ['1st', '3rd', '5th', '7th'];
var guitarString = ['Low E', 'A', 'D', 'G', 'B', 'High E'];

/*
    This function can be used to get a random item from an array.
    We will pass in the array we want a random item from, it will return a single item.
*/
function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/*
    Here we will build a string in with the veriables above in the following format:
    "Play {direction} {note}{chordType} Arpeggio starting from the {interval} on the {guitarString} string."
    To make it look nicer in the browser we will wrap the random items in <code></code> tags, this makes them pink 🦩
*/
function generateArp() {
    //Here we will use the "randomItem()" function to grab a random option from our above arrays, we will then build a string in the format we need.
    var output = "Play " + randomItem(direction) + " <code>" + randomItem(note) + randomItem(chordType) + "</code> arpeggio starting from the <code>" + randomItem(interval) + "</code> on the <code>" + randomItem(guitarString) + "</code> string.";
    //This is used to output our new string to the <h3> title tag witht he id of "output"
    $('#output').html(output);

    //Increment the amount completed
    amountCompleted++;

    //Check to see if they have met their goal
    if (amountCompleted == (parseInt(goalArpeggio) + 1)) {
        goalComplete();
    } else {
        if (amountCompleted == goalArpeggio) {
            $('#nextArp').text('Complete Arpeggio');
        }
        $('#amountCompleted').text(amountCompleted);
    }
}

var goalArpeggio = null;
var amountCompleted = 0;

function setupArpeggio() {
    //Get value from the arp amount input box, then hide it
    goalArpeggio = $('#arpInput').val();

    //Check for input
    if (goalArpeggio == '' || goalArpeggio == 0) {
        return alert('Please enter a number!')
    }

    $('#arpInput').toggleClass('hidden');
    $('#genArp').toggleClass('hidden');

    //Set up 0/22 output
    $('#maxAmount').text(goalArpeggio);
    $('#completedOutput').toggleClass('hidden');


    //Show the button for next arp
    $('#nextArp').toggleClass('hidden');

    //Generate first arp
    generateArp();
}

function goalComplete() {
    $('#output').html('Well done! Now do another ' + goalArpeggio);
    $('#startAgain').toggleClass('hidden');
    $('#nextArp').toggleClass('hidden');
    $('#arpInput').val('');
}