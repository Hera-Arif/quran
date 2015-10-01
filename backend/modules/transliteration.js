module.exports = function (text) {
	text = text.split('')
	
	var char = {
		"'" : String.fromCharCode(1569),
		'>' : String.fromCharCode(1571),
		'&' : String.fromCharCode(1572),
		'<' : String.fromCharCode(1573),
		'}' : String.fromCharCode(1574),
		'A' : String.fromCharCode(1575),
		'b' : String.fromCharCode(1576),
		'p' : String.fromCharCode(1577),
		't' : String.fromCharCode(1578),
		'v' : String.fromCharCode(1579),
		'j' : String.fromCharCode(1580),
		'H' : String.fromCharCode(1581),
		'x' : String.fromCharCode(1582),
		'd' : String.fromCharCode(1583),
		'*' : String.fromCharCode(1584),
		'r' : String.fromCharCode(1585),
		'z' : String.fromCharCode(1586),
		's' : String.fromCharCode(1587),
		'$' : String.fromCharCode(1588),
		'S' : String.fromCharCode(1589),
		'D' : String.fromCharCode(1590),
		'T' : String.fromCharCode(1591),
		'Z' : String.fromCharCode(1592),
		'E' : String.fromCharCode(1593),
		'g' : String.fromCharCode(1594),
		'_' : String.fromCharCode(1600),
		'f' : String.fromCharCode(1601),
		'q' : String.fromCharCode(1602),
		'k' : String.fromCharCode(1603),
		'l' : String.fromCharCode(1604),
		'm' : String.fromCharCode(1605),
		'n' : String.fromCharCode(1606),
		'h' : String.fromCharCode(1607),
		'w' : String.fromCharCode(1608),
		'Y' : String.fromCharCode(1609),
		'y' : String.fromCharCode(1610),
		'F' : String.fromCharCode(1611),
		'N' : String.fromCharCode(1612),
		'K' : String.fromCharCode(1613),
		'a' : String.fromCharCode(1614),
		'u' : String.fromCharCode(1615),
		'i' : String.fromCharCode(1616),
		'~' : String.fromCharCode(1617),
		'o' : String.fromCharCode(1618),
		'^' : String.fromCharCode(1619),
		'#' : String.fromCharCode(1620),
		'`' : String.fromCharCode(1648),
		'{' : String.fromCharCode(1649),
		':' : String.fromCharCode(1756),
		'@' : String.fromCharCode(1759),
		'"' : String.fromCharCode(1760),
		'[' : String.fromCharCode(1762),
		';' : String.fromCharCode(1763),
		',' : String.fromCharCode(1765),
		'.' : String.fromCharCode(1766),
		'!' : String.fromCharCode(1768),
		'-' : String.fromCharCode(1770),
		'+' : String.fromCharCode(1771),
		'%' : String.fromCharCode(1772),
		']' : String.fromCharCode(1773)
	}
	
	var result = ""
	for (var x = 0; text.length > x; x++) {
			result += (char[text[x]] || text[x])
	}
	
	return result
}
