
const Modalcard = () => {
    // Shake
    const OpenButton = document.getElementById("Milkeshake");
    const contentButton = document.querySelector(".modal_container_item");
    const closebutton = document.querySelectorAll(".icon-x");
    // Sandwich
    const Opensandwich = document.getElementById("Sandwich")
    const contentsandwich = document.querySelector(".modal_container_two");
    const closesandwich = document.querySelectorAll(".icon-x-sandwich");
    // Float
    const OpenFloat = document.getElementById("Float");
    const contentfloat = document.querySelector(".modal_container_three");
    const closefloat = document.querySelectorAll(".icon-x-float");
    // Cake
    const OpenCake = document.getElementById("Cake");
    const contentCake = document.querySelector(".modal_container_four");
    const closeCake = document.querySelectorAll(".icon-x-cake");
    // Sundaes
    const OpenSundaes = document.getElementById("Sundaes");
    const contentSundaes = document.querySelector(".modal_container_five");
    const closeSundaes = document.querySelectorAll(".icon-x-sundaes");
    // Coffee
    const OpenCoffee = document.getElementById("Coffee");
    const contentCoffee = document.querySelector(".modal_container_six");
    const closeCoffee = document.querySelectorAll(".icon-x-coffee");
    
    
    // milkshake-event
    OpenButton.addEventListener('click', OpenModal);
    // sandwich-event
    Opensandwich.addEventListener('click', Sandwich);
    // float-event
    OpenFloat.addEventListener('click', Float);
    // cake-event
    OpenCake.addEventListener('click', Cake);
    // sundaes-event
    OpenSundaes.addEventListener('click', Sundaes);
    // Coffee-event
    OpenCoffee.addEventListener('click', Coffee);


    // milkshake-close
    closebutton.forEach(close => {
        close.addEventListener('click', CloseModal);
    })

    // Sandwich-close
    closesandwich.forEach(close => {
        close.addEventListener('click', Closesandwich);
    })

    // Float-close
    closefloat.forEach(close => {
        close.addEventListener('click', Closefloat);
    })

    // Cake-close
    closeCake.forEach(close => {
        close.addEventListener('click', Closecake);
    })

    // Sundaes-close
    closeSundaes.forEach(close => {
        close.addEventListener('click', Closesundaes);
    })

    // Coffee-close
    closeCoffee.forEach(close => {
        close.addEventListener('click', Closecoffee);
    })


    // Open-function
    function OpenModal(){
        contentButton.style.display = 'block';
    }

     function Sandwich(){
        contentsandwich.style.display = 'block';
    }

    function Float(){
        contentfloat.style.display = 'block';
    }

    function Cake(){
        contentCake.style.display = 'block';
    }

    function Sundaes(){
        contentSundaes.style.display = 'block';
    }

    function Coffee(){
        contentCoffee.style.display = 'block';
    }


    // close-function
    function CloseModal(){
        contentButton.style.display = 'none';
    }

    function Closefloat(){
        contentfloat.style.display = 'none';
    }

    function Closesandwich(){
        contentsandwich.style.display = 'none';
    }

    function Closecake(){
        contentCake.style.display = 'none';
    }

    function Closesundaes(){
        contentSundaes.style.display = 'none';
    }

    function Closecoffee(){
        contentCoffee.style.display = 'none';
    }





}
export default Modalcard;
