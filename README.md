### Overview
The `createAppIcon` function is a JavaScript utility designed to generate app icons dynamically. It creates a PNG image with customized text, typically the initials of the app name, over a colorful background. The background can be either a solid color or a gradient, chosen randomly from a predefined set of Material Design colors.

### Featues
- **Dynamic Text Extraction:** Extracts the first two letters from a single word or the first letters of the first two words from a given string.
- **Random Backgrounds:** Selects either a solid or gradient background color from Material Design palette.
- **Text Visibility:** Chooses the text color (white or black) based on the background color for optimal visibility.
- **Rounded Corners:** Draws the icon with rounded corners for a modern app icon look.
- **Canvas-Based Rendering:** Utilizes HTML5 Canvas for drawing and exporting the icon.

### Usage
```html
<img id="appIcon" src="" alt="App Icon">
<script src="path/to/your/icon-generator.js"></script>
<script>
    document.getElementById('appIcon').src = createAppIcon("Example App");
</script>
```

### Demo
Demo is uploaded at [https://codesandbox.io/s/app-icon-generator-8l7389](https://codesandbox.io/s/app-icon-generator-8l7389)
[!demo.png][demo]
