const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    toggle.addEventListener('click',()=>{
        nav.classList.toggle('show-menu')

        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle','nav-menu')


//Show Dropdown Menu
const dropdownItems = document.querySelectorAll('.dropdown__item')

//Select each dropdown item
dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button')

    //Select each button click
    dropdownButton.addEventListener('click',()=>{
        //Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown')
        //Call the toggleItem fuction
        toggleItem(item)
        //Remove the show-dropdownclass from other items
        if(showDropdown && showDropdown!= item){
            toggleItem(showDropdown)
        }
    })
})

//Create function to display the dropdown
const toggleItem = (item) =>{
    //Select each dropdown content
    const dropdownContainer = item.querySelector('.dropdown__container')

    //If the same item contains the show-dropdown class, remove
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    }else{
        //Add the maximum height to dropdown content and add the show-dropdown class
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

//Delete Dropdown Styles
const mediaQuery = matchMedia('(min-width:1118px)'),
        dropdown__container = document.querySelectorAll('.dropdown__container')

//Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () =>{
    //Validate if the media query reaches 1118px
    if(mediaQuery.matches){
        dropdownContainer.forEach((e) =>{
            e.removeAttribute('style')
        })

        dropdownItems.forEach((e)=>{
            e.classList.remove('show-dropdown')
        })
    }
    
}

addEventListener('resize',removeStyle)