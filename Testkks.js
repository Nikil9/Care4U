import React, { Component } from 'react';
import { render } from 'react-dom';
import './Aboutus.css';

class Test1 extends Component {
  render() {
    return (
   <div class="main-agileits  w3-container w3-BLUE w3-xxlarge"> 
          <h1> Tell us about yourself</h1>
      </div>
<div class="main-agileits "> 
	<h2 class="sub-head"><font color="grey" size="6">Basic Information</font></h2>
       
		<div class="sub-main">	
               <center>    

			<form name="ChangePasswordForm" method="post" action="reg1.jsp" OnSubmit="return fncSubmit();">
			<p class="alignleft">	
			<input placeholder="Name" name="name" class="name" type="text" required=""/>
					<br><br>
			<input placeholder="mobile_no" name="mobile_no" class="number" type="text"  required=""/>
		   <br><br>
				
		<p class="alignright">		
		<input  placeholder="Mail" name="name" class="mail" type="text" required=""><br><br>
				<input  placeholder="you are living in" name="address" class="address" type="text" required=""><br><br><br><br><br><br>
					<br><br><br><br><br><br>
                                       </p>
									   </div>
									   <br>
									   
		
			
		<br><br><br><br><br><br>
		<div class="main-agileits "> 
	<h2 class="sub-head"><font color="grey" size="6">You are looking for</font></h2>
       
		<div class="sub-main">	
               <center>    

			
			<p class="alignleft">	
			<input placeholder="Position you apply for" name="name" class="name" type="text" required=""/>
					<br><br>
			<input placeholder="Working hours" name="mobile_no" class="number" type="text"  required=""/>
		   <br><br>
				
		<p class="alignright">		
		<input  placeholder="Department" name="name" class="mail" type="text" required=""><br><br>
				<input  placeholder="Duration" name="address" class="address" type="text" required=""><br><br><br><br><br><br>
					<br><br><br><br><br><br>
                                       </p>
									   </div>
					<br><br><br><br><br><br>
					<div class="main-agileits "> 
	<h2 class="sub-head"><font color="grey" size="6">What Motivated you?</font></h2>
       
		<div class="sub-main">	
               <center>    

			
			<input type="text" id="txtbox">
			<!--<input placeholder="Position you apply for" name="name" class="name" type="text" required=""/>-->	
					</div>
					</div>
					
					
                                       </p>	<center>	
                                        <div class="w3-container ">
      <input type="Submit"name="submit" value="submit" >
                                        </div>
</center>										
										
                               
			</form>
			<center>   
		</div>
		<div class="clear"></div>
</div>
    )
   
  }
}
export default Test1;