(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var n=i(2),r=i(10),a=i.n(r),c=i(7),s=(i(15),i(0)),l={headerContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",maxHeight:"2ev",maxWidth:"96%"},navActive:{backgroundColor:"white",fontWeight:"34px"},aTag:{textDecoration:"none",fontWeight:"bolder",color:"blue",margin:"4px"},h1:{color:"black",fontSize:"1.8em"}};var o=function(e){var t=e.currentPage,i=e.handlePageChange;return Object(s.jsxs)("div",{className:"header",style:l.headerContainer,children:[Object(s.jsx)("h1",{style:l.h1,children:"Portfolio gMan"}),Object(s.jsxs)("ul",{className:"topnav",id:"myTopnav",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#projects",onClick:function(e){e.stopPropagation(),i("p1")},className:"p1"===t?"navActive":"nav-link",style:l.aTag,children:"Projects"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#AboutMe",className:"AboutMe"===t?"navActive":"nav-link",onClick:function(e){e.stopPropagation(),i("AboutMe")},style:l.aTag,children:"About Me"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#Resume",className:"Resume"===t?"navActive":"nav-link",onClick:function(e){e.stopPropagation(),i("Resume")},style:l.aTag,children:"Resume"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#contacts",onClick:function(e){e.stopPropagation(),i("Contact")},className:"Contact"===t?"navActive":"nav-link",style:l.aTag,children:"Contact"})})]})]})},d=i.p+"static/media/gMan.01e169bd.jpg",j={sectionStyles:{display:"grid",maxWidth:"80%",placeItems:"center"},sectionContainer:{display:"flex",borderRadius:" 10px",justifySelf:"left",width:"100%"},section:{border:"solid 5px green",borderRadius:" 5px",margin:"5px",padding:"10px",minWidth:"40%"},section1:{border:"solid 5px green",borderRadius:" 5px",margin:"5px",padding:"10px",minWidth:"60%",fontSize:"2.5vw"},img:{objectPosition:"5px 5px",height:"90%",width:"100%",objectFit:"cover"},subtitle:{textDecorationLine:"underline",fontWeight:"bold"}};var b=function(){return Object(s.jsxs)("div",{style:j.sectionStyles,className:"resume-container",children:[Object(s.jsx)("h2",{children:" About George McMurray "}),Object(s.jsxs)("div",{style:j.sectionContainer,children:[Object(s.jsx)("div",{className:"gman",style:j.section,children:Object(s.jsx)("img",{style:j.img,src:d,alt:""})}),Object(s.jsx)("div",{style:j.section1,children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Extensive career in Semiconductor industry covering design engineer to Directing Operations."}),Object(s.jsx)("li",{children:"Started Coding in Engineering School using Matlab, S (predecessor to R) and C languages with applications in Statistical Analysis."}),Object(s.jsx)("li",{children:"Hobbyist in Constraint Programming using Minizinc and Python. Dabbled in Bioinformatics basic apps"})]})})]})]})},h=i(3);var m={formContainer:{display:"flex",flexDirection:"column",alignItems:"center",maxHeight:"2ev",maxWidth:"96%"}},x=function(){var e=Object(n.useState)({}),t=Object(c.a)(e,2),i=t[0],r=t[1];function a(e){e.preventDefault(),e.stopPropagation();var t,n,a,c=e.target,s=c.name,l=c.value;console.log(s,l),n=1,a=250,null!=(t=l)&&t.length>n&&t.length<a?("name"===s&&r(Object(h.a)(Object(h.a)({},i),{},{name:l})),"email"===s&&(!function(e){return!RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(e)}(l)?alert("your email format is incorrect"):r(Object(h.a)(Object(h.a)({},i),{},{email:l}))),"address"===s&&r(Object(h.a)(Object(h.a)({},i),{},{address:l})),"message"===s&&s&&r(Object(h.a)(Object(h.a)({},i),{},{message:l}))):alert("you need to enter a value in each field")}return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{style:m.formContainer,onSubmit:function(e){return e.preventDefault(),console.log("form submitted"),alert("your message has been submitted")},children:[Object(s.jsx)("label",{children:"Your Name"}),Object(s.jsx)("input",{type:"text",value:i.name,onChange:a,required:!0}),Object(s.jsx)("label",{children:"Your Email"}),Object(s.jsx)("input",{type:"email",value:i.email,name:"user_email",onChange:a,required:!0}),Object(s.jsx)("label",{children:"Your Adress"}),Object(s.jsx)("textarea",{type:"address",value:i.address,name:"user_address",onChange:a,required:!0}),Object(s.jsx)("label",{children:"Message"}),Object(s.jsx)("textarea",{name:"message",value:i.message,onChange:a,required:!0}),Object(s.jsx)("input",{type:"submit",value:"Save"})]})})},g={sectionStyles:{display:"grid",maxWidth:" 800px"},sectionContainer:{border:"solid 5px black",borderRadius:" 10px",justifySelf:"center",padding:"3%",margin:"20px"}};var u=function(){return Object(s.jsx)("div",{style:g.sectionStyles,className:"aboutme-container",children:Object(s.jsxs)("div",{style:g.sectionContainer,children:[Object(s.jsx)("h2",{children:" Contact Me : "}),Object(s.jsx)("h3",{children:"  George McMurray"}),Object(s.jsx)("h3",{children:"  Phone Number:  (650) 880-7464"}),Object(s.jsxs)("h3",{children:[" Email:   ",Object(s.jsx)("span",{children:Object(s.jsx)("a",{href:"mailto:gmcmurray1493@gmail.com",children:"gmcmurray1493@gmail.com "})})]}),Object(s.jsx)("a",{href:"https://www.linkedin.com/in/george-mcmurray/",children:Object(s.jsx)("h3",{children:" LinkedIn "})}),Object(s.jsx)("h3",{children:" Leave Message: "}),Object(s.jsx)(x,{})]})})},p=i(5),O=i(4),f={sectionStyles:{display:"flex",border:"solid 2px black",borderRadius:" 10px",height:"100%"},img:{objectPosition:"5px 5px",height:"90%",width:"100%",objectFit:"cover"},atag:{font:"1em",fontWeight:"bolder"}};var y=function(e){var t=e.name,i=e.projectImage,n=e.liveLink,r=e.repoLink;return Object(s.jsxs)("div",{style:f.sectionStyles,href:n,target:"_blank",className:"work-container",onClick:n,children:[Object(s.jsxs)("a",{href:n,target:"_blank",className:"project-name",rel:"noreferrer",children:[t,Object(s.jsx)("img",{style:f.img,src:i,className:"project-img",alt:t})]}),Object(s.jsx)("div",{className:"link-container",children:Object(s.jsx)("div",{className:"links",children:Object(s.jsx)("a",{style:f.atag,href:r,target:"_blank",rel:"noreferrer",children:Object(s.jsx)(O.a,{icon:p.a,className:"github-icon"})})})})]})},v=i.p+"static/media/mealplan.b748ef02.jpg",S=i.p+"static/media/mtbike.02eed027.jpg",k=i.p+"static/media/clouds.d13041f0.jpg",C=i.p+"static/media/techblog.41009b7b.jpg",w=i.p+"static/media/shakespeare.948f436a.jpg",R=i.p+"static/media/dailyplanner.386eaa78.jpg",M={sectionStyles:{display:"grid",gridTemplateColumns:"repeat(2, 48%)",gridGap:"5px",placeItems:"top",gridAutoRows:"150px"},boxone:{gridColumnStart:"1",gridRowStart:"1",gridRowEnd:"span 2",justifySelf:"center",alignSelf:"stretch",margin:"5px",maxHeight:"295px",maxWidth:"300px"},boxtwo:{gridColumnStart:"1",gridRowStart:"3",gridRowEnd:"span 2",justifySelf:"center",alignSelf:"stretch",margin:"5px",maxHeight:"295px",maxWidth:"300px"},boxthree:{gridColumnStart:"1",gridRowStart:"5",gridRowEnd:"span 2",justifySelf:"center",alignSelf:"stretch",margin:"5px",maxHeight:"295px",maxWidth:"300px"},boxfour:{gridColumnStart:"2",gridRowStart:"1",gridRowEnd:"span 2",justifySelf:"center",alignSelf:"stretch",margin:"5px",maxHeight:"445px"},boxfive:{gridColumnStart:"2",gridRowStart:"3",gridRowEnd:"span 2",justifySelf:"center",alignSelf:"stretch",margin:"5px",maxHeight:"445px"},boxsix:{gridColumnStart:"2",gridRowStart:"5",gridRowEnd:"span 2",justifySelf:"center",alignSelf:"stretch",margin:"5px",maxHeight:"445px"}};var N=function(e){return Object(s.jsxs)("div",{style:M.sectionStyles,className:"portfolio-container",children:[Object(s.jsx)("div",{style:M.boxone,children:Object(s.jsx)(y,{name:"Bike Trails",repoLink:"https://github.com/DN-Vanguard/BikeTrails",liveLink:"https://dn-vanguard.github.io/BikeTrails/",projectImage:S,className:"work-item"})}),Object(s.jsx)("div",{style:M.boxfour,children:Object(s.jsx)(y,{name:"Meal Plan",repoLink:"https://github.com/xuannga/Meal-Planner",liveLink:"https://meal-planner-5.herokuapp.com/",projectImage:v,className:"work-item"})}),Object(s.jsx)("div",{style:M.boxtwo,children:Object(s.jsx)(y,{name:"Weather Report",repoLink:"https://github.com/gmcmurray/WeatherReport",liveLink:"https://gmcmurray.github.io/WeatherReport/",projectImage:k,className:"work-item"})}),Object(s.jsx)("div",{style:M.boxfive,children:Object(s.jsx)(y,{name:"Tech Blog",repoLink:"https://github.com/gmcmurray/TechBlog",liveLink:"https://techblog-gmcmurray.herokuapp.com/",projectImage:C,className:"work-item"})}),Object(s.jsx)("div",{style:M.boxthree,children:Object(s.jsx)(y,{name:"Code Quiz",repoLink:"https://github.com/gmcmurray/Code-Quiz",liveLink:" https://gmcmurray.github.io/Code-Quiz/",projectImage:w,className:"work-item"})}),Object(s.jsx)("div",{style:M.boxsix,children:Object(s.jsx)(y,{name:"Day Scheduler",repoLink:"https://github.com/gmcmurray/DayScheduler",liveLink:" https://gmcmurray.github.io/DayScheduler/",projectImage:R,className:"work-item"})})]})},L=i.p+"static/media/resume.c4d9de31.pdf",A={sectionStyles:{display:"grid",maxWidth:"80%",placeItems:"center"},sectionContainer:{border:"solid 5px black",borderRadius:" 10px",justifySelf:"center"},section:{border:"solid 5px green",borderRadius:" 5px",margin:"5px",padding:"10px"},icon:{font:"20px"},subtitle:{textDecorationLine:"underline",fontWeight:"bold"},download:{border:"solid 2px black",borderRadius:" 10px",background:"lime",padding:"2px"}};var P=function(){return Object(s.jsxs)("div",{style:A.sectionStyles,className:"resume-container",children:[Object(s.jsx)("h2",{children:" About George McMurray "}),Object(s.jsx)("div",{style:A.download,children:Object(s.jsx)("a",{href:L,download:"myResume",children:"Down Load Resume"})}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{style:A.sectionContainer,children:[Object(s.jsxs)("div",{style:A.section,children:[Object(s.jsx)("h3",{children:" Coding Experience"}),Object(s.jsxs)("p",{children:["  ",Object(s.jsx)("span",{style:A.subtitle,children:"Repo Portfolio "}),": Full Stack MERN with GraphQL, MySQL App deployment.",Object(s.jsx)("span",{children:Object(s.jsx)("a",{href:"https://github.com/gmcmurray/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(O.a,{icon:p.a,className:"github-icon",size:25})})})]}),Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("span",{style:A.subtitle,children:"Coding Languages "}),":  HTML, CSS, JavaScript/JQuery, NodeJS, Python, Minizinc "]}),Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("span",{style:A.subtitle,children:"Certifications "}),": 2021 Full Stack Bootcamp Certification - University of Washington "]})]}),Object(s.jsxs)("div",{style:A.section,children:[Object(s.jsx)("h3",{children:" Semiconductor Industry Experience "}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Program Management - New Product Development and Life Cycle Management"}),Object(s.jsx)("li",{children:" Customer Quality Assurance and Quality Systems "}),Object(s.jsx)("li",{children:" Semiconductor Failure Analysis "}),Object(s.jsx)("li",{children:" Wafer Fab and BackEnd Manufacturing Logistics            "}),Object(s.jsx)("li",{children:" Analog Integrated Circuit Design "}),Object(s.jsx)("li",{children:" Product and Test Engineering "})]})]}),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{style:A.section,children:[Object(s.jsx)("h3",{children:" Formal Education"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{style:A.subtitle,children:"Graduate "}),":",Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:" MS,PhD (ABD) Operations Research - UC Berkeley "}),Object(s.jsx)("li",{children:" MS System Engineering - University of Arizona  "}),Object(s.jsx)("li",{children:" MS Electrical Engineering - Southern Methodist University  "})]})]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("span",{style:A.subtitle,children:"Undergraduate "}),":",Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Duke University ~ Double Major : BS Electrical Engineer"}),Object(s.jsx)("li",{children:"Duke University ~ Double Major : BS Mathermatics"})]})]})})]})]})})]})]})},D=(i(22),{footerContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",maxHeight:"2ev",maxWidth:"96%",backGroundColor:"gold"},icons:{fontSize:"30px",width:"80px"}});var E=function(){return Object(s.jsxs)("div",{className:"footer",style:D.footerContainer,children:[Object(s.jsxs)("a",{href:"https://stackoverflow.com/c/mycellium-rising/",target:"_blank",rel:"noreferrer",children:[Object(s.jsx)(O.a,{icon:p.c})," StackOverflow"]}),Object(s.jsxs)("a",{href:"https://github.com/gmcmurray/",target:"_blank",rel:"noreferrer",children:[Object(s.jsx)(O.a,{icon:p.a}),"  Github"]}),Object(s.jsxs)("a",{href:"https://www.linkedin.com/in/george-mcmurray/",target:"_blank",rel:"noreferrer",children:[Object(s.jsx)(O.a,{icon:p.b})," Linkedin"]})]})};var W=function(){var e=Object(n.useState)("p1"),t=Object(c.a)(e,2),i=t[0],r=t[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(o,{currentPage:i,handlePageChange:function(e){r(e),console.log(e)}}),"AboutMe"===i?Object(s.jsx)(b,{}):"p1"===i?Object(s.jsx)(N,{}):"Resume"===i?Object(s.jsx)(P,{}):Object(s.jsx)(u,{}),Object(s.jsx)(E,{})]})},I=function(){return Object(s.jsx)(W,{})};a.a.render(Object(s.jsx)(I,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.0094779a.chunk.js.map