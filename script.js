function nameMessage() {

      document.querySelector(".name_message").innerHTML = `Welcome ${document.querySelector(".firstname").value}, thanks for joining our waitlist`

}

function welcome() {
      localStorage.setItem("firstname",(document.querySelector(".firstname").value))
      localStorage.setItem("lastname",(document.querySelector(".secondname").value))
      localStorage.setItem("email",(document.querySelector(".email").value))
}
welcome()
function emailChecker() {
      if (document.querySelector(".email").value.trim() ==! "") {
            document.querySelector(".email_message").classList.add("red")
            document.querySelector(".email_message").classList.remove("green")
            document.querySelector(".email_message").innerHTML = "No press submit if that thing no email address ohhh"
      }
      else {
            document.querySelector(".email_message").classList.add("green")
            document.querySelector(".email_message").classList.remove("red")
            document.querySelector(".email_message").innerHTML = "Goodwork"
           
      }
}
function button() {
      document.querySelector("button").classList.toggle("clicked")
}
