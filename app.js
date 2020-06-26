window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll(".pads div");
    console.log(sounds)
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d393",
        "#2367a7",
        "#df1313",
        "#db1ecc",
        "#bdc0c0",
        "#54df13"
    ];
    
    // add click event to play music on each pad
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    //create a function that makes bubbles
    const createBubbles = (index)=>{
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
    
});