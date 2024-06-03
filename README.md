# RandomColor

## Overview

RandomColor is a simple React component that allows users to generate random colors in different formats: Hex, RGB, and HSL. This project demonstrates the use of React hooks and basic state management to switch between different color formats and display the generated color.

## Features

- Generate random Hex colors
- Generate random RGB colors
- Generate random HSL colors (coming soon)
- Dynamic color display based on the selected color format

## Installation

To use this component in your project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/random-color.git
   ```
2. Navigate to the project directory:
   ```bash
   cd random-color
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To use the `RandomColor` component in your React application:

1. Import the component:
   ```javascript
   import RandomColor from "./path-to-component/RandomColor";
   ```
2. Include the component in your JSX:

   ```javascript
   function App() {
     return (
       <div className="App">
         <RandomColor />
       </div>
     );
   }

   export default App;
   ```

## Code Explanation

- **State Management:**

  - `typeOfColor` to track the current color format (Hex, RGB, or HSL).
  - `color` to store the generated color value.

- **Random Color Generation:**

  - `randomize(length)`: Utility function to generate a random number.
  - `handleHexColor()`: Function to generate a random Hex color.
  - `handleRGBColor()`: Function to generate a random RGB color.
  - `handleHSLColor()`: Function to generate a random HSL color (coming soon).

- **Effect Hook:**

  - `useEffect` to call the appropriate color generation function whenever `typeOfColor` changes.

- **User Interface:**
  - Buttons to switch between different color formats and generate random colors.
  - Dynamic styling to display the generated color.

## Future Improvements

- Implement the `handleHSLColor` function to enable HSL color generation.
- Add more customization options for users to specify ranges for color components.
- Enhance the UI for a better user experience.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contact

For any questions or suggestions, please open an issue or contact the repository owner.

---

Thank you for using RandomColor! Enjoy generating random colors for your projects!
