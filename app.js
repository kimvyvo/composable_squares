const PinkBox = React.createElement('h2', { style: { background: '#f7cfd6', color: '#a91717' } }, 'red on pink');
const BlueBox = React.createElement('h2', { style: { background: '#5c95a7', color: 'white' } }, 'white on blue');
const RedBox = React.createElement('h2', { style: { background: '#a91717', color: '#5c95a7' } }, 'blue on red');
    
const container = React.createElement('div', {style: { display: 'flex' }}, [BlueBox, RedBox, PinkBox]);
ReactDOM.render(container, document.getElementById('container'));