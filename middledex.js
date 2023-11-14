const button = document.querySelectorAll('button');
const submit = document.querySelector('#LeSubmit');
const Main = document.querySelector('#TheFirst');
const Text = document.querySelector('h1');
const rate_point = document.getElementById("numberer");
const littletext = document.querySelector('p');
const Img = document.querySelector('#tablet');
const thanks = document.querySelector("#thn");
const final = document.querySelector('#final');
let numberer = null;


button.forEach((Insider) => {
    Insider.addEventListener("click", (e) => {
        const Activated = document.querySelector(".DoneDeal");
        if (Activated) {
            Activated.classList.remove("DoneDeal");
        }
        const carde = e.target;
        carde.classList.add("DoneDeal");
        numberer = e.target.innerText;
        console.log(numberer);
    });
});

function Submition (){
    if(!Main.style.height ||  Main.style.height == '350px'){
        Main.style.height = '500px';
        Main.style.marginTop = '50px';
        Text.style.opacity = '0';
        Text.style.transition = 'opacity .5s';
        littletext.style.transition = 'opacity .5s';
        littletext.style.opacity = '0';
        
        setTimeout(() => Text.style.display = 'none', 1000);
        setTimeout(() => littletext.style.display = 'none', 1000);
        setTimeout(() => Img.style.display = 'inherit', 1000);
        setTimeout(() => thanks.style.display = 'inherit', 1000);
        setTimeout(() => final.style.display = 'inherit', 1000);
        setTimeout(() => final.style.transition = 'opacity .5s', 1100);
        setTimeout(() => final.style.opacity = '1', 1100);
        setTimeout(() => thanks.style.opacity = '1', 1100);
        setTimeout(() => thanks.style.transition = 'opacity .5s', 1100);
        setTimeout(() => Img.style.opacity = '1', 1100);
        setTimeout(() => Img.style.transition = 'opacity .5s', 1100);
    }else{

        Main.style.marginTop = '100px';
        Text.style.opacity = '1';
        littletext.style.opacity = '1';
        setTimeout(() => Img.style.opacity = '0', 1000);
        setTimeout(() => Img.style.transition = 'opacity .5s', 1000);
        setTimeout(() => Text.style.display = 'inherit', 1500);
        setTimeout(() => littletext.style.display = 'inherit', 1500);
        setTimeout(() => Img.style.display = 'none', 1500);
        setTimeout(() => thanks.style.display = 'none', 1500);
        setTimeout(() => Main.style.height = '350px', 1400)
        setTimeout(() => final.style.display = 'none', 1500);
        setTimeout(() => final.style.transition = 'opacity .5s', 1100);
        setTimeout(() => final.style.opacity = '0', 1100);

    }
}
submit.addEventListener("click", () => {
    if (numberer) {
      rate_point.innerText = numberer;

    }
  });