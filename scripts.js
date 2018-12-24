//todo

let dict = {
	'a':1,
	'b':2,
	'c':3,
	'd':4,
	'e':5,
	'f':6,
	'g':7,
	'h':8,
	'i':9,
	'j':1,
	'k':2,
	'l':3,
	'm':4,
	'n':5,
	'o':6,
	'p':7,
	'q':8,
	'r':9,
	's':2,
	't':3,
	'u':4,
	'v':5,
	'w':6,
	'x':7,
	'y':8,
	'z':9
}

//testcase: 02202123456789000jone06120600000013500

window.onload = function() {
	$('#input').change(function() {
		$('#output').val(doCheck($(this).val() ) );
	});
}

function doCheck(str) {
	let newStr = '';
	//convert letters to number
	for(idx in str) {
		if('abcdefghijklmnopqrstuvwxyz'.indexOf(str[idx])!=-1) {
			// console.log(dict[ str[idx] ]);
			newStr += dict[ str[idx] ];
		} else {
			newStr += str[idx];
		}
	}

	//convert string into numbers
	let arr = [];
	for(idx in newStr) {
		arr.push(parseInt(newStr[idx]) );
	}

	console.log(arr);

	//multiply by 1, 3, or 7, then get sum
	let sum = 0;
	for(idx in arr) {
		if(idx%3==1) {
			sum += arr[idx]*3;
		} else if(idx%3==2) {
			sum += arr[idx]*7;
		} else {
			sum += arr[idx]*1;
		}
	}

	let result = 10 - ( ( sum/10 ) %1 *10);
	return Math.round(result);
}

