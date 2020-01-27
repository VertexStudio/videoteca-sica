import scene1 from "./assets/scene1.mp4"
import scene2 from "./assets/scene2.mp4"
import scene3 from "./assets/scene3.mp4"
//import scene4 from "./assets/scene4.mp4"

const getModule = (videoToPlay: string)=> {
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

export default getModule