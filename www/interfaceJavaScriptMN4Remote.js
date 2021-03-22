
let sippoUri = 'https://servicios.bazdigital.com/sippohub/'

let config = {
//  call: {
    buttonset: {
      enabled: false,
      buttons: {
          muteAudio: false,
          muteVideo: false,
          toggleCamera: false,
          screensharing: false,
          fullscreen: false,
          hangup: false,
      }
   }
//  }
}
let target = document.getElementById('target');
let c2c = new Click2Call(sippoUri, target, config);
//let c2c = new Click2Call(sippoUri, target);

c2c.on('registered', () => {
  console.log('Event: registrado')
  if (/Android|webOS/i.test(navigator.userAgent)) {
    llamar("agentebaz1@bancoazteca.com")
  }else
    llamar("agentebaz1@bancoazteca.com")
});


c2c.on('deregistered', () => console.log('Event: deregistered'));


c2c.on('callEstablished', () => {
  console.log('Event: callEstablished')
  if (/Android|webOS/i.test(navigator.userAgent)) {
    
    pantallaCompleta();
  }
});
c2c.on('callFinished', () => {
  console.log('Event: callFinished')
  if (/Android|webOS/i.test(navigator.userAgent)) {
    window.close();
  }else{
    window.close();
  }
});

//function call() {
//  let anonymousDomain = '@anzen.com';
//  //c2c.register(anonymousDomain).then(() => c2c.call('user3@anzen.com'));
//  c2c.register(anonymousDomain).then(() => c2c.call('user1@bancoazteca.com'));
//}

function hangup() {
  c2c.hangup().then(() => c2c.deregister());
}

function cambiarCamara(){
    c2c.callSvc.toggleCamera()
}


function pantallaCompleta(){
        var x = document.getElementsByClassName("_2bU0GRid3TB3d1RLqGSXGS");
        x[0].removeChild(x[0].children[1])
        x[0].removeChild(x[0].children[1])
        observer.observe(targetNode[0], configO);
}


const targetNode = document.getElementsByClassName('_2NFIO2QPFNzO1v9rQGTQXu');
// Options for the observer (which mutations to observe)
const configO = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
                var v = document.getElementsByClassName("_3v8-cLBftzpYXSNlGyovk1")
                console.log(v[0])
                var vid = v[0].firstElementChild
                vid.style.height = "100%"
                vid.style.objectFit = "cover"
                observer.disconnect();
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);


function register(){
   let anonymousDomain = '@bancoazteca.com';
//   c2c.register(anonymousDomain)
   c2c.register("agente2@quobis","test1234")
}

function llamar(agent){
      console.log("*** Llamando a: ****")
      console.log(agent)
      console.log("*******")
    c2c.call(agent)
}


register();