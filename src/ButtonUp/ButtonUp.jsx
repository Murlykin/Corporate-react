// import {
//     Button,
// } from "./ButtonUp.styled";


// function BtnScrollUp() {

//     const handlerScrollUp = () => {
//         if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//             window.scrollTo({
//                 top: 0,
//                 left: 0,
//                 behavior: 'smooth',
//             });
//         }
//     }

//     return (
//         <Button onClick={handlerScrollUp}>UP&#11014;</Button>
//     );
// }

// export default BtnScrollUp;
import { addBackToTop } from 'vanilla-back-to-top';

addBackToTop ({
    backgroundColor: '#f4596b',
    innerHTML:
        '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>',
    cornerOffset: 10,
    textColor: '#ffffff',
});

export default addBackToTop ;
