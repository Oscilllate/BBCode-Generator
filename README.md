# BBCode Generator

A simple web-based BBCode generator that lets you style text with color, size, bold, italic, and underline. Works with named colors or hex codes, and outputs clean BBCode for use in forums, chats, or anywhere BBCode is supported.

## Features

- Live input for text
- Color picker (supports named colors and hex values)
- Font size selection
- Toggle bold, italic, and underline
- Generates properly nested BBCode
- Compatible with modern browsers
- Built with minimal vanilla JS and your custom halo.js helpers

## Demo

Enter your text, pick a color, set the size, toggle styles, and click Generate BBCode to see the output.

## Installation

1. Download the files in the repository (into **one file**)
2. Open index.html

## Usage

1. Type your text into the input box.
2. Select a color using the color picker or enter a hex/named color.
3. Set the font size (optional).
4. Toggle B, I, U buttons for bold, italic, underline.
5. Click Generate BBCode.
6. Copy the generated BBCode from the output box.

## Example

Input:  

- Text: Hello World
- Color: red
- Size: 16
- Bold: yes
- Italic: yes

Output:

```bbcode
[color=#ff0000][size=16][b][i]Hello World[/i][/b][/size][/color]
```

## Files

- index.html – main HTML interface
- styles.css – styling for the UI
- script.js – JavaScript logic for BBCode generation

## Notes

- The color picker is styled for modern browsers; some legacy browsers may render it differently.
- Named colors are automatically converted to hex.
- The output BBCode ensures tags are properly nested and closed.

## Why this project will not be updated (as of January 8th, 2026)

The version I actively use depends on a private helper library that I created for my own projects. Because that library is not public and not intended to be released at this time, maintaining and updating this public version would cause unnecessary divergence and confusion.

As a result, this repository should be considered a finished snapshot rather than an actively maintained project. It will remain available for use. Currently under no bugs. But will not have added features.

**This may change if I later choose to release my library**

## License

MIT License © 2026
