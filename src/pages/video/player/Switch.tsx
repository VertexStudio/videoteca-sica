import scene1 from "./assets/scene1.mp4"
import scene2 from "./assets/scene2.mp4"
import scene3 from "./assets/scene3.mp4"
import img1 from "./assets/img/img1.jpg"
import img2 from "./assets/img/img2.jpg"
import img3 from "./assets/img/img3.jpg"
import img4 from "./assets/img/img4.jpeg"
import img5 from "./assets/img/img5.jpg"



//import scene4 from "./assets/scene4.mp4"

export const getModule = (videoToPlay: string)=> {
    switch (videoToPlay) {
        case "1":
            return scene1;
        case "2":
            return scene2;
        case "3":
            return scene3;
        // case "4":
        //     return scene4;
        
    }
}

// getImage (imageToShor: string): {}

export const getContentImg=(Cimage: string)=> {
    switch (Cimage){
        case "1":
            return img1;
        case "2":
            return img2;
        case "3":
            return img3;
        case "4":
            return img4;
        case "5":
            return img5;
    }
}


