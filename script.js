let home_input = document.getElementById("home_id");
let guest_input = document.getElementById('guest_id');
let total_count;
function addHome1(){
    // home_input.value='';
    total_count=Number(home_input.value);
    home_input.value=total_count+1;
    // console.log(total_count);



}

function addHome2(){
    
    total_count=Number(home_input.value);
    home_input.value=total_count+2;

    
}

function addHome3(){
    total_count=Number(home_input.value);
    home_input.value=total_count+3;
    
}


function addGuest1(){
    total_count=Number(guest_input.value);
    guest_input.value=total_count+1;


}

function addGuest2(){
    total_count=Number(guest_input.value);
    guest_input.value=total_count+2;

    
}

function addGuest3(){
    total_count=Number(guest_input.value);
    guest_input.value=total_count+3;

    
}