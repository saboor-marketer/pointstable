# Cricket Leagues Points Table

An interactive and responsive points table for HBL PSL and TATA IPL with live animations and real-time updates.

## Features

- **Dual League Display**: Side-by-side tables for HBL PSL and TATA IPL
- **Real-time Data**: Latest team standings with points and NRR
- **Interactive UI**: Hover effects and smooth animations
- **Responsive Design**: Works on all screen sizes
- **Official Logos**: All team and league logos included
- **Animated Counters**: Points animate when page loads
- **Bubble Animations**: Decorative background animations

## Technologies Used

- HTML5
- CSS3 (with Animations)
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome Icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cricket-points-table.git
   ```

2. Open `index.html` in your web browser.

## Data Sources

- Team standings are based on the latest available data
- Team logos are sourced from official team websites and Wikipedia
- League logos are the official 2024 versions

## Customization

### Update Team Data
Edit the `pslTeams` and `iplTeams` arrays in `script.js` to update team statistics:

```javascript
const pslTeams = [
    { name: 'Team Name', played: 8, won: 5, lost: 3, nr: 0, points: 10, nrr: 0.75 },
    // ... more teams
];
```

### Update Logos
To update team logos, modify the `teamLogos` object in `script.js`:

```javascript
const teamLogos = {
    'Team Name': 'path/to/logo.png',
    // ... more teams
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Browsers

## License

This project is open source and available under the [MIT License](LICENSE).

## Screenshots

![PSL Points Table](screenshots/psl-screenshot.png)
![IPL Points Table](screenshots/ipl-screenshot.png)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

- Team logos and data from official sources
- Bootstrap for UI components
- Font Awesome for icons
