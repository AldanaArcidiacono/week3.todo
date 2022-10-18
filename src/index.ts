import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { tasks } from './models/data.js';

console.log(tasks);

new Header('body');
new Main('body');
new Footer('body');
