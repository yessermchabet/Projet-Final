import { Button } from "react-bootstrap";
import React, { useState } from "react"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
const Home =()=>{
    
    return(
          <div >
              <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', backgroundColor:'white'}}>
              <div style={{display:'flex', justifyContent:'space-around', alignItems:'center',flexDirection:'column' }}>
                <h1 style={{color:'black', fontWeight:'800' , fontSize:'50px'}}>Haya 7obi nechro karhba</h1>
                  <Button style={{fontSize:'26px',width:'215px',fontWeight:'bold',color:'black'}} as={Link} to='/Cars' variant="primary" >
                    WARINI
                  </Button>
              </div>
              <img src="people.png" width='273px'/>
            </div>

            {/* <div style={{backgroundColor:'black', display:'flex',justifyContent:'space-around',paddingTop:'20px',paddingBottom:'20px'}}>
                <div style={{border:'2px solid white', width:'333px', height:'333px', borderRadius:'50px'}}></div>
                  <div style={{border:'2px solid white',marginLeft:'-471px',width:'273px',height:'300px',marginTop:'18px',borderRadius:'45px'}}>
                    <h4 style={{marginLeft:'26px',marginTop:'15px',textDecoration:'underline',color:'#F4C432',fontWeight:'revert'}}>Description For As</h4>
                    <h6 style={{marginTop:'-4px',fontSize:'15px',marginLeft:'16px',fontWeight:'bolder'}}>/The luxury car showroom will be an elegant and immersive space showcasing high-end vehicles with cutting-edge technology and premium design. Featuring interactive displays, virtual test drives, and personalized consultations, it will offer an exceptional customer experience. This showroom will not only highlight automotive excellence but also redefine luxury and innovation in the industry.</h6>
                  </div>

                <div style={{border:'2px solid white', width:'333px', height:'333px', borderRadius:'50px', marginTop:'30px'}}></div>
                  <div style={{border:'2px solid white',marginLeft:'-471px',width:'273px',height:'300px',marginTop:'50px',borderRadius:'45px'}}>
                    <h4 style={{marginLeft:'26px',marginTop:'15px',textDecoration:'underline',color:'#F4C432',fontWeight:'revert'}}>Description For As</h4>
                    <h6 style={{marginTop:'-4px',fontSize:'15px',marginLeft:'16px',fontWeight:'bolder'}}>/The luxury car showroom will be an elegant and immersive space showcasing high-end vehicles with cutting-edge technology and premium design. Featuring interactive displays, virtual test drives, and personalized consultations, it will offer an exceptional customer experience. This showroom will not only highlight automotive excellence but also redefine luxury and innovation in the industry.</h6>
                  </div>
                  
                <div style={{border:'2px solid white', width:'333px', height:'333px', borderRadius:'50px', marginTop:'50px'}}></div>
            </div> */}

<div style={{backgroundColor:'black', display:'flex',justifyContent:'space-around',paddingTop:'20px',paddingBottom:'20px', alignItems:'center'}}>
      
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1 style={{    fontSize: '59px',color: 'white'}}>You Can Trust Us</h1>
        <img src="bb.png" alt="Not Found" style={{    width: "570px"}}/>
      </div>

      <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap', width:'40%',     rowGap: "35px"}}>
        <div style={{backgroundColor :'#F4C432' ,borderRadius:'5px',width:'250px', height:'250px',display:'flex',alignItems:'center'}}>
              <img style={{    width: "250px"}} src="hon.png"/>
        </div>
        <div style={{backgroundColor :'#F4C432' ,borderRadius:'5px',width:'250px', height:'250px',display:'flex',alignItems:'center'}}>
        <img style={{    width: "250px"}} src="prov.png"/>
        </div>
        <div style={{backgroundColor :'#F4C432' ,borderRadius:'5px',width:'250px', height:'250px',display:'flex',alignItems:'center'}}>
        <img style={{    width: "260px"}} src="reli.png"/>
        </div>
        <div style={{backgroundColor :'#F4C432' ,borderRadius:'5px',width:'250px', height:'250px',display:'flex',alignItems:'center'}}>
        <img style={{    width: "250px"}} src="comm.png"/>
        </div>
      </div>
               
</div>

            <div style={{display:'flex',justifyContent:'space-around',backgroundColor:'white',paddingTop:'20px',paddingBottom:'20px'}}>
            <Carousel data-bs-theme="dark"  style={{height :'600px',width :'900px'}}>
            <Carousel.Item>
              <img style={{height :'600px',width :'900px'}}
                className="d-block w-100"
                src="https://www.carscoops.com/wp-content/uploads/2018/05/ferrari-laferrari-yellow-vossen-wheels-21.jpg"
                alt="First slide"
              />
         </Carousel.Item>
            <Carousel.Item>
              <img style={{height :'600px',width :'900px'}}
                className="d-block w-100"
                src="https://www.carscoops.com/wp-content/uploads/2018/05/ferrari-laferrari-yellow-vossen-wheels-20.jpg"
                alt="Second slide"
              />
          </Carousel.Item>
            <Carousel.Item>
              <img style={{height :'600px',width :'900px'}}
                className="d-block w-100"
                src="https://www.carscoops.com/wp-content/uploads/2018/05/ferrari-laferrari-yellow-vossen-wheels-19.jpg"
                alt="Third slide"
              />
          </Carousel.Item>
        </Carousel>
            </div>
           {/* <div style={{backgroundColor:'#F4C432', display:'flex',justifyContent:'space-around',paddingTop:'20px',paddingBottom:'20px'}}>
                <div style={{border:'2px solid black', width:'333px', height:'333px', borderRadius:'50px'}}></div>
                  <img  style={{marginLeft:'-483px',height:'300px',marginTop:'17px',width:'300px'}} src="BMW.png"/>
                <div style={{border:'2px solid black', width:'333px', height:'333px', borderRadius:'50px', marginTop:'30px'}}></div>
                  <img  style={{marginLeft:'-486px',height:'319px',marginTop:'26px',width:'319px'}} src="Mercedes.png"/>
                <div style={{border:'2px solid black', width:'333px', height:'333px', borderRadius:'50px', marginTop:'50px'}}></div>
                  <img  style={{marginLeft:'-486px',height:'312px',marginTop:'60px',width:'312px'}} src="Audi.png"/>
            </div> */}    

            <div style={{backgroundColor:'#F4C432', display:'flex',justifyContent:'space-around',paddingTop:'20px',paddingBottom:'20px'}}>
                <div >
                    <h1 style={{    color: 'black', fontWeight: 'bold',fontSize: '76px',border: '7px solid black',padding: '15px' }}>Our parteners</h1>
                </div>
                 
                <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center', width:'40%'}}>
                    <img  style={{width:'200px'}} src="audii.png" alt="Not Found"/>
                    <img  style={{width:'121px'}} src="bmww.png" alt="Not Found"/>
                    <img  style={{width:'142px',height:'111px'}} src="mazda.png" alt="Not Found"/>
                    <img  style={{width:'135px'}} src="mercedess.png" alt="Not Found"/>
                    <img  style={{width:'125px'}} src="mg.png" alt="Not Found"/>
                    <img  style={{width:'136px'}} src="renault.png" alt="Not Found"/>
                    <img  style={{width:'142px'}} src="vw.png" alt="Not Found"/>

                </div>
                 
            </div>
            
           
            <div style={{display:'flex', justifyContent:'space-around', backgroundColor:'white'}}>
                    <img src="/feedback.png" alt="Not Found" style={{    width: "600px",height:'500px'}}/>
            </div>
       </div>
       
          
    )
   
}

export default Home 