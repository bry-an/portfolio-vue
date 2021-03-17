
<template>

<div class = "row fixed-footer">
        <div id = "contact-window" class = "contact-window-hidden">
            <!--use swapComponent method with v-is: eventually: https://stackoverflow.com/questions/39391218/vuejs-swap-component-on-click-->
            <div id = "contact-window-header"> contact
            <button @click="hideContactWindow" id = "hide-contact-button"> &mdash; </button>
            </div>
            <div id = "contact-window-body">
                <form>
            <label for="contact-name">Introduce yourself</label>
                <input type = "text" v-model='name' id = "contact-name" name = "name" placeholder = "Name" required />
                <input type = "email" v-model='email' id = "contact-email" name = "email" placeholder = "Email" required />
            <label for="contact-message">Message</label> 
                <textarea v-model='message' v-on:submit.prevent id = "contact-message" name = "message" required />
            <input type = "submit" id="contact-message-submit-btn" value = "submit" v-on:click.prevent="checkForm" />
                </form>
                </div>
        <p class='error-text' v-if='errors.length'>
          <ul>
            <li v-for='error in errors' :key="error">{{error}}</li>
          </ul>
        </p>
        <p id='thanks-message' v-if='this.thanks'>
          Thanks. Your message has been submitted.
        </p>
        <button id='thanks-message-button' v-if='this.thanks' v-on:click='this.hideContactWindow'>close</button>

        </div>
        <button v-if="!windowOpen" @click="displayContactWindow" id = "footer-contact-button"><i class = "fas fa-envelope"></i>Message</button>
</div>


</template>


<script>
import axios from "axios";
export default {
  name: "FixedFooter",
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      message: null,
      thanks: false,
      windowOpen: false
    };
  },
  methods: {
    displayContactWindow() {
      this.windowOpen = true
      document.getElementById("contact-window").classList.add("contact-window");
      document.getElementById("footer-contact-button").style.display = "none";
      this.thanks = false;
    },
    hideContactWindow() {
      this.windowOpen = false
      this.errors = []
      var contactWindowBody = document.getElementById("contact-window-body");
      document
        .getElementById("contact-window")
        .classList.add("contact-window-hidden");
      document
        .getElementById("contact-window")
        .classList.remove("contact-window");
      if (
        contactWindowBody.contains(document.getElementById("thanks-message"))
      ) {
        contactWindowBody.removeChild(
          document.getElementById("thanks-message")
        );
        contactWindowBody.removeChild(
          document.getElementById("thanks-message-button")
        );
      }
      this.thanks = false;
    },
    checkForm() {
      this.errors = [];
      if (
        this.name &&
        this.email &&
        this.validEmail(this.email) &&
        this.message
      ) {
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
    validEmail(email) {
      // eslint-disable-next-line no-useless-escape
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    clearFields() {
      this.thanks = true;
      this.email = "";
      this.name = "";
      this.message = "";
    },
    submitToApi() {
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
        .then(this.clearFields());
    }
  }
};
</script>
<style>
@import url("https://use.fontawesome.com/releases/v5.2.0/css/all.css");
@import url("https://fonts.googleapis.com/css?family=Libre+Baskerville");

.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 1%;
  z-index: 2;
}

.contact-window-hidden {
  display: none;
}

.contact-window {
  z-index: 2;
  border-radius: 3px;
  display: inherit;
  background-color: white;
  width: 300px;
  display: inherit;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-radius: 10px 10px 0 0;
  min-height: 200px;
}

#contact-window-header {
  background-color: #ff5d4c;
  border: 1px solid #ff5d4c;
  color: white;
  position: relative;
  padding: 0;
  border-radius: 10px 10px 0 0;
  text-align: center;
}

#contact-window-body {
  font-size: 1.3rem;
  padding: 10px;
}

#contact-window-body input {
  height: 35px;
  width: 100%;
}

#contact-window-body textarea {
  width: 100%;
}

#contact-message-submit-button {
  display: block;
}

input[type="text"] {
  margin-bottom: 25px;
}

form {
  margin: 0;
}

#thanks-message {
  margin-bottom: 0;
  text-align: center;
}

.error-text {
  color: red;
  font-size: 1rem;
  margin-bottom: 0;
  margin-left: 1rem
}

.error-text li {
  margin-bottom: 0
}

#thanks-message-button {
  margin: 0 auto 0 auto;
  padding-bottom: 5px;
  font-size: 1rem;
  border: none;
  display: block;
}

#footer-contact-button {
  background-color: #ff5d4c;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  width: 200px;
  position: absolute;
  bottom: 0;
  margin-bottom: 0;
}

#hide-contact-button {
  border: none;
  color: white;
  position: absolute;
  right: 2px;
  padding: 0 5px 0 0;
  margin: 0;
  line-height: 0;
  bottom: -4px;
}

.footer-contact-button-hidden {
  display: none;
}

.fa-envelope {
  font-size: 15px;
  padding: 3px;
}
ul {
  margin-bottom: 0;
}

</style>