getInputValues = () =>{

    let url = 'https://wa.me/27626685787?text=';

    console.log(url);
    let msg = `Hello

        Name: ${document.getElementById("name").value == "" ? "Full name and surname" : 
            document.getElementById("name").value}

        Email:${document.getElementById("email").value == "" ? "example@mail.com" :
            document.getElementById("email").value}

        Number:${document.getElementById("number").value == "" ? "+27 62 668 5787" :
            document.getElementById("number").value}

        Subject:${document.getElementById("subject").value == "" ? "subject" :
            document.getElementById("subject").value}

        Message:${document.getElementById("message").value == "" ? "message" :
            document.getElementById("message").value}

        `;

    console.log(msg);


    let link = url + encodeURI(msg);
    console.log(link);

    const submit = document.getElementById('submit');
    submit.setAttribute('href', url + encodeURI(msg));
}

const submit = document.getElementById('submit');

submit.addEventListener('click',function(e){
    getInputValues();

    e.preventDefault();
});


// alert('this site is being worked on');