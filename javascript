# 12-10
<!DOCTYPE html>
	<html>
		<head>
			<title>Divisible 100 Calculator [Rocky Villafranca]</title>

		</head>

		<body>
			<center>
				
    			<input type="text" id="value1" name="">
   				<input type="button" value="OK" onclick="Modulo()">
    			<h3 id="result"></h3>

			</center>
			</body>
			<script type="text/javascript">
				function Modulo()
			        {
			         	var x = document.getElementById("value1").value;
			         	var sample;
			        if (x % 100 == 0)
			        {
			            document.getElementById("result").innerHTML = "AMOUNT IS ACCEPTED";			       	
			        }
			       	else
			       	{
			           	document.getElementById("result").innerHTML = "AMOUNT IS NOT ACCEPTED";
			       	} 
			   }
			</script>
	</html>
