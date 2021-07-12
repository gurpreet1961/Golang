var firebaseConfig = {
	apiKey: "AIzaSyB-4RkWx54OTeEwDu3bpJmxRXGRtL9VMvo",
	authDomain: "fir-login-3303c.firebaseapp.com",
	projectId: "fir-login-3303c",
	storageBucket: "fir-login-3303c.appspot.com",
	messagingSenderId: "300843484656",
	appId: "1:300843484656:web:8154ab52c97213ae134935",
	measurementId: "G-5VKHBVWCE6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const database = firebase.database();

function register() {
	fname = document.getElementById("fname").value;
	lname = document.getElementById("lname").value;
	email = document.getElementById("email").value;
	password = document.getElementById("password").value;
	if (valid_email(email) == false || valid_password(password) == false) {
		alert("Plzz Check your email or password");
		return;
	}
	if (valid_field(fname) == false) {
		alert("Plzz Enter A First Name");
	} else {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then(function () {
				var user = auth.currentUser;

				var database_ref = database.ref();

				var user_data = {
					email: email,
					fname: fname,
					lname: lname,
					last_login: Date.now(),
				};

				database_ref.child("users/" + user.uid).set(user_data);

				alert("Registertion Successfull");
			})
			.catch(function (err) {
				var err_code = err.code;
				var err_message = err.message;
				alert(err_message);
			});
	}
}
function login() {
	email = document.getElementById("email").value;
	password = document.getElementById("password").value;
	if (valid_email(email) == false || valid_password(password) == false) {
		alert("Plzz Check your email or password");
		return;
	}
	auth
		.signInWithEmailAndPassword(email, password)
		.then(function () {
			var user = auth.currentUser;

			var database_ref = database.ref();

			var user_data = {
				last_login: Date.now(),
			};

			database_ref.child("users/" + user.uid).update(user_data);

			alert("Login Successfull");
		})
		.catch(function (err) {
			var err_code = err.code;
			var err_message = err.message;
			alert(err_message);
		});
}
function valid_email(email) {
	expression =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (expression.test(email)) {
		return true;
	} else {
		return false;
	}
}

function valid_password(password) {
	if (password < 6) {
		return false;
	} else {
		return true;
	}
}

function valid_field(field) {
	if (field == null) {
		return false;
	} else if (field.length <= 0) {
		return false;
	} else {
		return true;
	}
}
