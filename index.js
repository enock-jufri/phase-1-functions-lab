// Code your solution in this file!
function distanceFromHqInBlocks(street){
    if(street > 42){
    return street - 42
    }
    else
    return 42 - street
}

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264
}
function distanceTravelledInFeet(start, destination){
    return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start)
}
function calculatesFarePrice(start, destination){
    let d = distanceTravelledInFeet(start,destination)
    if (d <= 400){
        return 0
    }
    else if(d > 400 & d < 2000){
        return ((d-400) * 2) / 100
    }
    else if(d > 2000 & d < 2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }
}