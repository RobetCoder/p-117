quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant"]



function updateCanvas(){
    background(white);
    random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
    console.log(quick_draw_data_set[random_number]);
    sketch=quick_draw_data_set[random_number];
    document.getElementById("sketch").innerHTML=show_sketch;
}
function setup(){
    canvas=createCanvas(380, 380);
    canvas.center();
    background(white);
}
    
function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
        background("white");
        canvas.mouseReleased(classifyCanvas);
        synth = window.speechSynthesis;
}
function clearCanvas(){
    background("white");
}
function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}
function draw(){
    stroke(0);
    strokeWeight(13);
    if (mouseIsPressed){ 
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    if(draw_sketch== sketch){
        document.getElementById("result").innerHTML=set;
        document.getElementById("score").innerHTML="<h4 id='score'>Score:"+score+"</h4>";
        score = score+1
}}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    }
    console.log(results);
    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
    document.getElementById('label').innerHTML = 'Label :'+results[0].label;
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}