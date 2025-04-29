// class TheAlbum is in 3 places
//classTheSong is in 1 places

let space = "\u00A0";

const albums = {
    year:{
        "2025":[
            {
                id: "mythical",
                name: 'Mythical Whalers',
                y: 2025,
                img: "./resources/img/album1.png",
                imgsub: "./resources/img/img_cover_blank.png",
                explanation: `Mythical Whalers is a nautical fantasy roguelike featuring a retro, dynamic pixel-art aesthetic. The soundtrack is developed entirely using Roland’s Sound Canvas series (SC-88 and closely related modules), with a musical direction focused on minimalism — aiming for a spacious soundscape built on clear, deliberate musical elements.
                ${'\xa0'.repeat(150)}
                I am one of several composers contributing to the project, which is still ongoing. My goal is to complement the existing musical style with my own creativity and strengths, bringing personality, a sense of adventure, and impactful atmosphere to the game. Throughout, I work to match the gameplay environment and nautical theme, enriching the world while respecting the established minimalistic sound approach.`,
                songs: [
                    {
                        name: 'Desert Trek',
                        source: "./resources/music/prev_Floating_Town.wav",
                        adjectives: ['Fantasy', 'Oriental', 'Desert', 'Exotic', 'SC-88'],
                        explanation: 'Originally composed as part of my demo submission for the project, Desert Trek was inspired by the idea of traversing a vast desert landscape. I aimed to capture a sense of mystery, adventure, and fantasy, creating a theme suited for exploration across desert biomes. Although the final in-game visuals turned out to differ slightly from the sandy environment I had first imagined, the piece naturally fit the setting and atmosphere. I further refined the track to better align with the specific in-game context while maintaining its original spirit of adventurous discovery.'
                    },
                    {
                        name: 'Everyday Tactics',
                        source: "./resources/music/prev_Floating_Town.wav",
                        adjectives: ['Fantasy', 'Tactical', 'Battle', 'SC-88'],
                        explanation: `Composed as part of my demo for the project, Everyday Tactics was designed to add character to the game’s battle sequences. The focus was on maintaining a steady tactical rhythm that reflected the structure of the battles, while introducing dynamic melodic variations to capture the shifting tides of combat. The result is a piece that supports the strategic nature of the gameplay while enhancing the intensity and flow of the action.`
                    },
                    {
                        name: 'Taiga',
                        source: "./resources/music/prev_Floating_Town.wav",
                        adjectives: ['Fantasy', 'Nordic', 'Epic', 'Calm', 'Melancholic', 'SC-88'],
                        explanation:`This piece was inspired by Nordic folk music, evoking the vastness and mystique of nature, particularly in the context of a taiga biome. With a focus on sustained violin melodies, flute, and timpani, the composition reflects the grandeur and solitude of expansive wilderness landscapes. The music combines simple, steady rhythms with dynamic melodic variations, creating a majestic and adventurous atmosphere that draws on the noble and reflective qualities found in Nordic traditions.`
                    },
                    
                ]    
    
            },
           
        ], //25 end here?




        "2024": [

        {
        id: "realms",
        y: 2024,
        name: 'Licence Album: Realms',
        img: "./resources/img/img_cover_realms.png",
        imgsub: "./resources/img/img_cover_blank.png",
        explanation: `This personal project is focused on creating a collection of licensable music, primarily designed to support and enhance the worlds of Japanese role-playing games. The goal is to offer inspiring and engaging compositions for various in-game moments—providing alternatives to the more conventional music choices that sometimes leave narrative and emotional potential underexplored.
        ${'\xa0'.repeat(150)}
        The project is ongoing, with production happening during available time. The music in this album represents my intuitive and inspired take on the genre, shaped by the influence of PS1-era JRPG composers and games, along with my own personal creative vision. `,
        songs: [
            {
                name: 'The Floating Town',
                source: "./resources/music/prev_Floating_Town.wav",
                adjectives: ['Calm', 'Oriental', 'RPG'],
                explanation: "A calm, water-themed song for an oriental floating town, inspired by an image of a settlement built atop boats and colorful traditional clothing. The plucking movements mimic the sounds of water surface collisions. \
                  "
            },
            {
                name: 'Green Eternal',
                source: "./resources/music/prev_Green_Eternal.wav",
                adjectives: ['Calm', 'Somber', 'Mysterious', 'RPG' ],
                explanation: "A theme for a deep and ancient fantasy forest. This piece is one of my personal favorites, evoking childhood memories of JRPGs and their mysterious escapism."

            },
            { 
                name: 'Race to the Finish',
                source: "./resources/music/prev_Race_to_the_Finish.wav",
                adjectives: ['Energetic', 'Bouncy', 'Exciting', 'Racing'],
                explanation: "An energetic racing theme inspired by racing minigame instances. The song incorporates elements of samba and big band rock, featuring fun sound effects like fireworks and monkeys."
            },
            {
                name: 'The Desert Bastion',
                source: "./resources/music/prev_The_Desert_Bastion.wav",
                adjectives: ['Stoic', 'Militant', 'Exotic', 'RPG'],
                explanation: "A theme for a desolate fortress in a dry, desert fantasy setting. I find composing for desert and tropical settings particularly inspiring! "
            },
            {
                name: 'Humble Fortifications',
                source: "./resources/music/prev_Humble_Fortifications.wav",
                adjectives: ['Homely', 'Simple', 'Rustic', 'RPG'],
                explanation: "A home base theme conveying warmth and simplicity, inspired by a rustic RPG fortress setting."
            },
            {
                name: 'Ambush on the Mad Monarch',
                source: "./resources/music/prev_Ambush.wav",
                adjectives: ['Dark', 'Tense', 'Eerie', 'RPG'],
                explanation: "A tense RPG battle or event theme for a face-off against a villain. Inspired by classic RPGs, it features dynamic percussive sections for added intensity."
            },
            {
                name: 'Far Below the Clouds',
                source: "./resources/music/prev_Far_Below_the_Clouds.wav",
                adjectives: ['Adventurous', 'Grand', 'RPG'],
                explanation: "A world map theme for an RPG overworld map with a bird's-eye view perspective."
            },
            {
                name: 'The Scarlet Hunter - Liturgy of Blood',
                source: "./resources/music/prev_The_Scarlet_Hunter.wav",
                adjectives: ['Vampiric', 'Gothic', 'Dark'],
                explanation: "An RPG battle theme for a confrontation with a vampire hunter, drawing inspiration from the thematic hues of scarlet red and gold."
            },
           /* {
                name: 'Warfare Maneuvers',
                source: "./resources/music/mecha6.wav",
                adjectives: ['Militant', 'Inspiring', 'Tactical RPG'],
                explanation: "A tactical RPG battle theme inspired by a classic PlayStation game. "
            },*/

        ]//songs end here
    },//other album here
    {
        id: "oracle",
        name: "Oracle Theme",
        y: 2024,
        img: "./resources/img/img_cover_oracle.png",
        imgsub:"./resources/img/img_cover_blank.png",
        explanation: "Created as a non-commercial commission and personal practice, this piece evokes a mysterious and fairytale-like atmosphere, fitting for an encounter with an oracle. The goal was to enhance the immersive experience of the website oraclewonders.com, evoking a sense of nostalgia for classic video games and capturing the whimsical, enchanting qualities of fairytales and folk tales.",
        songs: [
              {  name:"Oracle Theme (mecha7 as test)",
                 source: "./resources/music/test.mp3",
                 explanation: "A theme created for an encounter with an old oracle in her cabin, deep within an old forest, evoking a sense of mystery and nostalgia.",
                 adjectives: ['Mysterious', 'Playful', 'Calm', 'Nostalgic' ],
              }
        ]
    },
    {
        id: "skyfire",
        name: "Echoes of the Skyfire",
        y: 2024,
        img: "./resources/img/album2.png",
        imgsub:"./resources/img/img_cover_blank.png",
        explanation: `Echoes of the Skyfire is an epic JRPG featuring dark and mature themes, combined with a colorful, simplified pixel style in a top-down perspective that emphasizes clarity and nostalgic charm.
        ${'\xa0'.repeat(150)}
        My role in the project began with composing the game's main theme, intended to serve both as the musical starting point for the game's world and as the centerpiece for the trailer. The challenge was to bridge the colorful, inviting visual style with the darker, more mature narrative tone by creating a score that could balance both elements effectively.
        ${'\xa0'.repeat(150)}
        The primary focus was to capture an epic fantasy atmosphere that communicated a grand sense of adventure as well as the ongoing battle against evil. For inspiration, I drew heavily from the opening movies of PlayStation-era JRPGs and classic fantasy settings.
        ${'\xa0'.repeat(150)}
        Additionally, I aimed to develop the main theme in a way that would allow it to be adapted into various leitmotifs throughout the game's soundtrack, ensuring musical cohesion and thematic depth across the experience.`,
        songs: [
              {  name:"Echoes of the Skyfire Main Theme",
                 source: "./resources/music/test.mp3",
                 explanation: `For this theme, I was tasked with composing an epic JRPG-style trailer track built around a detailed action chart, featuring a cold open, rising tension, climax, and post-trailer splash screen.
                 ${'\xa0'.repeat(150)}
                The music needed to evoke epicness, adventure, and the fight against evil, closely aligning with narrative themes from a voice-over narration. Timing and structure were carefully crafted to match the trailer's emotional arc, while the main motif was developed with variations to reflect evolving story beats. An orchestral approach was chosen to capture the grand, adventurous spirit typical of early PlayStation-era JRPGs.
                 `,
                 adjectives: ['JRPG', 'Epic', 'Trailer', 'Main Theme', 'Orchestral' ],
              }
        ]
    }      

    ], //albums24 end here?
    //2025: [] here

    
}
};
document.addEventListener('DOMContentLoaded', function(){
    ChangeSongNames(defaultAlbum.songs)
});

//defining some areas where we change strings
const albumTitles = document.querySelectorAll('.TheAlbum');
const TheYear = document.querySelectorAll('.TheYear');

const songsContainer = document.querySelector('.songsContainer');


//Access songs in album 0
//const songs = albums.albums24[0].songs;

//getting access to elements
const TheSongs = document.querySelectorAll('.TheSong');
const TheAdjective = document.querySelector('.TheAdjective');
const songExp = document.querySelector('.songExp');
const albumAbout = document.querySelector(".albumAboutP");

const popOutDiv = document.querySelector(".popOutDiv");
const speaker = document.querySelector(".speaker");


const imgPlace = document.querySelector('.nowAlbum');

const leftArrow = document.querySelector('.leftArrow');
const rightArrow = document.querySelector('.rightArrow');

const rightAlbum = document.querySelector('.rightAlbum');
const leftAlbum = document.querySelector('.leftAlbum');

//access to audioplayer
const audioPlayer = document.querySelector('.audioPlayer');

//const allAlbums = Object.keys(albums.year).flatMap(year => albums.year[year]);
//const allAlbums = Object.keys(albums.year).flatMap(year => albums.year[year]);
const allAlbums = Object.keys(albums.year)
  .sort((a, b) => Number(b) - Number(a))  // Sort years as numbers
  .flatMap(year => albums.year[year]);


//DEFAULT is the first song
//const defaultAlbum = allAlbums[allAlbums.length - 1];
const defaultAlbum = allAlbums[0]; // Default to first album
const defaultSong = defaultAlbum.songs[0]; 
const defaultImg = allAlbums[0].img;
const defaultYear = allAlbums[0].y;
TheYear.forEach(TheY =>{
    TheY.textContent = defaultYear + ":" + "\u00A0";
    
})


TheSongs[0].textContent = defaultSong.name;
TheAdjective.textContent = defaultSong.adjectives; 

songExp.textContent = defaultSong.explanation;
audioPlayer.src = defaultSong.source;

albumAbout.textContent = defaultAlbum.explanation;
imgPlace.src = defaultImg;

leftArrow.style.display = "none";
rightAlbum.src = allAlbums[0].imgsub;
leftAlbum.src = allAlbums[0].imgsub;
leftAlbum.style.display = "none";



let selectedYear = [];
const allYears = Object.keys(albums.year);





albumTitles.forEach(albumTitle => {
   albumTitle.textContent = defaultAlbum.name; // 
   
});



//         FUNCTIONS >>
//arrow album change
let currentAlbumIndex = 0;

//rightAlbum.src = albums.year[allYears[0]][1].imgsub;


function arrowVisibility(index){
    if (index > 0) {
        leftArrow.style.display = "block";
        leftAlbum.style.display = "block";
    } else {
        leftArrow.style.display = "none";
        leftAlbum.style.display = "none";
    }

    // If we are not at the last album, show the right arrow
    if (index < allAlbums.length - 1) {
        rightArrow.style.display = "block";
        rightAlbum.style.display = "block";
    } else {
        rightArrow.style.display = "none";
        rightAlbum.style.display = "none";
    }


   
}


let previouslyClickedAlbum = null;
function updateAlbumContent(index) {
    const selectedAlbum = allAlbums[index];
    TheAlbumName[0].style.fontWeight= "normal";

    

    if(previouslyClickedAlbum){

        previouslyClickedAlbum.style.fontWeight = "normal";

    }

    TheAlbumName[index].style.fontWeight = "bold";
    previouslyClickedAlbum = TheAlbumName[index];


   

    if (selectedAlbum) {
        changeAlbumNames(selectedAlbum);
        arrowVisibility(index);
        /*rightArrow.style.display = "block";
        leftArrow.style.display = "none";
        
        rightAlbum.style.display = "block";
        leftAlbum.style.display = "none";*/

       
    }
    //popOutDiv[1].style.transform = "translate(-50px)";

}

rightArrow.addEventListener('click', () => {

    if (currentAlbumIndex < allAlbums.length - 1) {
        currentAlbumIndex++;

        updateAlbumContent(currentAlbumIndex);
        arrowVisibility(index);

    }

});

leftArrow.addEventListener('click', () => {
    //TheAlbumName[currentAlbumIndex].style.fontWeight = "normal";
    if (currentAlbumIndex > 0) {
        currentAlbumIndex--;

        updateAlbumContent(currentAlbumIndex);
        arrowVisibility(index);

    }
});
//

//arrow movement



//choose and change ALBUM 
const TheAlbumName = document.querySelectorAll(".TheAlbumName")
TheAlbumName[0].style.fontWeight= "bold";

TheAlbumName.forEach(alb => {

    alb.addEventListener('click', chooseAlbum);

});  
    
//let previouslyClickedAlbum = null;

    function chooseAlbum(event){
        const alb = event.currentTarget;


        
        const albumId = alb.getAttribute('data-album-id');
        
        const selectedAlbum = allAlbums.find(album => album.id === albumId);
        
      

        if(selectedAlbum){
            changeAlbumNames(selectedAlbum);
          
            const selectedIndex = allAlbums.indexOf(selectedAlbum);
            currentAlbumIndex = selectedIndex;
            updateAlbumContent(currentAlbumIndex);

            //test

       };

    };
 

//Loops through names
function changeAlbumNames(selectedAlbum){

   // albumTitles.forEach(albumTitle => {
     //   albumTitle.innerHTML = ""; // ""Clear the content
   // });

    albumTitles.forEach(albumTitle => {
        
        
        //albumTitle.innerHTML = albums.albums24[0].name;
        albumTitle.textContent = selectedAlbum.name;
    });
        albumAbout.textContent = selectedAlbum.explanation;
        imgPlace.src = selectedAlbum.img;

    ChangeSongNames(selectedAlbum.songs);


//Loops through year
TheYear.forEach(TheY => {

    const y = selectedAlbum.y;
    TheY.textContent =  y +  ":" + "\u00A0" ; //&nbsp; unicode space
    

});



};
    











// Loop through each songTitle element and update its innerHTML
function ChangeSongNames(songs){

    songsContainer.textContent = "";

songs.forEach(song => {

    const popOutDiv = document.createElement("div");
    popOutDiv.classList.add("popOutDiv");
    


    
    //const songTitle = document.querySelector('.otherSongName').cloneNode(true);
    const songTitle = document.createElement("p");
    songTitle.classList.add('otherSongName');
    songTitle.textContent = song.name;


    //const songAdjective = document.querySelector('.adjectives').cloneNode(true);
    const songAdjective = document.createElement("p");
    songAdjective.classList.add('adjectives');
    songAdjective.textContent = song.adjectives.join(' - ');

        
    songsContainer.appendChild(popOutDiv);    
    popOutDiv.appendChild(songTitle );
    popOutDiv.appendChild(songAdjective );
   

    //songtitles/popOutDiv have eventlistener
    popOutDiv.addEventListener('click',()=> showSongDetails(song));
    
    //first song is popped out with speaker
    const firstPopOutDiv = songsContainer.firstElementChild;
    let width1 = window.innerWidth; // screen.width 

    //changed 520 to 500
    if(width1 < 500){
        firstPopOutDiv.style.transform = "translate(0px)";
       // firstPopOutDiv.appendChild(speaker);
    } else     if (firstPopOutDiv) {
        firstPopOutDiv.style.transform = "translate(-50px)";
        //firstPopOutDiv.appendChild(speaker);
        previouslyClickedDiv = firstPopOutDiv; 
    }

});

if (songs.length > 0) {
    showSongDetails(songs[0]);
}

};

//function to show details
    function showSongDetails(song){
        
        TheSongs.forEach(TheSong =>{
            TheSong.textContent = song.name;
        });
        //gives the adjectives and explanation of current song
        TheAdjective.textContent = song.adjectives.join(' - ');
        songExp.textContent = song.explanation;


        //changes the source
        audioPlayer.src = song.source;
        
        popOut();
        

    }

    let previouslyClickedDiv = null;

   /* //testi
    let width1 = window.innerWidth;

    document.addEventListener("DOMContentLoaded", (event) => {

        console.log("testi")

        if(width1 < 500){
            popOutDiv.style.transform = "translate(0px)";
            popOutDiv.style.backgroundColor = "red"
        }
      });

      window.onresize = function(){
        console.log("testi2")

        if(width1 < 500){
            popOutDiv.style.transform = "translate(0px)";
            popOutDiv.style.backgroundColor = "red"
        }
      }
//testi up*/

    function popOut(){

        const popOutDiv = event.currentTarget;
        
        
        if(popOutDiv.closest('.songsContainer')){


        if(previouslyClickedDiv){
            previouslyClickedDiv.style.transform = "translate(0px)";
        }
       
        //test
        
        //test 21.3.25, lol it works just like that
        audioPlayer.play();

        





        previouslyClickedDiv = popOutDiv;

        popOutDiv.appendChild(speaker);

        let width1 = window.innerWidth; //screen.width
 
        //changed from 520 to 500
        if(width1 < 500){
            popOutDiv.style.transform = "translate(0px)";
            
        }
        else{
            popOutDiv.style.transform = "translate(-50px)";
        }

    }




};