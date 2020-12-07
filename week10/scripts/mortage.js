function calculatePayment() 
{
	var apr 			= Number(document.getElementById("apr").value);
	var term 			= Number(document.getElementById("term").value);
	var amount 			= Number(document.getElementById("amount").value);

	if(document.getElementById("apr").value == "" || apr < 0 || apr > 25)
	{
		document.getElementById("apr").classList.add("error");
		document.getElementById("apr").focus();
		if(document.getElementById("apr").value == "")
			document.getElementById("reqApr").style.visibility="visible";
	}	
	else if(document.getElementById("term").value == "" || term < 0 || term > 40)
	{
		document.getElementById("term").classList.add("error");
		document.getElementById("term").focus();
		if(document.getElementById("term").value == "")
			document.getElementById("reqTerm").style.visibility="visible";
	}
	else if(document.getElementById("amount").value == "" || amount < 0)
	{
		document.getElementById("amount").classList.add("error");
		document.getElementById("amount").focus();
		if(document.getElementById("amount").value == "")
			document.getElementById("reqAmount").style.visibility="visible";
	}
	else
	{
		document.getElementById("apr").classList.remove("error");
		document.getElementById("term").classList.remove("error");
		document.getElementById("amount").classList.remove("error");				
	}
}

function aprCheck(req, error)
{
	var apr1 = Number(document.getElementById("apr").value);
	var apr2 = document.getElementById("apr").value;

	if(apr2 == "")
	{
		document.getElementById("apr").classList.add("error");
		document.getElementById(req).style.visibility="visible";
		document.getElementById(error).style.visibility="hidden";
	}
	else
	{
		document.getElementById(req).style.visibility="hidden";
	}
	
	if(apr1 >= 0 && apr1 <= 25)
	{
		document.getElementById(error).style.visibility="hidden";
	}
	else
	{
		document.getElementById(error).style.visibility="visible";
		document.getElementById("apr").classList.add("error");
	}
	
	if(apr1 >= 0 && apr1 <= 25 && apr2 != "")
		document.getElementById("apr").classList.remove("error");
}

function termCheck(req, error)
{
	var term1 = Number(document.getElementById("term").value);
	var term2 = document.getElementById("term").value;

	if(term2 == "")
	{
		document.getElementById("term").classList.add("error");
		document.getElementById(req).style.visibility="visible";
		document.getElementById(error).style.visibility="hidden";
	}
	else
	{
		document.getElementById(req).style.visibility="hidden";
	}
	
	if(term1 >= 0 && term1 <= 40)
	{
		document.getElementById(error).style.visibility="hidden";
	}
	else if(term2 != "")
	{
		document.getElementById(error).style.visibility="visible";
		document.getElementById("term").classList.add("error");
	}
	
	if(term1 > 0 && term1 <= 40 && term2 != "")
		document.getElementById("term").classList.remove("error");
}

function amountCheck(req, error)
{
	var amount1 = Number(document.getElementById("amount").value);
	var amount2 = document.getElementById("amount").value;

	if(amount2 == "")
	{
		document.getElementById(req).style.visibility="visible";
		document.getElementById(error).style.visibility="hidden";
	}
	else
	{
		document.getElementById(req).style.visibility="hidden";
	}
	
	if(amount1 > 0)
	{
		document.getElementById(error).style.visibility="hidden";
	}
	else if(amount2 != "")
	{
		document.getElementById(error).style.visibility="visible";
		document.getElementById("amount").classList.add("error");
	}
	
	if(amount1 > 0 && amount2 != "")
		document.getElementById("amount").classList.remove("error");
}

function clearError()
{
	document.getElementById("apr").focus();
	
	document.getElementById("aprError").style.visibility="hidden";
	document.getElementById("termError").style.visibility="hidden";
	document.getElementById("amountError").style.visibility="hidden";

	document.getElementById("reqApr").style.visibility="hidden";
	document.getElementById("reqTerm").style.visibility="hidden";
	document.getElementById("reqAmount").style.visibility="hidden";

	document.getElementById("apr").classList.remove("error");
	document.getElementById("term").classList.remove("error");
	document.getElementById("amount").classList.remove("error");
}
