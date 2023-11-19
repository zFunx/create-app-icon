export function createAppIcon(text) {
  // Extract the first two letters or the first letters of the first two words
  const words = text.split(" ");
  let displayText;
  if (words.length > 1) {
    displayText = words[0].charAt(0) + words[1].charAt(0);
  } else {
    displayText = text.substring(0, 2);
  }

  // Choose a background color (solid or gradient) from material colors
  const backgroundColors = [
    "#FF5722", // Deep Orange
    "#9C27B0", // Purple
    "#2196F3", // Blue
    "#4CAF50", // Green
    "#FFC107", // Amber
    "#E91E63", // Pink
    "#3F51B5", // Indigo
    "#00BCD4", // Cyan
    "#CDDC39", // Lime
    "#795548" // Brown
  ]; // Example colors
  const backgroundColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

  // Choose text color (white or black) based on background brightness
  const textColor = isLight(backgroundColor) ? "black" : "white";

  // Create a canvas element
  const size = 512; // Example size for an app icon
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  // Decide whether to use a solid color or a gradient
  if (Math.random() < 0.5) {
    // Solid color
    ctx.fillStyle = backgroundColor;
  } else {
    // Gradient color
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, backgroundColor);
    gradient.addColorStop(1, lightenDarkenColor(backgroundColor, 80)); // Blending with white for the gradient
    ctx.fillStyle = gradient;
  }

  // Draw the rounded corner rectangle
  const cornerRadius = 50; // Example corner radius
  ctx.beginPath();
  ctx.moveTo(cornerRadius, 0);
  ctx.lineTo(size - cornerRadius, 0);
  ctx.quadraticCurveTo(size, 0, size, cornerRadius);
  ctx.lineTo(size, size - cornerRadius);
  ctx.quadraticCurveTo(size, size, size - cornerRadius, size);
  ctx.lineTo(cornerRadius, size);
  ctx.quadraticCurveTo(0, size, 0, size - cornerRadius);
  ctx.lineTo(0, cornerRadius);
  ctx.quadraticCurveTo(0, 0, cornerRadius, 0);
  ctx.closePath();
  // ctx.fillStyle = backgroundColor;
  ctx.fill();

  // Draw the text
  ctx.font =
    "bold " + size / (displayText.length == 2 ? 2.5 : 1.5) + "px Arial"; // Adjust font size as needed
  ctx.fillStyle = textColor;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(
    displayText.toUpperCase(),
    size / 2,
    size / (displayText.length == 2 ? 1.85 : 1.75)
  );

  // Output the data URL
  return canvas.toDataURL("image/png");
}

// Helper function to determine if a color is light or dark
function isLight(color) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
}

// Function to lighten or darken a color
function lightenDarkenColor(col, amt) {
  let usePound = false;
  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }
  const num = parseInt(col, 16);
  let r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
