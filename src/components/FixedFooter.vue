
<template>

<div class = "row fixed-footer">
        <div id = "contact-window" class = "contact-window-hidden">
            <!--use swapComponent method with v-is: eventually: https://stackoverflow.com/questions/39391218/vuejs-swap-component-on-click-->
            <div id = "contact-window-header"> contact
            <button v-on:click="hideContactWindow" id = "hide-contact-button"> &mdash; </button>
            </div>
            <div id = "contact-window-body">
                <form>
            <label for="contact-name">Introduce yourself</label>
                <input type = "text" id = "contact-name" name = "name" placeholder = "Name" required />
                <input type = "email" id = "contact-email" name = "email" placeholder = "Email" required />
            <label for="contact-message">Message</label> 
                <textarea v-on:submit.prevent id = "contact-message" name = "message" required />
            <input type = "submit" id="contact-message-submit-btn" value = "submit" v-on:click.prevent="submitMessage" />
                </form>
                </div>
        </div>
        <button v-on:click="displayContactWindow" id = "footer-contact-button"><i class = "fas fa-envelope"></i>Message</button>
</div>


</template>


<script>
export default {
  name: "FixedFooter",
  methods: {
    displayContactWindow: function() {
      document.getElementById("contact-window").classList.add("contact-window");
      document.getElementById("footer-contact-button").style.display = "none";
    },
    hideContactWindow: function() {
      var contactWindowBody = document.getElementById("contact-window-body");
      document
        .getElementById("contact-window")
        .classList.add("contact-window-hidden");
      document
        .getElementById("contact-window")
        .classList.remove("contact-window");
      document.getElementById("footer-contact-button").style.display =
        "inherit";
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
    },

    submitMessage: function() {
      var contactWindowBody = document.getElementById("contact-window-body");
      document.getElementById("contact-name").value = "";
      document.getElementById("contact-email").value = "";
      document.getElementById("contact-message").value = "";

      var thankYouText = document.createElement("p");
      thankYouText.setAttribute("id", "thanks-message");
      thankYouText.innerText = "Thank you. Your message has been submitted.";
      contactWindowBody.appendChild(thankYouText);

      // while (contactWindowBody.firstChild)
      // contactWindowBody.removeChild(contactWindowBody.firstChild);
      // //why am I having issues chaining these JS Dom-manipulation methods?

      // var thanksMsg = document.createElement('p');
      // thanksMsg.setAttribute('id', 'thanks-message');
      // thanksMsg.innerText = "Thanks. Your message has been submitted.";
      var thanksBtn = document.createElement("button");
      thanksBtn.setAttribute("id", "thanks-message-button");
      thanksBtn.innerText = "close";
      contactWindowBody.append(thanksBtn);
      thanksBtn.addEventListener("click", this.hideContactWindow);
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
/* input[type="text"]:valid, input[type="email"]:valid, textarea:valid {
    border: 1px solid #ccc;
}

input[type="text"]:focus:invalid, input[type="email"]:focus:invalid, textarea:focus:invalid {
    outline: none;
}

input[type="text"]:invalid, input[type="email"]:invalid, textarea:invalid {
    box-shadow: 0 0 5px 1px red;
} */

form {
  margin: 0;
}

#thanks-message {
  margin-bottom: 0;
  text-align: center;
}

#thanks-message-button {
  margin: 0 auto 10px auto;
  height: 20px;
  padding: 0;
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
</style>