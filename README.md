# Check Digit

https://justingolden21.github.io/check-digit/

### About

A simple utility for checking digits

### Functionality

Step 1:

Numbers are converted to letters with the following dictionary:

<code>
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
</code>

Dashes (-) are treated as 0s and take up a spaace.

Remaining non-numeral characters are ignored.

Step 2:

Each number is multiplied by 1, 3, or 7 depending on which order it appears in the sequence, where:

<code>
%3==0 : 1,
%3==1: 3,
%3==2: 7
</code> 

Step 3:

The numbers are summed, then the sum is divided by 10.

The result of that number modulo 10 times 10 (the "leftover" after the decimal place) is what we subtract from 10 to get the result.

For example:

<code>
123 => 12.3 => 0.3 => 3 => 10-3 => 7
</code>

Note: If result would be 10, it's 0 instead.
