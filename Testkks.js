import React, { Component } from 'react';
import { render } from 'react-dom';
import './Aboutus.css';

class Test1 extends Component {
  render() {
    return (
      <div>
   <div class="main-agileits  w3-container w3-BLUE w3-xxlarge"> 
          <h1> Join us</h1>
      </div>
      <p class="alignleft">	
<div class="main-agileits"> 
	<h2 class="sub-head"><font color="grey" size="6">Basic Information</font></h2>
       
		<div class="sub-main">	
      


			<p class="alignleft">	
			<input placeholder="Name" name="name" class="name" type="text" required=""/>
				
			<input placeholder="mobile_no" name="mobile_no" class="number" type="text"  required=""/></p>
		</div>
			<div class="sub-main">	
		<p class="alignleft">		
		<input  placeholder="Mail" name="name" class="mail" type="text" required=""/>
				<input  placeholder="you are living in" name="address" class="address" type="text" required=""/></p>
				
                                       
	</div>
</div>   
<div class="main-agileits "> 
	<h2 class="sub-head"><font color="grey" size="6">You are looking for</font></h2>
       
		<div class="sub-main">	
              

			
			<p class="alignleft">	
			<input placeholder="Position you apply for" name="name" class="name" type="text" required=""/>
		
			<input placeholder="Working hours" name="mobile_no" class="number" type="text"  required=""/></p>
		 	</div>
       <div class="sub-main">
				
		<p class="alignleft">		
		<input  placeholder="Department" name="name" class="mail" type="text" required=""/>
				<input  placeholder="Duration" name="address" class="address" type="text" required=""/></p>
                                       
	</div>
      </div>
					
<div class="main-agileits"> 
	<h2 class="sub-head"><font color="grey" size="6">What Motivated you?</font></h2>
       <div class="sub-main">	
               	<input type="text" id="txtbox"/>
	 </div>
</div>
					
					
                                       
                                        <div class="w3-container ">
      <input type="Submit"name="submit" value="submit" />
                                        </div>
										
										
                               
			
		  
	
		<div class="clear"></div>
    </p>
    </div>

    )
   
  }
}
export default Test1;