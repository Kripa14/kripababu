import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2 glass"><div className="inner2"></div></div>
            <h2 className="abouthead">Kripa <mark className="mark2">Babu</mark></h2>
            <p>Front End Developer</p>
            <br></br>
            <p className="p10">Hello there! I'm Kripa, a passionate UI/UX developer with a rich experience of 4 years in the field. My journey in the realm of user interface and user experience design has been an exhilarating exploration of blending creativity with functionality.
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            
            <h3>Education</h3>
            <div className="vr_line glass">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <div>
            <h4>MS Computer Engineering</h4>
            <p className="p1">University Of Central Florida</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>Jan 2018 - Dec 2019</p>
            <h4>BE Eng</h4>
            <p className="p1">Anna University, Chennai, India</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>Aug 2011 - May 2015</p></div>
            </div>
            <h3 class="sk_head">Skills</h3>
            <div class="sk glass">HTML</div>
            <div class="sk s2 glass">CSS</div>
            <div class="sk s3 glass">JavaScript</div>
            <div class="sk s4 glass">React</div>
            <div class="sk s5 glass">Node</div>
            <div class="sk s6 glass">Python</div>
            </div>
            )
        }
    }
    
export default About
    