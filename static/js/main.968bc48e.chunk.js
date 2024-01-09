(this.webpackJsonpnewapp=this.webpackJsonpnewapp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r);a(14),a(15);function o(e){const t=t=>{"default"===t?e.toggleDarkTheme("default"):"Blue"===t?e.toggleDarkTheme("Blue"):"Green"===t&&e.toggleDarkTheme("Green")};return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},e.aboutText))),l.a.createElement("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("div",{className:"dropdown-center"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDarkDropdown","aria-controls":"navbarNavDarkDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDarkDropdown"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("button",{className:"btn btn-sm btn-".concat(e.mode," dropdown-toggle"),"data-bs-toggle":"dropdown","aria-expanded":"false"},"dark"===e.mode?"Dark":"Light"," Mode"),l.a.createElement("ul",{className:"dropdown-menu dropdown-menu-".concat(e.mode)},l.a.createElement("li",null,l.a.createElement("label",{className:"dropdown-item",onClick:()=>t("default")},"Default")),l.a.createElement("li",null,l.a.createElement("label",{className:"dropdown-item",onClick:()=>t("Blue")},"Blue")),l.a.createElement("li",null,l.a.createElement("label",{className:"dropdown-item",onClick:()=>t("Green")},"Green")))))))))))}o.defaultProps={title:"Set Title Here",aboutText:"About Text Here"};var s=a(4),m=a.n(s),d=a(3),u=a.n(d);function i(e){const[t,a]=Object(n.useState)("");let r=new u.a;const[c,o]=Object(n.useState)("English");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"mb-3",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h2",null,e.heading),l.a.createElement("textarea",{className:"form-control",id:"mybox",value:t,onChange:e=>{a(e.target.value)},rows:"8",style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"}})),l.a.createElement("button",{type:"button",className:"btn btn-".concat("Green"===e.darkTheme?"success":"primary"," mx-2"),onClick:()=>{let n=t.toUpperCase();a(n),e.showAlert("Text has been converted to uppercase.","success")}},"UpperCase"),l.a.createElement("button",{type:"button",className:"btn btn-".concat("Green"===e.darkTheme?"success":"primary"," mx-2"),onClick:()=>{a(t.toLowerCase()),e.showAlert("Text has been converted to lowercase.","success")}},"LowerCase"),l.a.createElement("button",{type:"button",className:"btn btn-".concat("Green"===e.darkTheme?"success":"primary"," mx-2"),onClick:()=>{t.trim().length>0&&o(r.detect(t)[0][0]),e.showAlert("Text language has been detected.","success")}},"Detect Language"),l.a.createElement("button",{type:"button",className:"btn btn-".concat("Green"===e.darkTheme?"success":"primary"," mx-2"),onClick:()=>{const t=document.getElementById("mybox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text has been copied to clipboard.","success")}},"Copy Text"),l.a.createElement("button",{type:"button",className:"btn btn-".concat("Green"===e.darkTheme?"success":"primary"," mx-2"),onClick:()=>{let n=t.split(/[ ]+/);a(n.join(" ")),e.showAlert("Extra spaces has been removed.","success")}},"Extract Spaces"),l.a.createElement("button",{type:"button",className:"btn btn-danger mx-2",onClick:()=>{a(""),e.showAlert("Text has been cleared.","success")}},"Clear")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h1",null,"Your text summary"),l.a.createElement("p",null,"Language of the entered text is ",c.toUpperCase(),"."),l.a.createElement("p",null,"Your text has ",t.trim().split(/\s+/).filter(e=>e.length>0).length," words and ",t.trim().length," characters."),l.a.createElement("p",null,"Text can be read in ",.008*t.trim().split(/\s+/).length," minutes."),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,t.length>0?t.trim():"Enter some text in text area to preview.")))}i.propTyps={heading:m.a.string.isRequired};var b=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type)),":",e.alert.msg)};var p=function(){const[e,t]=Object(n.useState)("light"),[a,r]=Object(n.useState)(null),[c,s]=Object(n.useState)("#bfc0f7"),[m,d]=Object(n.useState)("default"),u=(e,t)=>{r({msg:e,type:t}),setTimeout(()=>r(null),1200)},p=e=>{s(e),document.body.style.backgroundColor=c};return"dark"===e?("default"===m?document.body.style.backgroundColor="black":"Blue"===m?document.body.style.backgroundColor="#042743":"Green"===m&&(document.body.style.backgroundColor="#0f5032"),document.title="TextUtils DarkMode"):("default"===m?document.body.style.backgroundColor="#bfc0f7":"Blue"===m?document.body.style.backgroundColor="#c4e9ff":"Green"===m&&(document.body.style.backgroundColor="#bcfbc7"),document.title="TextUtils"),l.a.createElement(l.a.Fragment,null,l.a.createElement(o,{title:"TextUtils",mode:e,aboutText:"About TextUtils",toggleMode:()=>{"light"===e?(t("dark"),"default"===m?p("black"):"Blue"===m?p("#042743"):"Green"===m&&p("#0f5032"),u("Dark mode has been enabled","success")):(t("light"),"default"===m?p("#bfc0f7"):"Blue"===m?p("#c4e9ff"):"Green"===m&&p("#bcfbc7"),u("Dark Mode has been disabled","success"))},toggleDarkTheme:e=>{d(e)}}),l.a.createElement(b,{alert:a}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(i,{heading:"Enter text to Analyze Below",mode:e,showAlert:u,darkTheme:m})))};var g=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null))),g()},5:function(e,t,a){e.exports=a(23)}},[[5,1,2]]]);
//# sourceMappingURL=main.968bc48e.chunk.js.map