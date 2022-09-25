a = 1;
b = 10;

a_string = a.toString();
b_string = b.toString();

c = a + b;
d = a_string + a_string;
e = b_string + a_string;
f = parseInt(b_string + a_string);

alert("a = " +a);
alert("b = " +b);
alert("c = " + c + " and type = " + typeof(c));
alert("d = " + d + " and type = " + typeof(d));
alert("e = " + e + " and type = " + typeof(e));
alert("f = " + f + " and type = " + typeof(f));

// c = ;
// d = ;
// e = ;
// f = ;