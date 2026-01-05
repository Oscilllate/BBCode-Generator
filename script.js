// Grab elements
const textInput = document.getElementById("textInput");
const colorInput = document.getElementById("colorInput");
const sizeInput = document.getElementById("sizeInput");
const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const underlineBtn = document.getElementById("underlineBtn");
const generateBtn = document.getElementById("generateBtn");
const output = document.getElementById("output");

// Toggle states
let isBold = false;
let isItalic = false;
let isUnderline = false;

// Toggle buttons
boldBtn.addEventListener("click", () => {
  isBold = !isBold;
  boldBtn.classList.toggle("active", isBold);
});

italicBtn.addEventListener("click", () => {
  isItalic = !isItalic;
  italicBtn.classList.toggle("active", isItalic);
});

underlineBtn.addEventListener("click", () => {
  isUnderline = !isUnderline;
  underlineBtn.classList.toggle("active", isUnderline);
});

// BBCode helpers
function stringToHex(colorName) {
  const temp = document.createElement("div");
  temp.style.color = colorName;
  document.body.appendChild(temp);
  const computed = getComputedStyle(temp).color;
  document.body.removeChild(temp);
  const rgb = computed.match(/\d+/g);
  if (!rgb) return null;
  return "#" + rgb.slice(0,3).map(x=>parseInt(x).toString(16).padStart(2,"0")).join("");
}

function isHex(str) {
  str = str.trim();
  const hexRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{4}|[0-9a-fA-F]{8})$/;
  return hexRegex.test(str);
}

function createBBCode(options = {}) {
  const { text = '', colour, size, bold=false, italic=false, underline=false } = options;
  let bbcode = '';
  const usedTags = [];

  // Color
  if (colour) {
    let hex = colour;
    if (!isHex(colour)) hex = stringToHex(colour);
    if (hex) {
      bbcode += `[color=${hex}]`;
      usedTags.push('color');
    }
  }

  // Size
  if (size) {
    bbcode += `[size=${size}]`;
    usedTags.push('size');
  }

  // Styles
  if (bold) { bbcode += `[b]`; usedTags.push('b'); }
  if (italic) { bbcode += `[i]`; usedTags.push('i'); }
  if (underline) { bbcode += `[u]`; usedTags.push('u'); }

  // Insert text
  bbcode += text;

  // Close tags in reverse
  usedTags.reverse().forEach(tag => { bbcode += `[/${tag}]`; });

  return bbcode;
}

// Generate BBCode
generateBtn.addEventListener("click", () => {
  const bbcode = createBBCode({
    text: textInput.value,
    colour: colorInput.value,
    size: sizeInput.value,
    bold: isBold,
    italic: isItalic,
    underline: isUnderline
  });
  output.value = bbcode;
});
