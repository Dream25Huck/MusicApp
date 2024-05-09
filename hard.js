
const bkgEasyContainer = document.getElementsByClassName('easyContainer')[0];
const diskPlayer = document.getElementsByClassName('diskPlayer')[0];
const audio = document.getElementsByClassName('audio')[0];
const li = document.querySelectorAll('.li');
const imgPerson = document.querySelector('.personImg');
const profileTitle = document.querySelector('#profileTitle');
const profileParagraph = document.querySelector('#profileParagraph');
const images = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
const title = [
  "Happy",
  "Can't Stop The Feeling!",
  "Don't Worry, Be Happy",
  "Over the Rainbow",
  "Count On Me",
  "Happier",
  "Here Comes The Sun",
  "Take Me Home, Country Roads",
  "With a Little Help From My Friends",
  "You've Got a Friend in Me",
  "Roar",
  "Good Life",
  "Scars To Your Beautiful",
  "Best Day of My Life",
  "Viva La Vida",
  "The Greatest",
  "I'll Be There for You",
  "We Are Family",
  "Stronger (What Doesn't Kill You)",
  "On Top of the World"
];

const artists = [
  "Coldplay",
  "Sia",
  "The Rembrandts",
  "Sister Sledge",
  "Kelly Clarkson",
  "Imagine Dragons"
];



li.forEach((element, index) => {
    element.addEventListener('click', function(){
        bkgEasyContainer.style.backgroundImage = `url(img/${index+15}.png)`;
        imgPerson.src = `img-person/${index+15}.jpeg`;
        audio.src=`music/${index+15}.mp3`;
        audio.play();
        profileTitle.textContent=title[index+14];
        profileParagraph.textContent=artists[index];
    })
});

