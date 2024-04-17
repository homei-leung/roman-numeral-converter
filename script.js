//Access the input number.
const inputNum = document.getElementById("number");

//Access the output div.
const output = document.getElementById("output");

//Access the convert button.
const convertBtn = document.getElementById("convert-btn");

//Define a function that checks that the input.
	//if value is NaN, output "Please enter a valid number."
const convertInput = () => {
	output.textContent = "";
	let number = inputNum.value;

	//if value is NaN or 0, output "Please enter a valid number."
	if (!number || isNaN(number) || parseInt(number) === 0){
		output.textContent = "Please enter a valid number.";
	}

	//if value is less than 0, output "Please enter a number greater than or equal to 1."
	if (number < 0){
		output.textContent = "Please enter a number greater than or equal to 1.";
	}

	//if value is equal to or greater than 4000, output "Please enter a number less than or equal to 3999."
	if (number >= 4000){
		output.textContent = "Please enter a number less than or equal to 3999.";
	}
	
	//Subtract the Arabic number from the input and adds the Roman numeral to the output. The function should continue to run while the input is greater than 0.
	while (number < 4000 && number > 0){
		output.textContent = "";
		//If value is >/= 1000, add "M"
		while (number >=1000){
			number -= 1000;
			output.textContent += "M";
		};
		//If value is >/= 900, add "CM"
		while (number >=900){
			number -= 900;
			output.textContent += "CM";
			};
		//If value is >/= 500, add "D"
		while (number >=500){
			number -= 500;
			output.textContent += "D";
		};
		//If value is >/=400, add "CD"
		while (number >=400){
			number -= 400;
			output.textContent += "CD";
			};
		//If value is >/=100, add "C"
		while (number >=100){
			number -= 100;
			output.textContent += "C";
			};
		//If value is >/=90, add "XC"
		while (number >=90){
			number -= 90;
			output.textContent += "XC";
			};
		//If value is >/=50, add "L"
		while (number >=50){
			number -= 50;
			output.textContent += "L";
			};
		//If value is >/=40, add "XL"
		while (number >=40){
			number -= 40;
			output.textContent += "XL";
			};
		//If value is >/=10, add "X"
		while (number >=10){
			number -= 10;
			output.textContent += "X";
			};
		//If value is >/=9, add "IX"
		while (number >=9){
			number -= 9;
			output.textContent += "IX";
			};
		//If value is >/=5, add "V"
		while (number >=5){
			number -= 5;
			output.textContent += "V";
			};
		//If value is >/=4, add "IV"
		while (number >=4){
			number -= 4;
			output.textContent += "IV";
			};
		//If value is >/=1, add "I"
		while (number >=1){
			number -= 1;
			output.textContent += "I";
			};

		break;
		}
	output.removeAttribute("hidden");
	inputNum.value = "";
};
	
//Run the functions when the convert button is pressed.
convertBtn.addEventListener("click", convertInput);

//Run the functions when the enter key is pressed.
input.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
	  convertInput();
	}
  });