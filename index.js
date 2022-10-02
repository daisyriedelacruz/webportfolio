console.log("Hello WOrld")

function checkGift(day) {
	let gifts = [
	"partridge",
	"doves",
	"hens",
	"rings"
	];

	if(day > 0 && day < 4) {
		return `I wasn given${day} ${gifts[day-1]}`;
	}
	else{
		return "No gifts were given";
	}

}
checkGift(3);

let students = ["John", "Paul"]

console.log("Graduates:");

for (let count = 0; count <= students.length; count++){
	console.log(students[count]);
}

// function checkLeapYear(year) {

// 	if(year % 4) {
// 		if (year % 100 = 0){
// 			if(year %400 = 0){
// 				console.log(`Leap year`);
// 			}else{
// 				console.log(`Not leap year`)
// 			} 
// 		}else{
// 				console.log("Leap Year");
// 			}
// 		} else {
// 				console.log("Not a leap year")
// 			}
// 		}
// 	}
// checkLeapYear(1999)

for (let row =1; row <3; row++) {
	for (let col=1; col <= row; col++) {
		console.log(`Current row: ${row}, Current col: ${col}`);
	}
};