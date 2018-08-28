<template>

<div id = "contact"><a name = "contact"></a>
<h2 id = "contact-header">MORE INFO</h2>
<div id = "contact-body">

  <p>Contact me</p>

    <form>
<!-- <label for="contact-name">Name</label> -->
    <input type = "text" id = "contact-section-name" name = "name" placeholder = "Name" required />
    <input type = "email" id = "contact-section-email" name = "email" placeholder = "Email" required />
<!-- <label for="contact-message">Message</label>  -->
    <textarea v-on:submit.prevent id = "contact-section-message" name = "message" placeholder="Message" required />
<input type = "submit" id="contact-section-submit-btn" value = "submit" v-on:click.prevent="submitContactForm" />
    </form>

</div>
</div>
</template>


<script>
  export default {
    name: 'Contact',
    methods: {
      submitContactForm: function() {
            var contactBody = document.getElementById('contact-body');
            document.getElementById("contact-section-name").value = "";
            document.getElementById("contact-section-email").value = "";
            document.getElementById("contact-section-message").value = "";

            var submittedText = document.createElement('p');
            submittedText.setAttribute("id", "submitted-text")
            submittedText.innerText = "Thanks, we'll be in touch soon."
            contactBody.appendChild(submittedText);
      }
    }

}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

#contact-header {
  text-align: center;
  font-family: 'Roboto', 'sans-serif';
  font-size: 5rem;
  font-weight: bold;
  padding-top: 5%;
  padding-bottom: 3%;
  color: #444;
}


#contact-body {
  color: #555;
  font-size: 3rem;
  font-family: 'Raleway, sans-serif';
  width: 80%;
  margin: auto;
}
#contact-section-email {
  margin-bottom: 3%;
  width: 45%;
  border: 1px solid #ff5d4c
}
#contact-section-name {
  width: 44%;
  border: 1px solid #ff5d4c
}

#contact-section-message {
  width: 44%;
  border: 1px solid #ff5d4c
}
#contact-section-submit-btn {
display: block;
width: 20%;
margin-bottom: 1%;
border: 1px solid #ff5d4c;
font-size: 0.5rem;
padding: 0;
}

#submitted-text {
  font-size: 2rem;
}

@media (min-width: 400px) {
    #contact-header {
        font-size: 8rem;
    }
}
@media (min-width:600px) {
    #contact-header {
        font-size: 9rem;
    }
}

@media (min-width:900px) {
    #contact-header {
        font-size: 12rem;
    }

    #contact-section-submit-btn {
      font-size: 0.8rem;
    }
}

</style>