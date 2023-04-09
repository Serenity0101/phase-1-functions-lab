function distanceFromHqInBlocks(blocks) {
    if ( blocks < 42)
     return (42 - blocks);
    
         else (blocks - 42) ;
             return (blocks - 42)
         
    
}
function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264
}



function distanceTravelledInFeet (a,b){
    if (b > a ){
         return (b - a) * 264;
    }
            else
                return ((a-b) * 264)
        
}
 
function calculatesFarePrice(start, destination){
    let feet = Math.abs((start - destination) *264)
    if (feet <= 400){
        return (feet)* 0
    }else if (feet > 400 && feet <= 2000){
        return Math.abs(feet-400)*0.02 ;
    }else if (feet > 2000 && feet <= 2500){
        return 25
    }else if (feet >2500) {
        return "cannot travel that far";
    }
}
        
        
    