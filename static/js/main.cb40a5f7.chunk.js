(this["webpackJsonptext-analyzer"]=this["webpackJsonptext-analyzer"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);c(9);var n=c(8),o=c.n(n),s=c(4),r=c(5),l=c(2),a=c(1),i=(c(14),c(15),c(0));var d=function(e){return Object(i.jsx)("input",{type:"checkbox",className:"toggle",onClick:function(){"light"===e.mode?e.setMode("dark"):e.setMode("light")}})};function j(e){return Object(i.jsxs)("div",{className:"navbar",style:"light"===e.mode?{backgroundColor:"rgb(249, 244, 244)",color:"black"}:{backgroundColor:"#280202",color:"white"},children:[Object(i.jsx)("span",{children:"Text-Analyzer"}),Object(i.jsxs)("div",{className:"links",children:[Object(i.jsx)(r.b,{style:{color:"light"===e.mode?"black":"white"},to:"/",children:"Home"}),Object(i.jsx)(r.b,{style:{color:"light"===e.mode?"black":"white"},to:"/services",children:"Services"}),Object(i.jsx)(r.b,{style:{color:"light"===e.mode?"black":"white"},to:"/team",children:"Our Team"}),Object(i.jsx)(r.b,{style:{color:"light"===e.mode?"black":"white"},to:"/contact",children:"Contact Us"})]}),Object(i.jsx)(d,{mode:e.mode,setMode:e.setMode}),Object(i.jsx)("span",{className:"mode",children:"Enable Dark mode"})]})}c(17);function h(e){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("label",{htmlFor:"test",style:{color:"light"===e.mode?"black":"white"},children:"Paste or write the content inside given block"}),Object(i.jsx)("textarea",{id:"test",type:"text",cols:"73",rows:"11",onChange:function(t){return e.setText(t.target.value)},value:e.text}),Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)("button",{onClick:function(){return document.querySelector(".reveal").style.display="block"},children:"Submit text"}),Object(i.jsx)("button",{onClick:function(){e.setText(""),document.querySelector(".reveal").style.display="none"},children:"Clear text"}),Object(i.jsx)("button",{onClick:function(){return e.setText(e.text.toUpperCase())},children:"Convert to Uppercase"}),Object(i.jsx)("button",{onClick:function(){return e.setText(e.text.toLowerCase())},children:"Convert to Lowercase"}),Object(i.jsx)("button",{onClick:function(){var e=document.querySelector("textarea");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy text"})]})]})}c(18);function b(e){return Object(i.jsxs)("div",{className:"container reveal",style:{color:"light"===e.mode?"black":"white"},children:[Object(i.jsx)("h2",{children:"Your Text Summary"}),Object(i.jsxs)("div",{className:"block",style:{border:"light"===e.mode?"0.2vw solid black":"0.2vw solid white"},children:[Object(i.jsxs)("span",{children:["No. of chars (with spaces)  :   ",e.text.replace("\n","").length]}),Object(i.jsxs)("span",{children:["No. of chars (without spaces)  :   ",e.text.split(" ").join("").replace("\n","").length]}),Object(i.jsxs)("span",{children:["No. of words  :   ",0===e.text.length?0:e.text.replace(/\s+/g," ").trim().replace("\n","").split(" ").length]}),Object(i.jsxs)("span",{children:["No. of sentences  :   ",0===e.text.length?0:e.text.split("\n").length]})]})]})}function x(e){return document.querySelector("body").style.background="light"===e.mode?"lightyellow":"url(https://www.wallpapertip.com/wmimgs/61-610111_galaxy-wallpaper-cartoon-free.jpg)",document.querySelector("body").style.backgroundSize="cover",Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h,{text:e.text,setText:e.setText,mode:e.mode}),Object(i.jsx)(b,{text:e.text,mode:e.mode})]})}function u(){return Object(i.jsx)("div",{style:{padding:"3vw",fontSize:"1.3vw",wordSpacing:"0.5vw"},children:"I myself am the project head, LOL!! My assistant who proposed this idea was \"Harry Bhai\". He has an awesome YouTube channel with name 'codewithharry' aka 'cwh'"})}function m(){return Object(i.jsx)("div",{style:{padding:"3vw",fontSize:"1.3vw",lineHeight:"4vw"},children:'Text Analyzer is an online utility to assess the text. Count of words, sentences, characters and spaces in a submitted text can be found out with super ease. For your convienience, this app comes in 2 display modes -- "light mode" for bright workspace & "dark mode" for darker workspace.'})}function p(){return Object(i.jsx)("div",{style:{padding:"3vw",fontSize:"1.3vw",wordSpacing:"0.5vw"},children:"Reach me on my GitHub page"})}function O(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)("light"),d=Object(s.a)(o,2),h=d[0],b=d[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(j,{text:c,setText:n,mode:h,setMode:b}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/",element:Object(i.jsx)(x,{text:c,setText:n,mode:h})}),Object(i.jsx)(l.a,{path:"/services",element:Object(i.jsx)(m,{})}),Object(i.jsx)(l.a,{path:"/team",element:Object(i.jsx)(u,{})}),Object(i.jsx)(l.a,{path:"/contact",element:Object(i.jsx)(p,{})})]})]})})}o.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.cb40a5f7.chunk.js.map