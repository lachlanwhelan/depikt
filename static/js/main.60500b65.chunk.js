(this.webpackJsonpdepikplus=this.webpackJsonpdepikplus||[]).push([[0],{25:function(e,a,t){},26:function(e,a,t){},30:function(e,a,t){e.exports=t.p+"static/media/loader.9615522e.gif"},33:function(e,a,t){e.exports=t(51)},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(27),s=t.n(l),r=t(32),c=t(12),o=t(14),m=t.n(o),u=t(4),d=t(5),h=new(function(){function e(){Object(u.a)(this,e),this.authenticated=!1,this.user={id:"",name:"",email:""}}return Object(d.a)(e,[{key:"register",value:function(e,a,t){var n,i;return m.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,m.a.awrap(fetch("https://stark-ridge-74307.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.toLowerCase(),email:a.toLowerCase(),password:t})}));case 2:return n=l.sent,l.next=5,m.a.awrap(n.json());case 5:200===(i=l.sent).status?(this.user.id=i.user.id,this.user.name=i.user.name,this.user.email=i.user.email,this.authenticated=!0,Promise.resolve()):this.authenticated=!1;case 7:case"end":return l.stop()}}),null,this)}},{key:"login",value:function(e,a){var t,n;return m.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,m.a.awrap(fetch("https://stark-ridge-74307.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:a})}));case 2:return t=i.sent,i.next=5,m.a.awrap(t.json());case 5:200===(n=i.sent).status?(this.user.id=n.user.id,this.user.name=n.user.name,this.user.email=n.user.email,this.authenticated=!0,Promise.resolve(this.user)):this.authenticated=!1;case 7:case"end":return i.stop()}}),null,this)}},{key:"logout",value:function(e){this.authenticated=!1,this.user.id="",this.user.name="",this.user.email="",e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),g=function(e){var a=e.component,t=Object(r.a)(e,["component"]);return i.a.createElement("div",null,i.a.createElement(c.b,Object.assign({},t,{render:function(e){return h.isAuthenticated()?i.a.createElement(a,Object.assign({},e,{user:h.user})):i.a.createElement(c.a,{to:{pathname:"/",state:{from:e.location}}})}})))},p=t(31),f=t(8),v=t(7),E=t(9),b=t(3),k=t(17),C=t(16),y=function(e){var a=e.handleSearch,t=e.handleChange,n=e.handleKeyPress,l=Object(c.g)();return i.a.createElement("form",{className:"searchGroup",action:".",onSubmit:function(e){e.preventDefault()}},i.a.createElement("input",{className:"searchInput",type:"text",name:"search",id:"search-thing",placeholder:"search...",onChange:t,onKeyPress:n}),i.a.createElement("button",{className:"searchButton",onClick:function(){a(),l.push("/home")}},i.a.createElement(C.a,{icon:k.c,size:"lg"})))},N=(t(25),function(){var e=Object(c.g)();return i.a.createElement("button",{className:"link",onClick:function(){localStorage.setItem("authenticated",!1),h.logout((function(){e.push("/")}))}},"Logout")}),O=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(f.a)(this,Object(v.a)(a).call(this,e))).handleSearch=function(){t.props.handleSearch(t.state.searchInput)},t.handleChange=function(e){t.setState({searchInput:e.target.value})},t.handleKeyPress=function(e){"Enter"===e.key&&t.props.handleSearch(t.state.searchInput)},t.state={searchInput:""},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar"},i.a.createElement(b.b,{className:"logo",to:"/home",replace:!0},i.a.createElement(C.a,{icon:k.a,size:"lg",onClick:this.props.reload})),i.a.createElement(y,{handleSearch:this.handleSearch,handleChange:this.handleChange,handleKeyPress:this.handleKeyPress}),i.a.createElement(b.b,{className:"uploadLink",to:"/home/upload"},i.a.createElement(C.a,{icon:k.b,size:"lg"})),i.a.createElement(C.a,{className:"profileLink",icon:k.d,size:"lg",onClick:this.props.handleMenuClick}),i.a.createElement("div",{className:"user-menu",id:this.props.menu?"dropdown":""},i.a.createElement("p",null,"Hi ".concat(h.user.name)),i.a.createElement(b.b,{className:"link",to:"/home",onClick:this.props.reload},"Home"),i.a.createElement(b.b,{className:"link",to:"/home/profile"},"Profile"),i.a.createElement(b.b,{className:"link",to:"/home/favourites"},"Favourites"),i.a.createElement(N,null)))}}]),a}(n.Component),S=t(15),I=t(30),j=t.n(I),w=function(e){var a=e.handleSubmit,t=e.handleFileChange,n=e.handleChange,l=e.url,s=e.isValid,r=e.loading;return i.a.createElement("form",{className:"upload-form"},i.a.createElement("input",{name:"user",defaultValue:h.user,hidden:!0}),i.a.createElement("label",{className:"file"},i.a.createElement("input",{className:"fileUpload",type:"file",name:"image",accept:"image/*",onChange:t}),i.a.createElement("span",{className:"file-custom"})),i.a.createElement("div",null,i.a.createElement("div",{className:"preview-img"},i.a.createElement("img",{src:l,alt:"sample-images"}))),i.a.createElement("div",{className:s?"valid":"invalid"},"Something went wrong with the upload. Please try again."),i.a.createElement("input",{type:"text",name:"tag",placeholder:"#tag",onChange:n,required:!0}),i.a.createElement("input",{type:"text",name:"category",placeholder:"category",onChange:n,required:!0}),i.a.createElement("div",{className:"upload-btn"},i.a.createElement("input",{id:"btn",className:"btn",type:"submit",value:"Upload",required:!0,onClick:function(e){a(e)}}),i.a.createElement("div",{className:r?"show":"hide"},i.a.createElement("img",{src:j.a,alt:"loader"}))))},P=(t(46),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(f.a)(this,Object(v.a)(a).call(this,e))).uploadFile=function(e,a,n){var i=new XMLHttpRequest;i.open("PUT",a),i.onreadystatechange=function(){4===i.readyState&&(200===i.status?t.setState({url:n},(function(){t.props.addImage(t.state)})):alert("Could not upload file."))},i.send(e)},t.getSignedRequest=function(e){var a=new XMLHttpRequest;a.open("GET","https://stark-ridge-74307.herokuapp.com/sign-s3?file-name=".concat(e.name.replace(/\s/,"-"),"&file-type=").concat(e.type)),a.onreadystatechange=function(){if(4===a.readyState)if(200===a.status){var n=JSON.parse(a.responseText);t.uploadFile(e,n.signedRequest,n.url)}else alert("Could not get signed URL.")},a.send()},t.handleFileChange=function(e){var a=new FileReader,n=e.target.files[0];a.readAsDataURL(n),a.onloadend=function(){t.setState({file:n,url:a.result})}},t.handleChange=function(e){var a=e.target,n=a.name,i=a.value;t.setState(Object(S.a)({},n,i))},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.url,i=a.tag,l=a.category;n&&i&&l?(t.setState({isValid:!0}),t.getSignedRequest(t.state.file),!1===t.state.loading?t.setState({loading:!0}):t.setState({loading:!1})):t.setState({isValid:!1})},t.state={file:"",url:"",tag:"",category:"",isValid:!0,loading:!1},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"upload-page",onClick:this.props.handlePageClick},i.a.createElement("h1",null,"Upload An Image"),i.a.createElement(w,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,handleFileChange:this.handleFileChange,url:this.state.url,isValid:this.state.isValid,loading:this.state.loading}))}}]),a}(n.Component)),U=(t(47),function(e){var a=e.initialImages,t=e.filteredImages,n=e.handlePageClick,l=e.handleOnImageClick;return t?(console.log(t),i.a.createElement("div",{className:"image-page"},i.a.createElement("div",{className:"images"},t.map((function(e,a){return i.a.createElement("div",{className:"imageItem",key:a},i.a.createElement("img",{className:"image",src:e.url,alt:""}))}))))):i.a.createElement("div",{className:"image-page",onClick:n},i.a.createElement("div",{className:"images"},a.map((function(e,a){return i.a.createElement("div",{className:"imageItem",key:a},i.a.createElement("img",{className:"image",src:e.url,alt:"",onClick:function(a){return l(a,e.name)}}))}))))}),x=(t(48),function(e){var a=e.initialImages,t=e.deleteImage,n=e.handlePageClick;return i.a.createElement("div",{className:"profile-page",onClick:n},i.a.createElement("div",{className:"box-1"},i.a.createElement("h1",null,"Details"),i.a.createElement("div",{className:"profile-card"},i.a.createElement("h3",null,"Id: ",h.user.id),i.a.createElement("h3",null,"Name: ",h.user.name),i.a.createElement("h3",null,"Email: ",h.user.email))),i.a.createElement("div",{className:"box-2"},i.a.createElement("h1",null,"Your uploaded images"),i.a.createElement("div",{className:"image-uploads"},a.map((function(e){if(e.name===h.user.name)return i.a.createElement("div",{className:"image-card",key:e.id},i.a.createElement("img",{src:e.url,alt:e.tag,id:e.id}),i.a.createElement("button",{className:"delete-btn",onClick:function(){return t(e)}},"Delete"))})))))}),L=(t(26),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(f.a)(this,Object(v.a)(a).call(this,e))).removeImage=function(e){var a=e.target.previousElementSibling.src,n=t.state.images.filter((function(e){return e!==a}));localStorage.setItem("favourites",JSON.stringify(n)),t.setState({images:n})},t.state={images:[]},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("favourites"));this.setState({images:e})}},{key:"render",value:function(){var e=this;return this.state.images&&0!==this.state.images.length?i.a.createElement("div",{className:"fav-page"},i.a.createElement("h1",{className:"favourite-title"},"Favourites"),i.a.createElement("div",{className:"fav-images"},this.state.images.map((function(a,t){return i.a.createElement("div",{class:"fav-image-card"},i.a.createElement("img",{key:t,src:a,alt:"FavouriteImage"}),i.a.createElement("button",{className:"remove-btn",onClick:e.removeImage},"Remove"))})))):i.a.createElement("div",{className:"fav-page"},i.a.createElement("h1",{className:"favourite-title"},"You don't have any favourite pics!"))}}]),a}(n.Component)),R=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(f.a)(this,Object(v.a)(a).call(this,e))).addImage=function(e){fetch("https://stark-ridge-74307.herokuapp.com/upload",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e.url,tag:e.tag,category:e.category,id:h.user.id})}).then((function(e){return e.json()})).then((function(e){e?(t.props.history.push("/home"),t.setState({imageUploaded:!0}),setTimeout((function(){t.setState({imageUploaded:!1})}),5e3),t.getImages()):console.log(e)}))},t.deleteImage=function(e){fetch("https://stark-ridge-74307.herokuapp.com/delete",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.id,fileName:e.url.split("/")[3]})}).then((function(e){return e.json()})).then((function(e){console.log(e),t.getImages()}))},t.handleOnImageClick=function(e,a){t.setState({imageUrl:e.target.src,imageAuthor:a})},t.handleCancelImage=function(e){var a=e.target.className;"imageClicked"!==a&&"cancel btn"!==a||t.setState({imageUrl:null})},t.handleSearch=function(e){e?fetch("https://stark-ridge-74307.herokuapp.com/images/search?q=".concat(e.toLowerCase())).then((function(e){return e.json()})).then((function(e){t.setState({filteredImages:e})})):t.setState({filteredImages:null})},t.handleMenuClick=function(){t.setState((function(e){return{menu:!e.menu}}))},t.handlePageClick=function(){t.setState({menu:!1})},t.saveToFavourites=function(){var e=JSON.parse(localStorage.getItem("favourites"));if(e){var a=e.concat(t.state.imageUrl);localStorage.setItem("favourites",JSON.stringify(a)),t.props.history.push("/home/favourites"),t.setState({imageUrl:null})}else localStorage.setItem("favourites",JSON.stringify([t.state.imageUrl])),t.props.history.push("/home/favourites"),t.setState({imageUrl:null})},t.reload=function(){t.setState({filteredImages:null})},t.getImages=function(){fetch("https://stark-ridge-74307.herokuapp.com/images").then((function(e){return e.json()})).then((function(e){t.setState({initialImages:Object(p.a)(e)})}))},t.state={initialImages:[],filteredImages:null,menu:!1,imageUploaded:!1,imageUrl:null,imageAuthor:""},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getImages()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"home-page"},i.a.createElement(O,{handleSearch:this.handleSearch,reload:this.reload,handleMenuClick:this.handleMenuClick,menu:this.state.menu}),i.a.createElement(c.b,{exact:!0,path:"/home",render:function(){return i.a.createElement(U,{initialImages:e.state.initialImages,filteredImages:e.state.filteredImages,handlePageClick:e.handlePageClick,handleOnImageClick:e.handleOnImageClick})}}),i.a.createElement(c.b,{path:"/home/upload",render:function(){return i.a.createElement(P,{addImage:e.addImage,handlePageClick:e.handlePageClick})}}),i.a.createElement(c.b,{path:"/home/profile",render:function(){return i.a.createElement(x,{initialImages:e.state.initialImages,deleteImage:e.deleteImage,handlePageClick:e.handlePageClick})}}),i.a.createElement("div",{onClick:this.handleCancelImage,className:this.state.imageUrl?"imageClicked":"hide"},i.a.createElement("div",{className:"image-grp"},i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{className:"image-display",src:this.state.imageUrl,alt:"img"}),i.a.createElement("span",{className:"author"},"Uploaded by ",this.state.imageAuthor)),i.a.createElement("div",{className:"btn-grp"},i.a.createElement("button",{className:"btn",onClick:this.saveToFavourites},"Add To Favourites"),i.a.createElement("button",{className:"cancel btn",onClick:this.handleCancelImage},"Cancel")))),i.a.createElement(c.b,{path:"/home/favourites",component:L}),i.a.createElement("span",{className:this.state.imageUploaded?"uploaded":"hide"},"Uploaded!"))}}]),a}(n.Component),F=(t(49),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(f.a)(this,Object(v.a)(a).call(this,e))).handleOnChange=function(e){var a=e.target,n=a.name,i=a.value;t.setState(Object(S.a)({},n,i))},t.handleKeyPress=function(e){"Enter"===e.key&&t.handleOnLogin()},t.handleOnLogin=function(){var e=t.state,a=e.email,n=e.password;a&&n?h.login(a,n).then((function(){h.authenticated?t.props.history.push("/home"):t.setState({isValid:!1})})):t.setState({isValid:!1})},t.state={email:"",password:"",isValid:!0},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"sign-in"},i.a.createElement("div",{className:"form-wrapper"},i.a.createElement("div",null,i.a.createElement("h1",{className:"depik"},"Depikt."),i.a.createElement("h3",null,"Share your ideas")),i.a.createElement("div",{className:this.state.isValid?"valid":"invalid"},"Your email or password is invalid"),i.a.createElement("div",{className:"signin-form",onKeyPress:this.handleKeyPress},i.a.createElement("input",{type:"email",placeholder:"email",onChange:this.handleOnChange,name:"email"}),i.a.createElement("input",{type:"password",placeholder:"password",onChange:this.handleOnChange,name:"password"}),i.a.createElement("button",{className:"btn",type:"button",onClick:this.handleOnLogin},"Log in"),i.a.createElement("p",null,"OR")),"Dont have an account?",i.a.createElement(b.b,{to:"/register"},"Register"))))}}]),a}(n.Component)),V=(t(50),function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(f.a)(this,Object(v.a)(a).call(this,e))).handleOnChange=function(e){var a=e.target,n=a.name,i=a.value;t.setState(Object(S.a)({},n,i))},t.handleOnRegister=function(){var e=t.state,a=e.name,n=e.email,i=e.password;(a||n||i)&&t.validateEmail(n)?h.register(a,n,i).then((function(){console.log("props"),t.props.history.push("./home")})):t.setState({isValid:!1})},t.validateEmail=function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)},t.state={name:"",email:"",password:"",isValid:!0},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"sign-in"},i.a.createElement("div",{className:"form-wrapper"},i.a.createElement("div",null,i.a.createElement("h1",{className:"depik"},"Depikt."),i.a.createElement("h3",null,"Share your ideas")),i.a.createElement("div",{className:this.state.isValid?"valid":"invalid"},"Please fill in all fields correctly"),i.a.createElement("form",{className:"register-form"},i.a.createElement("input",{type:"text",placeholder:"name",name:"name",onChange:this.handleOnChange}),i.a.createElement("input",{type:"email",placeholder:"email",name:"email",onChange:this.handleOnChange}),i.a.createElement("input",{type:"password",placeholder:"password",name:"password",onChange:this.handleOnChange}),i.a.createElement("button",{className:"btn",type:"button",onClick:this.handleOnRegister},"Register"),i.a.createElement("p",null,"OR")),"Already a member?",i.a.createElement(b.b,{to:"/"},"Log in"))))}}]),a}(n.Component));var J=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(c.d,null," ",i.a.createElement(c.b,{exact:!0,path:"/",component:F})," ",i.a.createElement(c.b,{path:"/register",component:V}),i.a.createElement(g,{path:"/home",component:R}),i.a.createElement(c.b,{path:"*",component:function(){return"404 Not Found"}})))};s.a.render(i.a.createElement(b.a,{basename:"/depikt"},i.a.createElement(J,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.60500b65.chunk.js.map