# Project Feedreader

In this project we are given a web-based application that reads RSS feeds. The goal of this project is learn how to write test code using [Jasmine](http://jasmine.github.io/). There are four test suites designed to test various functionality.  Each suite contains one or more testing functions. The test suites are described below.


## RSS Feeds Test Suite

This test suite assures that the RSS feeds are properly defined.  It is comprised of three test functions. The first test checks to make sure that the array(allFeeds) which contains the name and URL of the feeds is defines and that its length is not 0.  The second test checks all the feeds to make sure that the urls are defined and not empty. The third test checks all the feeds objects to make sure they have a name defined and that the name is not empty.



## Menu Test Suite

This test suite assures that the menu is functioning properly. It is comprised of two test functions. The first test checks to make sure that the menu is hidden by default when program is luanched. The second test assures that the menu changes visibility when the menu icon is clicked. Every time menu is clicked, the menu show either show or hide.


## Initial Entries Test Suite

This test suite assures that entries exist once the loadfeed function completes. it is comprised of one test function.  That funtion waits for the asynchronous loadfeed function to load the feeds. It then checks that there is at least one entry in feed container.


## New Feeds Selection Test Suite
This test suite assures that when a new feed is loaded, that the feed content actually changes.  It is comprised on one test function. That function loads an initial feed, waits until loaded, then loads a second feed. It then verifies that that feed content actually changes.

## Running tests

To run a test, load the page by running the index.html file. At bottom of the page, you will see a Jasmime section.  There you will find the four test suites with the test functions underneath. Click on a test and program will run that test.





