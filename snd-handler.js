
// //function for getting audio data?
// function onProcess(e) {
// var leftBuffer = e.inputBuffer.getChannelData(0);
// var rightBuffer = e.inputBuffer.getChannelData(1);
// checkClipping(leftBuffer);
// checkClipping(rightBuffer);
// }


//durations
const celloDurations = [11,13,10,16,10,14,13,16,16,7,4,10,11,13,14,7,10,4,6,13,11,5,14,13,5,5,5,4,4,4,12,15,4,4,15,4,12,14,13];
const pianoDurations = [8,13,14,12,18,24,16,8,8,15,22,14,21,13,36,31,11,8,14,15,17,9,23,19,15,19,18,29,9,11,10,15,19,10,8,13];
const fluteDurations = [15,16,4,13,4,13,13,12,14,9,11,9,22,14,6,3,3,12,8,11,13,12,11,12,15,13,12,4,16,3,10,15,10,3,4];
const sineDurations = [39,38,19,15,37,14,19,40,39,44,48,35,17,17,47];

//sounds
function playCelloSound()
{
    if(canPlayCello == true)
    {
        canPlayCello = false;
        let snd = randomInt(38); //amount of sounds
        if(snd == 0) { loadcello01(); playcello01(); }
        if(snd == 1) { loadcello02(); playcello02(); }
        if(snd == 2) { loadcello03(); playcello03(); }
        if(snd == 3) { loadcello04(); playcello04(); }
        if(snd == 4) { loadcello05(); playcello05(); }
        if(snd == 5) { loadcello06(); playcello06(); }
        if(snd == 6) { loadcello07(); playcello07(); }
        if(snd == 7) { loadcello08(); playcello08(); }
        if(snd == 8) { loadcello09(); playcello09(); }
        if(snd == 9) { loadcello10(); playcello10(); }
        if(snd == 10) { loadcello11(); playcello11(); }
        if(snd == 11) { loadcello12(); playcello12(); }
        if(snd == 12) { loadcello13(); playcello13(); }
        if(snd == 13) { loadcello14(); playcello14(); }
        if(snd == 14) { loadcello15(); playcello15(); }
        if(snd == 15) { loadcello16(); playcello16(); }
        if(snd == 16) { loadcello17(); playcello17(); }
        if(snd == 17) { loadcello18(); playcello18(); }
        if(snd == 18) { loadcello19(); playcello19(); }
        if(snd == 19) { loadcello20(); playcello20(); }
        if(snd == 20) { loadcello21(); playcello21(); }
        if(snd == 21) { loadcello22(); playcello22(); }
        if(snd == 22) { loadcello23(); playcello23(); }
        if(snd == 23) { loadcello24(); playcello24(); }
        if(snd == 24) { loadcello25(); playcello25(); }
        if(snd == 25) { loadcello26(); playcello26(); }
        if(snd == 26) { loadcello27(); playcello27(); }
        if(snd == 27) { loadcello28(); playcello28(); }
        if(snd == 28) { loadcello29(); playcello29(); }
        if(snd == 29) { loadcello30(); playcello30(); }
        if(snd == 30) { loadcello31(); playcello31(); }
        if(snd == 31) { loadcello32(); playcello32(); }
        if(snd == 32) { loadcello33(); playcello33(); }
        if(snd == 33) { loadcello34(); playcello34(); }
        if(snd == 34) { loadcello35(); playcello35(); }
        if(snd == 35) { loadcello36(); playcello36(); }
        if(snd == 36) { loadcello37(); playcello37(); }
        if(snd == 37) { loadcello38(); playcello38(); }
        if(snd == 38) { loadcello39(); playcello39(); }
       
        let waitTime = (celloDurations[snd]*1000) + randomInt(5000) + 4000;

        setTimeout(() => {
            canPlayCello = true;
        }, waitTime);
    }
}

function playPianoSound()
{
    if(canPlayPiano == true)
    {
        canPlayPiano = false;
        let snd = randomInt(35); //amount of sounds
        if(snd == 0) { loadpiano01(); playpiano01(); }
        if(snd == 1) { loadpiano02(); playpiano02(); }
        if(snd == 2) { loadpiano03(); playpiano03(); }
        if(snd == 3) { loadpiano04(); playpiano04(); }
        if(snd == 4) { loadpiano05(); playpiano05(); }
        if(snd == 5) { loadpiano06(); playpiano06(); }
        if(snd == 6) { loadpiano07(); playpiano07(); }
        if(snd == 7) { loadpiano08(); playpiano08(); }
        if(snd == 8) { loadpiano09(); playpiano09(); }
        if(snd == 9) { loadpiano10(); playpiano10(); }
        if(snd == 10) { loadpiano11(); playpiano11(); }
        if(snd == 11) { loadpiano12(); playpiano12(); }
        if(snd == 12) { loadpiano13(); playpiano13(); }
        if(snd == 13) { loadpiano14(); playpiano14(); }
        if(snd == 14) { loadpiano15(); playpiano15(); }
        if(snd == 15) { loadpiano16(); playpiano16(); }
        if(snd == 16) { loadpiano17(); playpiano17(); }
        if(snd == 17) { loadpiano18(); playpiano18(); }
        if(snd == 18) { loadpiano19(); playpiano19(); }
        if(snd == 19) { loadpiano20(); playpiano20(); }
        if(snd == 20) { loadpiano21(); playpiano21(); }
        if(snd == 21) { loadpiano22(); playpiano22(); }
        if(snd == 22) { loadpiano23(); playpiano23(); }
        if(snd == 23) { loadpiano24(); playpiano24(); }
        if(snd == 24) { loadpiano25(); playpiano25(); }
        if(snd == 25) { loadpiano26(); playpiano26(); }
        if(snd == 26) { loadpiano27(); playpiano27(); }
        if(snd == 27) { loadpiano28(); playpiano28(); }
        if(snd == 28) { loadpiano29(); playpiano29(); }
        if(snd == 29) { loadpiano30(); playpiano30(); }
        if(snd == 30) { loadpiano31(); playpiano31(); }
        if(snd == 31) { loadpiano32(); playpiano32(); }
        if(snd == 32) { loadpiano33(); playpiano33(); }
        if(snd == 33) { loadpiano34(); playpiano34(); }
        if(snd == 34) { loadpiano35(); playpiano35(); }
        if(snd == 35) { loadpiano36(); playpiano36(); }
       
        let waitTime = (pianoDurations[snd]*1000) + randomInt(5000) + 4000;

        setTimeout(() => {
            canPlayPiano = true;
        }, waitTime);
    }
}

function playFluteSound()
{
    if(canPlayFlute == true)
    {
        canPlayFlute = false;
        let snd = randomInt(34); //amount of sounds
        if(snd == 0) { loadflute01(); playflute01(); }
        if(snd == 1) { loadflute02(); playflute02(); }
        if(snd == 2) { loadflute03(); playflute03(); }
        if(snd == 3) { loadflute04(); playflute04(); }
        if(snd == 4) { loadflute05(); playflute05(); }
        if(snd == 5) { loadflute06(); playflute06(); }
        if(snd == 6) { loadflute07(); playflute07(); }
        if(snd == 7) { loadflute08(); playflute08(); }
        if(snd == 8) { loadflute09(); playflute09(); }
        if(snd == 9) { loadflute10(); playflute10(); }
        if(snd == 10) { loadflute11(); playflute11(); }
        if(snd == 11) { loadflute12(); playflute12(); }
        if(snd == 12) { loadflute13(); playflute13(); }
        if(snd == 13) { loadflute14(); playflute14(); }
        if(snd == 14) { loadflute15(); playflute15(); }
        if(snd == 15) { loadflute16(); playflute16(); }
        if(snd == 16) { loadflute17(); playflute17(); }
        if(snd == 17) { loadflute18(); playflute18(); }
        if(snd == 18) { loadflute19(); playflute19(); }
        if(snd == 19) { loadflute20(); playflute20(); }
        if(snd == 20) { loadflute21(); playflute21(); }
        if(snd == 21) { loadflute22(); playflute22(); }
        if(snd == 22) { loadflute23(); playflute23(); }
        if(snd == 23) { loadflute24(); playflute24(); }
        if(snd == 24) { loadflute25(); playflute25(); }
        if(snd == 25) { loadflute26(); playflute26(); }
        if(snd == 26) { loadflute27(); playflute27(); }
        if(snd == 27) { loadflute28(); playflute28(); }
        if(snd == 28) { loadflute29(); playflute29(); }
        if(snd == 29) { loadflute30(); playflute30(); }
        if(snd == 30) { loadflute31(); playflute31(); }
        if(snd == 31) { loadflute32(); playflute32(); }
        if(snd == 32) { loadflute33(); playflute33(); }
        if(snd == 33) { loadflute34(); playflute34(); }
        if(snd == 34) { loadflute35(); playflute35(); }
       
        let waitTime = (fluteDurations[snd]*1000) + randomInt(5000) + 4000;

        setTimeout(() => {
            canPlayFlute = true;
        }, waitTime);
    }
}

function playSine1Sound()
{
    if(canPlaySine1 == true)
    {
        canPlaySine1 = false;
        let snd = randomInt(14); //amount of sounds - 1
        if(snd == 0) { loadsine01(); playsine01(); }
        if(snd == 1) { loadsine02(); playsine02(); }
        if(snd == 2) { loadsine03(); playsine03(); }
        if(snd == 3) { loadsine04(); playsine04(); }
        if(snd == 4) { loadsine05(); playsine05(); }
        if(snd == 5) { loadsine06(); playsine06(); }
        if(snd == 6) { loadsine07(); playsine07(); }
        if(snd == 7) { loadsine08(); playsine08(); }
        if(snd == 8) { loadsine09(); playsine09(); }
        if(snd == 9) { loadsine10(); playsine10(); }
        if(snd == 10) { loadsine11(); playsine11(); }
        if(snd == 11) { loadsine12(); playsine12(); }
        if(snd == 12) { loadsine13(); playsine13(); }
        if(snd == 13) { loadsine14(); playsine14(); }
        if(snd == 14) { loadsine15(); playsine15(); }
       
        let waitTime = (sineDurations[snd]*1000) + randomInt(5000) + 2000;

        setTimeout(() => {
            canPlaySine1 = true;
        }, waitTime);
    }
}


function playSine2Sound()
{
    if(canPlaySine2 == true)
    {
        canPlaySine2 = false;
        let snd = randomInt(14); //amount of sounds - 1
        if(snd == 0) { loadsine01(); playsine01(); }
        if(snd == 1) { loadsine02(); playsine02(); }
        if(snd == 2) { loadsine03(); playsine03(); }
        if(snd == 3) { loadsine04(); playsine04(); }
        if(snd == 4) { loadsine05(); playsine05(); }
        if(snd == 5) { loadsine06(); playsine06(); }
        if(snd == 6) { loadsine07(); playsine07(); }
        if(snd == 7) { loadsine08(); playsine08(); }
        if(snd == 8) { loadsine09(); playsine09(); }
        if(snd == 9) { loadsine10(); playsine10(); }
        if(snd == 10) { loadsine11(); playsine11(); }
        if(snd == 11) { loadsine12(); playsine12(); }
        if(snd == 12) { loadsine13(); playsine13(); }
        if(snd == 13) { loadsine14(); playsine14(); }
        if(snd == 14) { loadsine15(); playsine15(); }
       
        let waitTime = (sineDurations[snd]*1000) + randomInt(5000) + 2000;

        setTimeout(() => {
            canPlaySine2 = true;
        }, waitTime);
    }
}


function checkBuffers()
{

    let buffCount = 0;

    if( cello01buff != null) { buffCount++; }
    if( cello02buff != null) { buffCount++; }
    if( cello03buff != null) { buffCount++; }
    if( cello04buff != null) { buffCount++; }
    if( cello05buff != null) { buffCount++; }
    if( cello06buff != null) { buffCount++; }
    if( cello07buff != null) { buffCount++; }
    if( cello08buff != null) { buffCount++; }
    if( cello09buff != null) { buffCount++; }
    if( cello10buff != null) { buffCount++; }
    if( cello11buff != null) { buffCount++; } 
    if( cello12buff != null) { buffCount++; }
    if( cello13buff != null) { buffCount++; }
    if( cello14buff != null) { buffCount++; }
    if( cello15buff != null) { buffCount++; }
    if( cello16buff != null) { buffCount++; }
    if( cello17buff != null) { buffCount++; }
    if( cello18buff != null) { buffCount++; }
    if( cello19buff != null) { buffCount++; }
    if( cello20buff != null) { buffCount++; } 
    if( cello21buff != null) { buffCount++; }
    if( cello22buff != null) { buffCount++; }
    if( cello23buff != null) { buffCount++; }
    if( cello24buff != null) { buffCount++; }
    if( cello25buff != null) { buffCount++; }
    if( cello26buff != null) { buffCount++; }
    if( cello27buff != null) { buffCount++; }
    if( cello28buff != null) { buffCount++; }
    if( cello29buff != null) { buffCount++; }
    if( cello30buff != null) { buffCount++; }
    if( cello31buff != null) { buffCount++; }
    if( cello32buff != null) { buffCount++; }
    if( cello33buff != null) { buffCount++; }
    if( cello34buff != null) { buffCount++; }
    if( cello35buff != null) { buffCount++; }
    if( cello36buff != null) { buffCount++; }
    if( cello37buff != null) { buffCount++; }
    if( cello38buff != null) { buffCount++; }
    if( cello39buff != null) { buffCount++; }

    if( flute01buff != null) { buffCount++; }
    if( flute02buff != null) { buffCount++; }
    if( flute03buff != null) { buffCount++; }
    if( flute04buff != null) { buffCount++; }
    if( flute05buff != null) { buffCount++; }
    if( flute06buff != null) { buffCount++; }
    if( flute07buff != null) { buffCount++; }
    if( flute08buff != null) { buffCount++; }
    if( flute09buff != null) { buffCount++; }
    if( flute10buff != null) { buffCount++; } 
    if( flute11buff != null) { buffCount++; }
    if( flute12buff != null) { buffCount++; }
    if( flute13buff != null) { buffCount++; }
    if( flute14buff != null) { buffCount++; }
    if( flute15buff != null) { buffCount++; }
    if( flute16buff != null) { buffCount++; }
    if( flute17buff != null) { buffCount++; }
    if( flute18buff != null) { buffCount++; }
    if( flute19buff != null) { buffCount++; }
    if( flute20buff != null) { buffCount++; } 
    if( flute21buff != null) { buffCount++; }
    if( flute22buff != null) { buffCount++; }
    if( flute23buff != null) { buffCount++; }
    if( flute24buff != null) { buffCount++; }
    if( flute25buff != null) { buffCount++; }
    if( flute26buff != null) { buffCount++; }
    if( flute27buff != null) { buffCount++; }
    if( flute28buff != null) { buffCount++; }
    if( flute29buff != null) { buffCount++; }
    if( flute30buff != null) { buffCount++; }
    if( flute31buff != null) { buffCount++; }
    if( flute32buff != null) { buffCount++; }
    if( flute33buff != null) { buffCount++; }
    if( flute34buff != null) { buffCount++; }
    if( flute35buff != null) { buffCount++; }

    if( piano01buff != null) { buffCount++; }
    if( piano02buff != null) { buffCount++; }
    if( piano03buff != null) { buffCount++; }
    if( piano04buff != null) { buffCount++; }
    if( piano05buff != null) { buffCount++; }
    if( piano06buff != null) { buffCount++; }
    if( piano07buff != null) { buffCount++; }
    if( piano08buff != null) { buffCount++; }
    if( piano09buff != null) { buffCount++; }
    if( piano10buff != null) { buffCount++; }
    if( piano11buff != null) { buffCount++; } 
    if( piano12buff != null) { buffCount++; }
    if( piano13buff != null) { buffCount++; }
    if( piano14buff != null) { buffCount++; }
    if( piano15buff != null) { buffCount++; }
    if( piano16buff != null) { buffCount++; }
    if( piano17buff != null) { buffCount++; }
    if( piano18buff != null) { buffCount++; }
    if( piano19buff != null) { buffCount++; }
    if( piano20buff != null) { buffCount++; } 
    if( piano21buff != null) { buffCount++; }
    if( piano22buff != null) { buffCount++; }
    if( piano23buff != null) { buffCount++; }
    if( piano24buff != null) { buffCount++; }
    if( piano25buff != null) { buffCount++; }
    if( piano26buff != null) { buffCount++; }
    if( piano27buff != null) { buffCount++; }
    if( piano28buff != null) { buffCount++; }
    if( piano29buff != null) { buffCount++; }
    if( piano30buff != null) { buffCount++; }
    if( piano31buff != null) { buffCount++; }
    if( piano32buff != null) { buffCount++; }
    if( piano33buff != null) { buffCount++; }
    if( piano34buff != null) { buffCount++; }
    if( piano35buff != null) { buffCount++; }
    if( piano36buff != null) { buffCount++; }

    if( sine01buff != null) { buffCount++; }
    if( sine02buff != null) { buffCount++; }
    if( sine03buff != null) { buffCount++; }
    if( sine04buff != null) { buffCount++; }
    if( sine05buff != null) { buffCount++; }
    if( sine06buff != null) { buffCount++; }
    if( sine07buff != null) { buffCount++; }
    if( sine08buff != null) { buffCount++; }
    if( sine09buff != null) { buffCount++; }
    if( sine10buff != null) { buffCount++; }
    if( sine11buff != null) { buffCount++; }
    if( sine12buff != null) { buffCount++; }
    if( sine13buff != null) { buffCount++; }
    if( sine14buff != null) { buffCount++; }
    if( sine15buff != null) { buffCount++; }

    return buffCount;

}