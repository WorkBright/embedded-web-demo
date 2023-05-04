
// let testEmbed = document.getElementById("testEmbed")
// testEmbed.innerHTML = `
//     <embed type="text/html" 
//         id="wb-demo-iframe"
//         src="https://dylan.workbright.dev"
//         title="WorkBright in an iFrame"
//         width="500"
//         height="700"
//     />
// `

// fetch('https://dylan.workbright.dev/sign_in_with_token?token=c67d22533976c084b514754ee93f1757',  {mode: 'no-cors'})
//     .then(response => {
//         testEmbed.src = "https://dylan.workbright.dev"
//     })


// class EmbeddedWebview extends HTMLElement {
//     connectedCallback() {
//       fetch(this.getAttribute('firstSrc'), {mode: 'no-cors'})
//         .then(response =>  {
//             fetch(this.getAttribute('secondSrc'), {mode: 'no-cors'})
//             .then(response =>  {
//                 debugger
//                 return response.text()
//             }).then(html => {
//                     debugger
//                   const shadow = this.attachShadow({ mode: 'closed' });
//                   shadow.innerHTML = html;
//                 });
//         })
        
//     }
//   }
  
//   window.customElements.define(
//     'embedded-webview',
//     EmbeddedWebview
//   );

// document.getElementById('submitform').submit()
