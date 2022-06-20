const mic = document.getElementById('mic');
const screen = document.getElementById('screen');
const panelData = document.getElementById('panel-data');

const commands = ['mangia', 'balla', 'dormi'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recog = new SpeechRecognition();


function onStart(){
    console.log('start listening...');
    panelData.classList.add('listening');
    recog.start();
}

function onResult(e){
    const testo = e.results[0][0].transcript;
    console.log(testo);
    
    const action = commands.find(function(command){
        return testo.toLowerCase().includes(command);
    });

    const actionClassname = 'codigotchi-screen_' + action;
    screen.classList.add(actionClassname);

    panelData.classList.remove('listening');


    setTimeout(function() {
        screen.classList.remove(actionClassname);
    }, 2000);
    
}

mic.addEventListener('click', onStart);
recog.addEventListener('result', onResult);




