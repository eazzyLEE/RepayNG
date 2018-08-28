$(function () {
    $("#wizardForm").simpleWizard({
      cssClassStepActive: "active",
      cssClassStepDone: "done",
      onFinish: function() {
        alert("Wizard finished")
      }
    });

  });

var validator = $("#wizardForm").validate({
    errorClass: 'help-block text-danger',
    rules: {
      email: {
        email: true
      }
    },
    messages: {
      first_name: "Please specify your first name",
      last_name: "Please specify your last name",
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      password: {
          requied: "Please enter your password",
          password: "Password must contain at least a capital letter, a number and a symbol"
      }
    }
});

  // Validate Step One
  $("#step_one_button").click(function() {

    const step_one_fields = [ 
        "#title",
        "#first_name",
        "#last_name",
        "#day",
        "#month",
        "#year",
        "#status",
        "#gender",
        "#address",
        "#lga",
        "#state",
        "#phone"
    ];

    let isValid = false;

    $("#step_one_button").removeClass('wizard-next');

    for (id of step_one_fields) {
        isValid = validator.element( id )
        if (!isValid) {
            // when one input is not valid, no need to continue looping...
            break;
        }
    }

    if (isValid) { // if all fields are valid, move to another step..
      $("#step_one_button").addClass('wizard-next');
      $("this").click();
    }
  });

  // Validate step 2
  $("#step_two_button").click(function() {

  let email = $("#email").val(),
    password = $("#password").val(),
    password2 = $("#password2").val();

    $("#step_two_button").removeClass('wizard-next');
    if (true) { // add all validation
      $("#step_two_button").addClass('wizard-next');
      $("this").click();
    }
  });

  // Validate step 3
  $("#step_three_button").click(function() {

  let account_number = $("#account_number").val(),
      bvn = $("#bvn").val(),
      card_number = $("#card_number").val(),
      ccv = $("#ccv").val(),
      pin = $("#pin").val(),
      pin2 = $("#pin2").val();

    $("#step_three_button").removeClass('wizard-next');
    if (true) { // add all validation
      $("#step_three_button").addClass('wizard-next');
      $("this").click();
    }
  });

  // Validate step 4
  $("#step_four_button").click(function(event) {
      event.preventDefault();
      $("#step_four_button").removeClass('wizard-next');
      if (true) { // add all validation
        registerUser(this)
      }
  });

  function registerUser(event){
      axios.post('/user/register', {
          title: $("#title").val(),
          first_name: $("#first_name").val(),
          last_name: $("#last_name").val(),
          day: $("#day").val(),
          month: $("#month").val(),
          year: $("#year").val(),
          status: $("#status").val(),
          gender: $("#gender").val(),
          address: $("#address").val(),
          lga: $("#lga").val(),
          state: $("#state").val(),
          phone: $("#phone").val(),
          email: $("#email").val(),
          password: $("#password").val(),
          account_number: $("#account_number").val(),
          bvn: $("#bvn").val(),
          card_number: $("#card_number").val(),
          ccv: $("#ccv").val(),
          pin: $("#pin").val(),
          date_of_birth: '21-3-1975',
        })
        .then(function (response) {
          if (response.data.status == 'error' ) {
            alert(response.data.message)
            return false;
          } else {
            $("#step_four_button").addClass('wizard-next');
            var wizard = $('#wizardForm').bootstrapWizard();
            wizard.bootstrapWizard('next')
          }
        })
        .catch(function (error) {
          console.log(error)
        });
  }