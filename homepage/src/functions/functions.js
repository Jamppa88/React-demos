
function getAge() {
	const bDate = new Date("1988-08-01");
	const age = new Date().getFullYear() - bDate.getFullYear();
	const month = new Date().getMonth() - bDate.getMonth();
	if (month < 0) {return age - 1;}
	else {return age;}
}

export {
	getAge,
}
