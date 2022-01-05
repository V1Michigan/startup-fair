function checkEmail(email) {
  // function to check whether an email is legit
  // TODO: eventually use api to check

  const spamWords = ["test", "spam", "a"];
  const specialChars = ["!", "*", "&", "^", "$", "#"];

  if (!email.toLowerCase().includes("@")) {
    return false;
  }

  let tempEmail = email.toLowerCase().trim();
  let before = tempEmail.substr(0, tempEmail.indexOf("@"));
  let domain = tempEmail.substr(tempEmail.indexOf("@") + 1);
  if (domain.toLowerCase() !== "umich.edu") {
    return false;
  }

  let spam = false;
  spamWords.forEach((word) => {
    if (before === word) {
      spam = true;
    }
  });
  specialChars.forEach((char) => {
    if (tempEmail.includes(char)) {
      spam = true;
    }
  });

  if (tempEmail.split("@").length - 1 > 1) {
    spam = true;
  }
  if (before.includes(" ") || spam || before.length <= 1) {
    return false;
  }
  return true;
}

export function pushEmailToSheets(email) {
  var formData = new FormData();
  formData.append("email", email.toLowerCase().trim());

  // TODO: hide api request urls in _redirects (netlify)
  fetch(
    "https://script.google.com/macros/s/AKfycbz0glmfd9DVo1_NkplXlXRFH_HGS9c-SnnU7uhQr2sLM-_tMeKY6QWjPFCFlBVjQRHN/exec",
    { method: "POST", body: formData }
  );
}

export function sendAWSEmail(email, submit, first_name) {
  var obj = { email: email.toLowerCase().trim() };
  if (submit) {
    obj["type"] = "submitted";
  }
  if (first_name) {
    obj["first_name"] = first_name;
  }
  let objEmail = JSON.stringify(obj);

  fetch(
    `https://q7xs96n2w0.execute-api.us-east-1.amazonaws.com/default/StartupFairSignupEmail`,
    { method: "POST", body: objEmail }
  );
}

export function pushToSheets(email) {
  console.log(email);
  if (checkEmail(email)) {
    pushEmailToSheets(email);
    return true;
  } else {
    return false;
  }
}

export function sendEmail(email) {
  if (checkEmail(email)) {
    pushEmailToSheets(email);
    sendAWSEmail(email, false, false);
    return true;
  } else {
    return false;
  }
}
