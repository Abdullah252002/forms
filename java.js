function save_data_in_file() {
  var first_name = document.getElementById("first_name").value;
  var last_nme = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var street_address = document.getElementById("street_address").value;
  var city = document.getElementById("city").value;
  var country = document.getElementById("country").value;
  var description = document.getElementById("description").value;

  var data = `Name: ${
    first_name + " " + last_nme
  }\nEmail: ${email} \nPhone: ${phone}\nstreet address: ${street_address} \ncity: ${city} \ncountry: ${country}\ndescription: ${description} `;

  var blob = new Blob([data], { type: "text/plain" });
  var url = window.URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "form_data.txt";
  a.click();
}
