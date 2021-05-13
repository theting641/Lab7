// router.js

export const router = {};

/**
 * Changes the "page" (state) that your SPA app is currently set to
 */
router.setState = function() {
  /**
   * - There are three states that your SPA app will have
   *    1. The home page
   *    2. The entry page (showing one individual entry)
   *    3. The settings page (currently blank, no actual settings here, just a placeholder where a real settings page would go)
   * 
   * - If you look at the CSS, we have 2 classes you can add to the body element to help change states, "settings" and "single-entry"
   * - Changing states will require more than just changing these classes, for example the settings page requires you to change the title to "Settings"
   * - And each individual entry the title changes to "Entry #" based on it's number in the entry order
   *
   * - When changing states, make sure the back and forward buttons work. You can use hash URLs (e.g. https://someurl.com/#settings) when changing states
   *   to make things easier.
   * - Similarly, when viewing an individual entry, a hashed URL might look like https://someurl.com/#entry3
   * 
   * - Some tips:
   *    1. Push a new state object to the history object using history.pushState() 
   *    2. look up the documentation for how to use pushState() when you try it
   *    3. look up the documentation for the "popstate" event listener (fires only on back button), useful in your script.js file
   *    4. For each <journal-entry> element, you can grab the JSON version of its info with .entry (e.g. someJournalEntryElement.entry)
   *       a. This is useful when viewing a single entry. You may notice an <entry-page> element in the HTML, this is the element that is displayed when the
   *          .single-entry class is applied to the body. You can populate this element by using .entry similarly. So if I wanted to grab a specific <journal-entry>
   *          and populate it's info into the <entry-page>, I would simply use an assignment of entryPageElement.entry = journalEntryElement.entry
   *       b. Clearing the <entry-page> element of its previous data can be a bit tricky, it might be useful to just delete it and insert a new blank one 
   *          in the same spot each time. Just a thought.
   *
   * - Answers to some questions you may have:
   *    1. You may add as many helper functions in this file as you like
   *    2. You may modify the parameters of setState() as much as you like
   */

    // document.querySelectorAll('journal-entry').forEach(entry => {
    
    // });
    if (arguments[0] == "#settings") {
      //console.log('true')
      location.hash = "settings"
      var body = document.querySelector('body');
      body.className = "settings";
      body.querySelector('h1').innerHTML = "Settings";
    }

    if (arguments[0] == '') {
      history.replaceState(null, null, ' ');
      var body = document.querySelector('body');
      body.className = "";
      body.querySelector('h1').innerHTML = "Journal Entries";
    }
    //console.log(arguments);
    if (typeof(arguments[0]) != typeof('')) {
      //console.log('success')
      //console.log(arguments[1])
      location.hash = 'entry' + arguments[1];
      //console.log(location.hash)
      var elem = document.querySelector('entry-page');
      elem.parentNode.removeChild(elem);
      //document.querySelector('body').remove(document.querySelector('entry-page'));
      document.querySelector('body').appendChild(document.createElement('entry-page'));
      var body = document.querySelector('body');
      body.className = "single-entry";
      //console.log(arguments[0]);
      document.querySelector('entry-page').entry = arguments[0].entry;
      body.querySelector('h1').innerHTML = "Entry " + arguments[1];
    }

}
