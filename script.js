 // template_ktp887f
 // service_v4zbivo
 //CqJTqRzo-Ob3vbNV3


 let isModalOpen = false;
 let contrastToggle = false;

 function toggleContrast () {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += "dark-theme"  
    } else {
        document.body.classList.remove("dark-theme")
    }
 }

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
 
    /* 
    This is a promise that after they input the name, email, website and message and click the send button. It will go to the loading page and if it is successful it will show the Thank you message and if there's an error it will pop up a box to send an email directly
    */
    emailjs
        .sendForm(
            'service_v4zbivo','template_ktp887f',
            event.target, 'CqJTqRzo-Ob3vbNV3'
        ).then( () => {
            loading.classList.remove('modal__overlay--visible');
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert (
                'The email service is temporarily unavailable. Please contact me directly on monce.jp01@gmail.com'
            ); 
        })
   
    //Used to show if the code is working
    // setTimeout(() => {
    //     console.log('it worked')
    // }, 1000)
}

//Toggle to show the contact form section & send an email

function toggleModal() {
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove('modal--open')
    }
    //toggleModal
    isModalOpen = !isModalOpen;
    document.body.classList += " modal--open"
}