This is a pop up menu module.
To use the module you just call the popUp function and enter the links that you need as paramaters.

EXAMPLE: 

import { popUp } from "ultimate-pop-ups";

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    popUp('home', 'about', 'contact');
});
