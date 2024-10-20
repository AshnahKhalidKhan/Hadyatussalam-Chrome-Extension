# Hadyatussalam

To create your own extension, it is helpful to refer to this link:
https://developer.chrome.com/docs/extensions/get-started


First create your Github repository and clone it onto your code editor and open it.


If you are developing using a code editor such as VSCode or Atom, you can use the npm package chrome-types to take advantage of auto-completion for the Chrome API. This npm package is updated automatically when the Chromium source code changes.

npm i chrome-types

Let's set up the directory structure.
Create the folders images, wireframes.

In the directory, first create a manifest.json file. This JSON file describes the extension's capabilities and configuration.
In this file, you will write:
{
  "manifest_version": 3,
  "name": "Hadyatussalam Chrome Extension",
  "version": "1.0",
  "description": "A simple and elegant to-do list extension.",
  "action": 
  {
    "default_popup": "popup.html"
  },
  "permissions": ["storage"],
  "chrome_url_overrides": 
  {
    "newtab": "newtab.html"
  }
}

most manifest files contain an "action" key which declares the image Chrome should use as the extension's action icon and the HTML page to show in a popup when the extension's action icon is clicked.



