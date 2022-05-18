var = random_number
score = 0
function preload()
{

}
function setup()
{
 canvas=createCanvas(300, 300);
 canvas.center();
 background("white");
}
function draw()
{
check_sketch()
if(draw_sketch == sketch){
answer_holder="set";
score++;
document.getElementById("score").innerHTML = 'score'+score;
}
}
function createCanvas()
{
    background("white");
}
function updateCanvas()
{
    background("white")
}
function check_sketch(){
    timer_counter++
    document.getElementById("timer").innerHTML = 'timer'+timer_counter;
    if(timer_counter>0){
        timer_counter = 0;
        timer_check = "completed";
    }
}
