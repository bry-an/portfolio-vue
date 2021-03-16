<template>

<div id = "contact"><a name = "contact"></a>
<h2 id = "contact-header">MORE INFO</h2>
<div id = "contact-body">

  <p>Contact me</p>

    <form>
    <input type = "text" v-model='name' id = "contact-section-name" name = "name" placeholder = "Name" required />
    <input type = "email" v-model='email' id = "contact-section-email" name = "email" placeholder = "Email" required />
    <textarea id = "contact-section-message" v-model='message' name = "message" placeholder="Message" required />
<input type = "submit" id="contact-section-submit-btn" value = "submit" v-on:click.prevent="checkForm" />
    </form>
    <p class='error-text' v-if='errors.length'>
      <ul>
        <li v-for='error in errors' :key='error'>{{error}}</li>
      </ul>
    </p>
    <p id='submitted-text' v-if='this.thanks'>
      Thanks. We'll be in touch soon. 
    </p>
</div>
</div>
</template>


<script>
import axios from "axios";
export default {
  name: "Contact",
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      message: null,
      thanks: false
    };
  },
  methods: {
    checkForm: function() {
      this.errors = [];
      if (
        this.name &&
        this.email &&
        this.validEmail(this.email) &&
        this.message
      ) {
        console.log("test passed");
        this.submitToApi();
        return;
      }
      this.errors = [];
      if (!this.name) {
        this.errors.push("Please enter your name");
      }
      if (!this.email) {
        this.errors.push("Please enter an email address");
      }
      if (this.email && !this.validEmail(this.email)) {
        this.errors.push("Please enter a valid email address");
      }
      if (!this.message) {
        this.errors.push("Please enter a message");
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    clearContactArea: function() {
      var contactBody = document.getElementById("contact-body");
      (this.name = ""), (this.email = ""), (this.message = "");
      this.thanks = true;
      setTimeout(() => {
        this.thanks = false;
      }, 5000);
    },
    submitToApi: function() {
      const URL =
        "https://0zma21lu08.execute-api.us-east-1.amazonaws.com/02/contactme";
      const name = this.name;
      const email = this.email;
      const message = this.message;
      const data = {
        name,
        email,
        message
      };
      axios
        .post(URL, JSON.stringify(data))
        .then(response => console.log("aws response", response))
        .then(this.clearContactArea());
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

#contact-header {
  text-align: center;
  font-family: "Roboto", "sans-serif";
  font-size: 5rem;
  font-weight: bold;
  padding-top: 5%;
  padding-bottom: 3%;
  color: #444;
}

input {
  font-family: "Raleway", "sans-serif";
}

textarea {
  font-family: "Raleway", "sans-serif";
}

#contact-body {
  color: #555;
  font-size: 3rem;
  font-family: "Raleway", "sans-serif";
  width: 80%;
  margin: auto;
  min-height: 420px;
  text-align: center;
}
#contact-body p {
  text-align: center;
  font-family: "Raleway", "sans-serif";
}
#contact-section-email {
  width: 60%;
  margin-bottom: 3%;
}
#contact-section-name {
  width: 60%;
}

#contact-section-message {
  width: 60%;
}
#contact-section-submit-btn {
  display: block;
  width: 20%;
  font-size: 0.5rem;
  padding: 0;
  margin: auto;
}

#submitted-text {
  font-size: 2rem;
}
.error-text {
  font-size: 1.5rem;
  color: red;
}

@media (min-width: 400px) {
  #contact-header {
    font-size: 8rem;
  }
}
@media (min-width: 600px) {
  #contact-header {
    font-size: 9rem;
  }
}

@media (min-width: 900px) {
  #contact-header {
    font-size: 12rem;
  }

  #contact-section-submit-btn {
    font-size: 0.8rem;
  }
}
</style>