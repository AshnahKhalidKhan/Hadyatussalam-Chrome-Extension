# Hadyatussalam

Here are some things I learned when I was stepping into the realm of creating my very first Chrome extension:

The tools I needed to have installed and be registered in were:
- GitHub
- Google
- Google Chrome
- Visual Studio Code
- NodeJS

To create your own extension, it is helpful to refer to this link:
https://developer.chrome.com/docs/extensions/get-started
(but you can also just go ahead and read the steps I am writing down right now too)

First create your Github repository and clone it onto your code editor and open it.

If you are developing using a code editor such as VSCode or Atom, you can use the npm package chrome-types to take advantage of auto-completion for the Chrome API. This npm package is updated automatically when the Chromium source code changes.

To download this npm package, open the terminal on VS code and enter the following command:
npm i chrome-types

Now let's set up the directory structure.

Create the folders images, wireframes.

In the directory, first create a manifest.json file. This JSON file describes the extension's capabilities and configuration. It must be located at the root of the project.

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

In the manifest.json file, the only required keys are "manifest_version", "name", and "version".

The manifest.json file supports comments (//) during development, but these must be removed before uploading your code to the Chrome Web Store. To dive deeper, check out the "name", "version" and "description" keys on the Manifest overview page: https://developer.chrome.com/docs/extensions/reference/manifest

Most manifest.json files contain an "action" key which declares the image Chrome should use as the extension's action icon and the HTML page to show in a popup when the extension's action icon is clicked.

"background" in manifest.json ---> script that runs in background