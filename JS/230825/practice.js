{
	for (let i = 2; i < 10; i++) {
		for (let j = 1; j < 10; j++) {
			document.write(i + " * " + j + " = " + i * j + "<br>");
		}
	}
}

{
	let i = 1;
	while (i < 10) {
		document.write(i * 2, "<br>");
		i++;
	}
}

// do-while은 무조건 한번은 실행함
{
	let i = 1;
	do {
		console.log("무조건 실행함");
		i++;
	} while (i < 10);
}

{
	let num = 0;

	while (num < 11) {
		num++;

		if (num === 5) {
			continue;
		}
		document.write(num, "<br>");
	}
}

// label
// 50보다 큰 수가 나오면 반복문 완전 종료
{
	outer: for (let i = 2; i < 10; i++) {
		for (let j = 1; j < 10; j++) {
			if (i * j > 50) break outer;
			document.write(i + " * " + j + " = " + i * j + "<br>");
		}
	}
}

{
	outer: for (let i = 2; i < 10; i++) {
		for (let j = 1; j < 10; j++) {
			if (i * j > 50) continue outer;
			document.write(i + " * " + j + " = " + i * j + "<br>");
		}
		document.write(i, "단 끝남 <br>");
	}
}

// Event listen
// {
//     const handlerfn = () => console.log("클릭됨!");

//     document.addEventListener("click", handlerfn);
// }

{
	const handlerfn = () => (document.body.innerHTML += "<div>서버에서 받아온 데이터</div>");

	document.addEventListener("click", handlerfn);
}
