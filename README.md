# Scrollbar - Custom React Scrollbar Component

A custom scrollbar component built with React and CSS. Features smooth scrolling, customizable styling, and cross-browser compatibility.

## Features

- Custom scrollbar styling
- Smooth scrolling
- Cross-browser compatibility
- Easy to integrate
- Lightweight and fast
- Customizable appearance

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jewel-190237/Scrollbar.git
   ```

2. Copy `Scrollbar.jsx` into your project

3. Import and use the component:
   ```jsx
   import Scrollbar from './Scrollbar';

   function App() {
     return (
       <Scrollbar>
         {/* Your content here */}
       </Scrollbar>
     );
   }
   ```

## Usage

### Basic Usage
```jsx
import Scrollbar from './Scrollbar';

function App() {
  return (
    <div>
      <Scrollbar>
        <div style={{ height: '500px' }}>
          {/* Scrollable content */}
        </div>
      </Scrollbar>
    </div>
  );
}
```

### Custom Styling
```css
/* Customize scrollbar appearance */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}
```

## Features in Detail

### Custom Styling
- Fully customizable scrollbar appearance
- CSS-based styling for easy modification
- Support for different scrollbar sizes and colors

### Smooth Scrolling
- Native smooth scrolling behavior
- Optimized performance
- Fluid user experience

### Cross-Browser Support
- Works on Chrome, Firefox, Safari, and Edge
- Fallback for older browsers
- Consistent experience across platforms

## Author

**Jewel-190237**
- GitHub: [Jewel-190237](https://github.com/Jewel-190237)
- Email: jewel190237@gmail.com

## Contributing

Feel free to fork this project and create pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).
