let items = {
	number: document.querySelector("#number"),
	btn1: document.querySelector("#btn1"),
	btn2: document.querySelector("#btn2"),
	reset:  document.querySelector("#resetTo0"),
	plusTen:  document.querySelector("#plusTen"),
	lessTen:  document.querySelector("#lessTen")

}


numberToCount = 0;

function numberMath() {
	items.number.textContent = numberToCount
};

numberMath()

function counterPlus() {
	numberToCount++
	numberMath()
};

function counterLess() {
	numberToCount--
	numberMath()
};

function reset() {
	numberToCount = 0
	numberMath()
};


function plusTen() {
	numberToCount = numberToCount + 10
	numberMath()
}

function lessTen() {
	numberToCount = numberToCount - 10
	numberMath()
}

items.btn1.addEventListener('click', counterPlus);
items.btn2.addEventListener('click', counterLess);


items.reset.addEventListener('click', reset);

items.plusTen.addEventListener('click', plusTen);
items.lessTen.addEventListener('click', lessTen);
