
const bkgEasyContainer = document.getElementsByClassName('easyContainer')[0];
const diskPlayer = document.getElementsByClassName('diskPlayer')[0];
const audio = document.getElementsByClassName('audio')[0];
const li = document.querySelectorAll('.li');
const imgPerson = document.querySelector('.personImg');
const profileTitle = document.querySelector('#profileTitle');
const profileParagraph = document.querySelector('#profileParagraph');
const images = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
const title = ['Happy', "Can't Stop The Feeling!", "Don't Worry, Be Happy", "Over the Rainbow", 'Count On Me',"Happier", "Here Comes The Sun"];

const beginnerArtists = [
    "Pharrell Williams",
    "Justin Timberlake",
    "Bobby McFerrin",
    "Israel Kamakawiwo'ole",
    "Bruno Mars",
    "Marshmello ft. Bastille",
    "The Beatles"
];


li.forEach((element, index) => {
    element.addEventListener('click', function(){
        bkgEasyContainer.style.backgroundImage = `url(img/${index+1}.png)`;
        imgPerson.src = `img-person/${index+1}.jpeg`;
        audio.src=`music/${index+1}.mp3`;
        audio.play();
        profileTitle.textContent=title[index];
        profileParagraph.textContent=beginnerArtists[index];
    })
});

