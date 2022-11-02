

document.addEventListener("mousemove", trackMousePos, event);









//temporarily using real coords to detect positions on jetpack. Change it to relative Pos when you figure out how
function trackMousePos(event){

    let docWidth = document.documentElement.offsetWidth;
    let docHeight = document.documentElement.offsetHeight;

    let scrollHeight = document.documentElement.scrollHeight;
    console.log("scrollHeight: " + scrollHeight);



    let xReal = event.pageX;
    let yReal = event.pageY;

    //xRelPos is x relative pos
    let xRelPos = (xReal * 100) / docWidth;

    
    let yRelPos = (yReal * 100) / docWidth;

    //the yRelPos has a direct relationship to the width of the browser. It is not dependenet on browser height

    console.log("xReal: " + xReal + " ; yReal: " + yReal);


    
    let currZone = checkMouseZone(xReal, yReal);

    switch(currZone){

        case "BuzzJetpack":
            buzzOnStandby();
            break;


        case "Shuttle":
            shuttleOnStandby();
            break;    

        case "None":
            document.removeEventListener("mousedown", activateBuzz);
            break;    

    }

}







function activateBuzz(){

    let leftWingParent = document.querySelector(".LEFTWING_G");

    leftWingParent.classList.toggle("LeftWing_Parent_Active");


    let leftWingChild = document.querySelector(".LEFTWING_CHILD_G");

    leftWingChild.classList.toggle("LeftWing_Child_Active");



    let buzzWhole = document.querySelector(".BUZZ_G");
    buzzWhole.classList.toggle("BUZZ_G_ACTIVE_SHAKE");



    let rightWingParent = document.querySelector(".RIGHTWING_G");

    rightWingParent.classList.toggle("RightWing_Parent_Active");

    let rightWingChild = document.querySelector(".RIGHTWING_CHILD_G");

    rightWingChild.classList.toggle("RightWing_Child_Active");


    let beam = document.querySelector(".BEAM_G");

    beam.classList.toggle("BEAM_G_Active");


    //now handling the content display containers

    let contentDiv = document.querySelector(".BuzzLightyear_ContentSection_HIDDEN");

    contentDiv.classList.toggle("BuzzLightyear_ContentSection");




}


function activateShuttle(){

    let sideWing = document.querySelector(".SHUTTLE_SIDEWING_G");

    sideWing.classList.toggle("SHUTTLE_SIDEWING_G_ACTIVE");


    let underside_sideWing = document.querySelector(".SHUTTLE_UNDERSIDE_SIDEWING_G");

    underside_sideWing.classList.toggle("SHUTTLE_UNDERSIDE_SIDEWING_G_ACTIVE");

}


//Will make Buzz glow and then detect a mouseclick and activate on that mouseclick
function buzzOnStandby(){
    document.addEventListener("mousedown", activateBuzz);
}

function shuttleOnStandby(){
    document.addEventListener("mousedown", activateShuttle);

}




function checkMouseZone(xPos, yPos){

    let currZone = "None";

    if(xPos >= 347 && xPos <= 505){

        if(yPos >= 350 && yPos <= 500){

            currZone = "BuzzJetpack";

        }

    }



    if(xPos >= 1020 && xPos <= 1300){

        if(yPos >= 305 && yPos <= 637){

            currZone = "Shuttle";

        }

    }

    return currZone;

}
