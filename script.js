// Declare your genre arrays here
let shooters = [ "https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg",

"https://www.dictionary.com/e/wp-content/uploads/2018/07/CS-GO3.jpg",
               
"https://assets-prd.ignimgs.com/2022/05/24/call-of-duty-modern-warfare-2-button-02-1653417394041.jpg"              
];
let horrors = [ "https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg?t=1683281716",
              
"https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/f/five-nights-at-freddys-switch/hero",
              
"https://www.heypoorplayer.com/wp-content/uploads/2021/03/at-dead-of-night.jpg"              
];

let rogues = [ "https://cdn2.steamgriddb.com/file/sgdb-cdn/logo/795daa0834ca092ed52b5d0a5848387d.png",
             
"https://cdn1.epicgames.com/min/offer/1200x1600-1200x1600-e92fa6b99bb20c9edee19c361b8853b9.jpg",
             
"https://cdn.akamai.steamstatic.com/steam/apps/1794680/capsule_616x353.jpg?t=1688057293"             
];
let suggestions = [

];
// Make sure to declare your HTML elements as variables! 
let genre = document.querySelector(".genre");
let suggest = document.querySelector(".suggest");
let gButton = document.querySelector(".genreButton");
let sButton = document.querySelector(".suggestButton");
let div = document.querySelector(".results");
// Submit Button 

gButton.onclick = function() {
    let gInput = document.querySelector(".genre").value;
    if(gInput==="Shooter"){
       for(let shooter of shooters){ div.insertAdjacentHTML("afterBegin", "<img src=" + shooter + ">");}
    }else if(gInput==="Horror"){
    	for(let horror of horrors){ div.insertAdjacentHTML("afterBegin", "<img src=" + horror + ">");}
    }else if(gInput==="Roguelike"){
    	for(let rogue of rogues){ div.insertAdjacentHTML("afterBegin", "<img src=" + rogue + ">");}
    }
    console.log(gInput);
}; 
sButton.onclick = function() {
    let sInput = document.querySelector(".suggest").value;
    suggestions.push(sInput);
    for(let suggestion of suggestions){ 
    div.insertAdjacentHTML("afterBegin", "<img src=" + suggestion + ">");
    }
    console.log(suggestions);
}; 


