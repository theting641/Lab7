// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

// Make sure you register your service worker here too
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry'); 
        newPost.entry = entry;
        document.querySelector('main').appendChild(newPost);
      });
      var journalButton = document.querySelectorAll('journal-entry');
      //var temp = journalButton.getElementsByTagName('journal-entry')
      journalButton.forEach(entry => {
        entry.addEventListener('click', event => {
          history.pushState(null, '', location.href);
          var i = 0
          for (i = 0; i < journalButton.length; i++) {
            if (entry == journalButton[i])
              //console.log(i);
              break;             
          }
          //console.log(i + 1)
          router.setState(entry, i + 1); 
        }); 
      })
    });
});

var headerButton = document.querySelector('h1');
headerButton.addEventListener('click', event => {
  //console.log(location.hash);
  if (location.hash != '') {
    //.log(location.href);
    history.pushState(null, '', location.href);
  }
  router.setState('');
});

var settingsButton = document.querySelector('img[alt="settings"]');
settingsButton.addEventListener('click', event => {
    //location.hash = "journals";
    //console.log(document.querySelector('body').className);
    //console.log(location.hash);
  if (location.hash != "#settings") {
    //console.log(location.href);
    history.pushState(null, '', location.href);
  }
  router.setState('#settings');
  
});

window.addEventListener('popstate', event => {
  //console.log(document.location.hash);
  var string = document.location.hash;
  var journalButton = document.querySelectorAll('journal-entry');
  if (string.includes('entry')) {
    var i = string.substring(6);
    //console.log(i)
    router.setState(journalButton[i-1], i)
  }
  router.setState(document.location.hash);
  
});
