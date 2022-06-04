let cello01buff = null;
let cello02buff = null;
let cello03buff = null;
let cello04buff = null;
let cello05buff = null;
let cello06buff = null;
let cello07buff = null;
let cello08buff = null;
let cello09buff = null;
let cello10buff = null;
let cello11buff = null;
let cello12buff = null;
let cello13buff = null;
let cello14buff = null;
let cello15buff = null;
let cello16buff = null;
let cello17buff = null;
let cello18buff = null;
let cello19buff = null;
let cello20buff = null;
let cello21buff = null;
let cello22buff = null;
let cello23buff = null;
let cello24buff = null;
let cello25buff = null;
let cello26buff = null;
let cello27buff = null;
let cello28buff = null;
let cello29buff = null;
let cello30buff = null;
let cello31buff = null;
let cello32buff = null;
let cello33buff = null;
let cello34buff = null;
let cello35buff = null;
let cello36buff = null;
let cello37buff = null;
let cello38buff = null;
let cello39buff = null;

let flute01buff = null;
let flute02buff = null;
let flute03buff = null;
let flute04buff = null;
let flute05buff = null;
let flute06buff = null;
let flute07buff = null;
let flute08buff = null;
let flute09buff = null;
let flute10buff = null;
let flute11buff = null;
let flute12buff = null;
let flute13buff = null;
let flute14buff = null;
let flute15buff = null;
let flute16buff = null;
let flute17buff = null;
let flute18buff = null;
let flute19buff = null;
let flute20buff = null;
let flute21buff = null;
let flute22buff = null;
let flute23buff = null;
let flute24buff = null;
let flute25buff = null;
let flute26buff = null;
let flute27buff = null;
let flute28buff = null;
let flute29buff = null;
let flute30buff = null;
let flute31buff = null;
let flute32buff = null;
let flute33buff = null;
let flute34buff = null;
let flute35buff = null;

let piano01buff = null;
let piano02buff = null;
let piano03buff = null;
let piano04buff = null;
let piano05buff = null;
let piano06buff = null;
let piano07buff = null;
let piano08buff = null;
let piano09buff = null;
let piano10buff = null;
let piano11buff = null;
let piano12buff = null;
let piano13buff = null;
let piano14buff = null;
let piano15buff = null;
let piano16buff = null;
let piano17buff = null;
let piano18buff = null;
let piano19buff = null;
let piano20buff = null;
let piano21buff = null;
let piano22buff = null;
let piano23buff = null;
let piano24buff = null;
let piano25buff = null;
let piano26buff = null;
let piano27buff = null;
let piano28buff = null;
let piano29buff = null;
let piano30buff = null;
let piano31buff = null;
let piano32buff = null;
let piano33buff = null;
let piano34buff = null;
let piano35buff = null;
let piano36buff = null;

let sine01buff = null;
let sine02buff = null;
let sine03buff = null;
let sine04buff = null;
let sine05buff = null;
let sine06buff = null;
let sine07buff = null;
let sine08buff = null;
let sine09buff = null;
let sine10buff = null;
let sine11buff = null;
let sine12buff = null;
let sine13buff = null;
let sine14buff = null;
let sine15buff = null;

const loadclick = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/click.wav");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => clickbuff = data);
	};
	request.send();
};

const playclick = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = clickbuff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

//CELLO///////////////////////////////////////////////////////////////////////////////////////////////////

const loadcello01 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello01.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello01buff = data);
	};
	request.send();
};

const playcello01 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello01buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello02.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello02buff = data);
	};
	request.send();
};

const playcello02 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello02buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello03.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello03buff = data);
	};
	request.send();
};

const playcello03 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello03buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello04.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello04buff = data);
	};
	request.send();
};

const playcello04 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello04buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello05.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello05buff = data);
	};
	request.send();
};

const playcello05 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello05buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello06.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello06buff = data);
	};
	request.send();
};

const playcello06 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello06buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello07.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello07buff = data);
	};
	request.send();
};

const playcello07 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello07buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello08.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello08buff = data);
	};
	request.send();
};

const playcello08 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello08buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello09.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello09buff = data);
	};
	request.send();
};

const playcello09 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello09buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello10 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello10.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello10buff = data);
	};
	request.send();
};

const playcello10 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello10buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};


const loadcello11 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello11.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello11buff = data);
	};
	request.send();
};

const playcello11 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello11buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello12 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello12.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello12buff = data);
	};
	request.send();
};

const playcello12 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello12buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello13 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello13.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello13buff = data);
	};
	request.send();
};

const playcello13 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello13buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello14 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello14.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello14buff = data);
	};
	request.send();
};

const playcello14 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello14buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello15 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello15.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello15buff = data);
	};
	request.send();
};

const playcello15 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello15buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello16 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello16.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello16buff = data);
	};
	request.send();
};

const playcello16 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello16buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello17 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello17.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello17buff = data);
	};
	request.send();
};

const playcello17 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello17buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello18 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello18.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello18buff = data);
	};
	request.send();
};

const playcello18 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello18buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello19 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello19.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello19buff = data);
	};
	request.send();
};

const playcello19 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello19buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello20 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello20.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello20buff = data);
	};
	request.send();
};

const playcello20 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello20buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};


const loadcello21 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello21.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello21buff = data);
	};
	request.send();
};

const playcello21 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello21buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello22 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello22.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello22buff = data);
	};
	request.send();
};

const playcello22 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello22buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello23 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello23.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello23buff = data);
	};
	request.send();
};

const playcello23 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello23buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello24 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello24.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello24buff = data);
	};
	request.send();
};

const playcello24 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello24buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello25 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello25.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello25buff = data);
	};
	request.send();
};

const playcello25 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello25buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello26 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello26.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello26buff = data);
	};
	request.send();
};

const playcello26 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello26buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello27 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello27.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello27buff = data);
	};
	request.send();
};

const playcello27 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello27buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello28 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello28.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello28buff = data);
	};
	request.send();
};

const playcello28 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello28buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello29 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello29.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello29buff = data);
	};
	request.send();
};

const playcello29 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello29buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello30 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello30.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello30buff = data);
	};
	request.send();
};

const playcello30 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello30buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};


const loadcello31 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello31.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello31buff = data);
	};
	request.send();
};

const playcello31 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello31buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello32 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello32.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello32buff = data);
	};
	request.send();
};

const playcello32 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello32buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello33 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello33.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello33buff = data);
	};
	request.send();
};

const playcello33 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello33buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello34 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello34.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello34buff = data);
	};
	request.send();
};

const playcello34 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello34buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello35 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello35.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello35buff = data);
	};
	request.send();
};

const playcello35 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello35buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello36 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello36.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello36buff = data);
	};
	request.send();
};

const playcello36 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello36buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello37 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello37.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello37buff = data);
	};
	request.send();
};

const playcello37 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello37buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello38 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello38.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello38buff = data);
	};
	request.send();
};

const playcello38 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello38buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadcello39 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/cello39.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => cello39buff = data);
	};
	request.send();
};

const playcello39 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = cello39buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

//FLUTE///////////////////////////////////////////////////////////////////////////////////////////////////


const loadflute01 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute01.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute01buff = data);
	};
	request.send();
};

const playflute01 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute01buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute02.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute02buff = data);
	};
	request.send();
};

const playflute02 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute02buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute03.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute03buff = data);
	};
	request.send();
};

const playflute03 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute03buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute04.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute04buff = data);
	};
	request.send();
};

const playflute04 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute04buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute05.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute05buff = data);
	};
	request.send();
};

const playflute05 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute05buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute06.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute06buff = data);
	};
	request.send();
};

const playflute06 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute06buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute07.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute07buff = data);
	};
	request.send();
};

const playflute07 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute07buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute08.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute08buff = data);
	};
	request.send();
};

const playflute08 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute08buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute09.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute09buff = data);
	};
	request.send();
};

const playflute09 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute09buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute10 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute10.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute10buff = data);
	};
	request.send();
};

const playflute10 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute10buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};


const loadflute11 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute11.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute11buff = data);
	};
	request.send();
};

const playflute11 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute11buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute12 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute12.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute12buff = data);
	};
	request.send();
};

const playflute12 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute12buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute13 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute13.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute13buff = data);
	};
	request.send();
};

const playflute13 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute13buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute14 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute14.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute14buff = data);
	};
	request.send();
};

const playflute14 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute14buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute15 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute15.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute15buff = data);
	};
	request.send();
};

const playflute15 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute15buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute16 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute16.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute16buff = data);
	};
	request.send();
};

const playflute16 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute16buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute17 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute17.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute17buff = data);
	};
	request.send();
};

const playflute17 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute17buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute18 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute18.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute18buff = data);
	};
	request.send();
};

const playflute18 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute18buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute19 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute19.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute19buff = data);
	};
	request.send();
};

const playflute19 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute19buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute20 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute20.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute20buff = data);
	};
	request.send();
};

const playflute20 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute20buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};


const loadflute21 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute21.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute21buff = data);
	};
	request.send();
};

const playflute21 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute21buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute22 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute22.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute22buff = data);
	};
	request.send();
};

const playflute22 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute22buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute23 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute23.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute23buff = data);
	};
	request.send();
};

const playflute23 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute23buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute24 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute24.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute24buff = data);
	};
	request.send();
};

const playflute24 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute24buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute25 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute25.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute25buff = data);
	};
	request.send();
};

const playflute25 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute25buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute26 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute26.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute26buff = data);
	};
	request.send();
};

const playflute26 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute26buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute27 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute27.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute27buff = data);
	};
	request.send();
};

const playflute27 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute27buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute28 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute28.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute28buff = data);
	};
	request.send();
};

const playflute28 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute28buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute29 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute29.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute29buff = data);
	};
	request.send();
};

const playflute29 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute29buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute30 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute30.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute30buff = data);
	};
	request.send();
};

const playflute30 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute30buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};


const loadflute31 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute31.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute31buff = data);
	};
	request.send();
};

const playflute31 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute31buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute32 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute32.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute32buff = data);
	};
	request.send();
};

const playflute32 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute32buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute33 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute33.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute33buff = data);
	};
	request.send();
};

const playflute33 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute33buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute34 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute34.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute34buff = data);
	};
	request.send();
};

const playflute34 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute34buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadflute35 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/flute35.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => flute35buff = data);
	};
	request.send();
};

const playflute35 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = flute35buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

//PIANO///////////////////////////////////////////////////////////////////////////////////////////////////


const loadpiano01 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano01.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano01buff = data);
	};
	request.send();
};

const playpiano01 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano01buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano02.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano02buff = data);
	};
	request.send();
};

const playpiano02 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano02buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano03.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano03buff = data);
	};
	request.send();
};

const playpiano03 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano03buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano04.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano04buff = data);
	};
	request.send();
};

const playpiano04 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano04buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano05.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano05buff = data);
	};
	request.send();
};

const playpiano05 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano05buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano06.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano06buff = data);
	};
	request.send();
};

const playpiano06 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano06buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano07.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano07buff = data);
	};
	request.send();
};

const playpiano07 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano07buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano08.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano08buff = data);
	};
	request.send();
};

const playpiano08 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano08buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano09.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano09buff = data);
	};
	request.send();
};

const playpiano09 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano09buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano10 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano10.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano10buff = data);
	};
	request.send();
};

const playpiano10 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano10buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};


const loadpiano11 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano11.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano11buff = data);
	};
	request.send();
};

const playpiano11 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano11buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano12 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano12.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano12buff = data);
	};
	request.send();
};

const playpiano12 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano12buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano13 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano13.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano13buff = data);
	};
	request.send();
};

const playpiano13 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano13buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano14 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano14.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano14buff = data);
	};
	request.send();
};

const playpiano14 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano14buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano15 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano15.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano15buff = data);
	};
	request.send();
};

const playpiano15 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano15buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano16 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano16.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano16buff = data);
	};
	request.send();
};

const playpiano16 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano16buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano17 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano17.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano17buff = data);
	};
	request.send();
};

const playpiano17 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano17buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano18 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano18.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano18buff = data);
	};
	request.send();
};

const playpiano18 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano18buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano19 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano19.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano19buff = data);
	};
	request.send();
};

const playpiano19 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano19buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano20 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano20.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano20buff = data);
	};
	request.send();
};

const playpiano20 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano20buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};


const loadpiano21 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano21.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano21buff = data);
	};
	request.send();
};

const playpiano21 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano21buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano22 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano22.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano22buff = data);
	};
	request.send();
};

const playpiano22 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano22buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano23 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano23.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano23buff = data);
	};
	request.send();
};

const playpiano23 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano23buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano24 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano24.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano24buff = data);
	};
	request.send();
};

const playpiano24 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano24buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano25 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano25.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano25buff = data);
	};
	request.send();
};

const playpiano25 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano25buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano26 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano26.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano26buff = data);
	};
	request.send();
};

const playpiano26 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano26buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano27 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano27.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano27buff = data);
	};
	request.send();
};

const playpiano27 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano27buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano28 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano28.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano28buff = data);
	};
	request.send();
};

const playpiano28 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano28buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano29 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano29.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano29buff = data);
	};
	request.send();
};

const playpiano29 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano29buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano30 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano30.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano30buff = data);
	};
	request.send();
};

const playpiano30 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano30buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};


const loadpiano31 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano31.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano31buff = data);
	};
	request.send();
};

const playpiano31 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano31buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano32 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano32.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano32buff = data);
	};
	request.send();
};

const playpiano32 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano32buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano33 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano33.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano33buff = data);
	};
	request.send();
};

const playpiano33 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano33buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano34 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano34.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano34buff = data);
	};
	request.send();
};

const playpiano34 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano34buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano35 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano35.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano35buff = data);
	};
	request.send();
};

const playpiano35 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano35buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadpiano36 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/piano36.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => piano36buff = data);
	};
	request.send();
};

const playpiano36 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = piano36buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};


//SINE///////////////////////////////////////////////////////////////////////////////////////////////////

const loadsine01 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine01.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine01buff = data);
	};
	request.send();
};

const playsine01 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine01buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadsine02 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine02.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine02buff = data);
	};
	request.send();
};

const playsine02 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine02buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadsine03 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine03.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine03buff = data);
	};
	request.send();
};

const playsine03 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine03buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadsine04 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine04.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine04buff = data);
	};
	request.send();
};

const playsine04 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine04buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadsine05 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine05.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine05buff = data);
	};
	request.send();
};

const playsine05 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine05buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadsine06 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine06.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine06buff = data);
	};
	request.send();
};

const playsine06 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine06buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadsine07 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine07.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine07buff = data);
	};
	request.send();
};

const playsine07 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine07buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadsine08 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine08.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine08buff = data);
	};
	request.send();
};

const playsine08 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine08buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadsine09 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine09.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine09buff = data);
	};
	request.send();
};

const playsine09 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine09buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadsine10 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine10.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine10buff = data);
	};
	request.send();
};

const playsine10 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine10buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};


const loadsine11 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine11.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine11buff = data);
	};
	request.send();
};

const playsine11 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine11buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadsine12 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine12.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine12buff = data);
	};
	request.send();
};

const playsine12 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine12buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadsine13 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine13.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine13buff = data);
	};
	request.send();
};

const playsine13 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine13buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadsine14 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine14.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine14buff = data);
	};
	request.send();
};

const playsine14 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine14buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};

const loadsine15 = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "./snd/sine15.mp3");
	request.responseType = "arraybuffer";
	request.onload = function() {
	let undecodedAudio = request.response;
	audioCtx.decodeAudioData(undecodedAudio, (data) => sine15buff = data);
	};
	request.send();
};

const playsine15 = () => {
	const source = audioCtx.createBufferSource();
  	source.buffer = sine15buff;
	source.connect(masterGain).connect(audioCtx.destination);
 	source.start(audioCtx.currentTime);
};