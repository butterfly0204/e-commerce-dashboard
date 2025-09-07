const navthemeButton = document.querySelector(".navtheme_button");

navthemeButton.addEventListener('click', () =>{
    const body =document.body;
    if(body.className ==""){
        body.className ="dark"
    }
    else{
        body.className = ""
    }
}
)

    


