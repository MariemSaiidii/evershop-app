import './style.css';
export const components = {
    home: require('./components/Home').default,
    HomePage: require('./components/Home').default // Alternative name
};
console.log("My custom theme loaded at 05:38 PM CET!");
