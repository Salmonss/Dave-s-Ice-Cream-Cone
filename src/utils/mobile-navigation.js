const MobileNav = () => {
    const mobilebar = document.querySelector(".navigation__mobile");
    const mobilecontent = document.querySelector(".mobile__container");
    const mobilelink = document.querySelectorAll(".mobile__link");

    let isnotmobile = false;

    mobilebar.addEventListener('click', () => {
        isnotmobile =!isnotmobile;
        if(isnotmobile) {
            mobilecontent.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }
        else{
            mobilecontent.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    });

    mobilelink.forEach(Link => {
        Link.addEventListener('click', () => {
            isnotmobile = false;
            mobilecontent.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    })

};

export default MobileNav;