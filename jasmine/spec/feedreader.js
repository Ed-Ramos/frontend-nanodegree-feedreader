/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL defined and not empty', function() {

           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeTruthy();
             expect(feed.url.length).not.toBe(0);

           }); //close forEach

         }); //close URL not defined

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('name defined and not empty', function() {

           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeTruthy();
             expect(feed.name.length).not.toBe(0);

          }); //close for each

         }); // close name defined and not empty

    });

    /* This test suite is named "The menu" */

    describe('The Menu', function() {

        /* This test ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it('menu is hidden', function() {

           expect($('body').hasClass("menu-hidden")).toBe(true);

         });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

         it('menu icon clicked, menu changes', function() {

            $('.menu-icon-link').trigger('click');
          expect($('body').hasClass("menu-hidden")).toBe(false);

            $('.menu-icon-link').trigger('click');
          expect($('body').hasClass("menu-hidden")).toBe(true);



         });

    });

    /* This test suite is named "Initial Entries" */

    describe('Initial Entries', function() {

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         beforeEach(function(done) {
         loadFeed(0,done);

         }); //close before each

          it('entries exist', function(done) {
          expect($('.feed .entry').length).toBeGreaterThan(0);
          done();
          console.log($('.feed .entry').length);

         }); //close entries exist

        }); //close Initial Entries


    /* This test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous.
        */

         var feedListA,
             feedListB;

         beforeEach(function(done) {
           loadFeed(0, function() {
             feedListA = $('.feed').html();
             loadFeed(1, function() {
               feedListB = $('.feed').html();
               done();
             }); //close loadfeed1
           }); //close loadfeed0

          }); //close beforeEach

         it('Feed list content changes', function() {
          expect(feedListA).not.toBe(feedListB);
         }); //close feed list content changes

    }); //close new feed selection

}());
