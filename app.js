
const birthDay=document.querySelector("#date-of-birth");
const luckyNum=document.querySelector("#lucky-number");
const btncheck=document.querySelector("#check-number");
const output = document.querySelector("#output-container");
const noteIce=document.querySelector(".note-container");

function checknumberislucky(){
    const dob = birthDay.value;
    const sum = calculateSum(dob);
    console.log(sum);
    if (Number(luckyNum.value) < 0) {
		output.innerText = " Please enter a positive number ";
		return 0;
	}
    if(sum&&dob)
    compareValues(sum,luckyNum.value)
    else{
        output.innerText="both fields are required to be filled "
    }


}


function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let index=0;index<dob.length;index++){
        sum = sum+ Number(dob.charAt(index));


    }
    return sum;
}

function compareValues(sum,luckyNum){
    if(sum%luckyNum==0){
    output.innerText ="ahan! your birthday is lucky 🥳🎈🎈🎈";
    }else{
      output.innerText ="oops!we are sorry 😮";
    }
    }

 function hideOnClick(){
     noteIce.style.display = "none";
    }
    
btncheck.addEventListener("click",checknumberislucky);
noteIce.addEventListener("click",hideOnClick);
