let firstclick = true;

const F5 = () => {
    window.location.reload();
}
const undo = () => {
    history.back(-1);
}
const clockInit = () => {
    const halfcircle = 180;
    const degreesperminute = 6;
    const degreespersecond = 6;
    const degreesperhour = 30;
    let date = new Date();
    let time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    let clockDivs = [document.getElementById("hour"), document.getElementById("minute"), document.getElementById("second")];
      let minute = time[1]*degreesperminute+halfcircle
      let second = time[2]*degreespersecond+halfcircle
    let hour = time[1]/2+time[0]*degreesperhour+halfcircle;

    clockDivs[0].style.transform="rotate("+ hour +"deg)";
    clockDivs[1].style.transform="rotate("+ minute +"deg)";
    clockDivs[2].style.transform="rotate("+ second +"deg)";
}
const roll = () => {
    let shadow = document.getElementById('shadow');
    shadow.style.animationPlayState = "running";
    shadow.addEventListener("animationiteration", stoproll);
}
const stoproll = () => {
    let shadow = document.getElementById('shadow');
    shadow.style.animationPlayState="paused";
}
const showframe = () => {
    let frame = document.getElementById('framemonitor');
    let nea = document.getElementById('north-east');
    let swa = document.getElementById('south-west');
    nea.classList.remove('activearrow');
    swa.classList.add('activearrow');
    frame.style.display="block";
}
const hideframe = () => {
    let frame = document.getElementById('framemonitor');
    let nea = document.getElementById('north-east');
    let swa = document.getElementById('south-west');
    swa.classList.remove('activearrow');
    nea.classList.add('activearrow');
    frame.style.display="none";
}
const wakecomp = () => {
    let ledi = document.getElementById('computerpoweri');
    let ledo = document.getElementById('computerpowero');
    let screen = document.getElementById('screen');
    let framescreen = document.getElementById('framescreen');
    ledi.classList.remove('computersleep');
    ledo.classList.remove('computersleep');
    screen.style.backgroundImage = 'radial-gradient(circle at 15% 15%, #222222, #111111)';
    framescreen.style.backgroundImage = 'radial-gradient(circle at 15% 15%, #222222, #111111)';
}
const updateio = (newContent) => {
    let iocontent = document.getElementById('iocontent');
    let wake = '';
    if(firstclick) {
        wake = 'You wake up your computer. ';
    } else {
        wake = '';
    }
    iocontent.innerHTML = wake + newContent;
    firstclick = false;
}
const updateframe = (source) => {
    let frame = document.getElementById('framescreen');
    let screen = document.getElementById('screen');
    frame.src = source;
    screen.src = source;
}
const about = () => {
    updateframe('about.html');
    showframe();
    wakecomp();
    updateio('You search for information on Harold. His "About" page comes up onscreen. It has this cool Pong thing going on.');
}
const contactInfo = () => {
    updateframe('contact.html');
    showframe();
    wakecomp();
    updateio('You Google "Harold Tourjee III" and are able to find a page of ways to contact him. Weird that you can do that for people nowadays.');
}
const portfolio = () => {
    updateframe('portfolio.html');
    showframe();
    wakecomp();
    updateio("You pull up Harold's portfolio of completed projects. He is always working on more.");
}
const resume = () => {
    updateframe('resume.html');
    showframe();
    wakecomp();
    updateio("You find a link to Harold's resume. Resum&#233;? How important is that accent mark, anyway?");
}
const home = () => {
    let iocontent = document.getElementById('iocontent');
    iocontent.innerHTML = 'You are already at home (or your office, or wherever you keep this very old computer). Try a different command.';
}
const kit = () => {
    updateframe('https://youtu.be/ABYPxutCmL0');
    updateio("You've navigated to Harold's Keep in Touch app walkthrough. The video plays.");
}

window.onload = function() {
    clockInit();
    setInterval(clockInit, 1000);
};