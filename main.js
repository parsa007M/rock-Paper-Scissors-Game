for(var i=0;i<3;i++){
let userItem= parseInt(prompt("Please type your choise as a number.\n 1-Rock\n 2-paper \n3-Scissor"));
/* console.log(userItem); */
let appItem =Math.floor(Math.random()*3)+1;

let winner ;

//wors
/* if (userItem-appItem ==1){
winner= "user";
}
else if (userItem-appItm==2) {
    winner="app";
}

else if (userItem==appItem){
   winner= "draw";

}
else if ( userItem-appItem==-1){
    winner="app";
}
else if ( userItem-appItem==-2){
    winner="user";
}
 */
 // Beter 
 if (userItem==appItem) {
    winner= "draw";
} 
else if (userItem-appItem ==1 || userItem-appItem==-2){
    winner= "user";
    }
    else if (userItem-appItem ==2 || userItem-appItem==-1){
        winner= "app";
        }


        
        let converter=function(itemNumber){
            switch(itemNumber){
                case 1 :
                    return('Rock');
                    case 2 :
                        return('Paper');
                        case 3 :
                            return('Scissor');

                            default:
                                return('Number has to be between 1-3');

            }
        }
        
        let game= {
   
            userItem:converter(userItem),
            appItem:converter(appItem),
            winner,
           
        }
        console.log(game);

}
    