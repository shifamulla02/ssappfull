import {useRef,useState} from "react";
import axios from "axios";

function Success()
{
	const rName=useRef();
	const rCompany=useRef();
	const rPkg=useRef();

	const[name,setName]=useState("");
	const[company,setCompany]=useState("");
	const[pkg,setPkg]=useState("");
	const[msg,setMsg]=useState("");

	const hName=(event)=>{setName(event.target.value);}
	const hCompany=(event)=>{setCompany(event.target.value);}
	const hPkg=(event)=>{setPkg(event.target.value);}

	const save=(event)=>{
	event.preventDefault();
	let data={name,company,pkg};
	let url="https://ssapp-z25e.onrender.com/save";
	axios.post(url,data)
	.then(res=>{
		setMsg("congrats");
		setName("");
		setCompany("");
		setPkg("");
		rName.current.focus();
	})
	.catch(err=>{
		setMsg("issue: " +err);
	});
}

	return(
	<>
	<center>
		<h1>SUCCESS STORY</h1>
		<form onSubmit={save}>
			<input type="text"	placeholder="enter your name"	ref={rName}	onChange={hName}	value={name}/>
			<br/><br/>
			<input type="text"	placeholder="enter your company name"	ref={rCompany}	onChange={hCompany}	value={company} />
			<br/><br/>
			<input type="number"	placeholder="enter your package"	ref={rPkg}	onChange={hPkg}		value={pkg} />
			<br/><br/>
			<input type="submit" />
		</form>
		<h2>{msg}</h2>
	</center>
	</>
	);
}
export default Success;