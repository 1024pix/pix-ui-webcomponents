import{r as t,h as s,c as i}from"./p-b62186cd.js";function n(t,s,i){return(t||"")+(s?` ${s}`:"")+(i?` ${i}`:"")}const e=":host{display:block}";const o=class{constructor(s){t(this,s);this.first=undefined;this.middle=undefined;this.last=undefined}getText(){return n(this.first,this.middle,this.last)}render(){return s("div",null,"Hello, World! I'm ",this.getText())}};o.style=e;const r=":host{display:block}.primary{display:block;justify-content:center;align-items:center;text-decoration:none;background-color:#3D68FF;padding:12px 24px;border-radius:4px;color:#FFFFFF;font-size:0.875rem;font-weight:500;white-space:nowrap;cursor:pointer}";const c=class{constructor(s){t(this,s);this.click=i(this,"click",7);this.first=undefined;this.middle=undefined;this.last=undefined}handleClick(t){console.log(t)}testClick(t){console.log("test",t);return this.click.emit(t)}getText(){return n(this.first,this.middle,this.last)}render(){return s("div",null,s("button",{class:"primary",onClick:this.testClick.bind(this)},"HelloPix ",this.getText()))}};c.style=r;export{o as my_component,c as pix_button};
//# sourceMappingURL=p-fffb9493.entry.js.map