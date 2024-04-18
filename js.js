function formchecker() {
  var nom = document.getElementById('studname').value;
  var mal = document.getElementById('emailadd').value;
  var sex = document.querySelector('input[name="biosex"]:checked');
  var grd = document.getElementById('gradelevel').value;
  var checkboxes = document.querySelectorAll('input[type="checkbox"][name="reason[]"]');
  var checked = false;

  if (!nom || !mal || !sex || !grd) {
    alert("Some of the fields are empty.");
    event.preventDefault();
    return false;
  }

  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          checked = true;
          break;
      }
  }

  if (!checked) {
      alert("Select at least one reason for joining, please.");
      event.preventDefault();
      return false;
  }
  
  return true;
}

function clr() {
  document.getElementById("registrationform").reset();
  event.preventDefault();
}