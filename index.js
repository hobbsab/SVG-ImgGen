const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(function promptUser() {
  rl.question('Enter text (up to 3 characters): ', (text) => {
    const trimmedText = text.trim().slice(0, 3);

    rl.question('Enter text color (keyword or hexcode): ', (textColor) => {
      rl.question('Enter shape (circle, triangle, or square): ', (shape) => {
        rl.question('Enter shape color (keyword or hexcode): ', (shapeColor) => {
//inputs
          console.log(`Generating SVG image with the following choices:
            Text: ${trimmedText}
            in the color ${textColor}
            on a
            ${shapeColor} ${shape}`);

// Generate an SVG image
        const svg = `<svg width="300" height="200">
        <text x="150" y="100" fill="${textColor}" text-anchor="middle">${text}</text>
        <${shape} fill="${shapeColor}" cx="150" cy="150" r="50" width="100" height="100"></${shape}>
      </svg>`;

// Save SVG image
        fs.writeFile('logo.svg', svg, (err) => {
        if (err) throw err;
        console.log('SVG file saved as logo.svg');
      });

      rl.close();
      });
    });
  });
});
})();


// class Shape {
//     constructor(color, text, textColor) {
//       this.color = color;
//       this.color = text;
//       this.textColor = textColor;
//     }
  
//     setColor(color) {
//       this.color = color;
//     }
  
//     render() {
//     // Implement the render method in the child classes
//     }
//   }


//   class Triangle extends Shape {
//     constructor(color) {
//       super(color);
//     }
  
//     render() {
//         return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
//       }
//     }


//   class Square extends Shape {
//     constructor(color) {
//       super(color);
//     }
  
//     render() {
//         return `<polygon points="50,50 150,50 150,150 50,150" fill="${this.color}" />`;
//     }
//   }

//   class Circle extends Shape {
//     constructor(color) {
//       super(color);
//     }
  
//     render() {
//         return `<polygon points="100,20 40,180 190,60 10,60 160,180" fill="${this.color}" />`;
//     }
//   }

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
