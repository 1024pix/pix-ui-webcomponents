/* 
Découle de cette Issue, non compatible Vite, mais ce petit hack fonctionne
https://github.com/etchteam/storybook-addon-css-variables-theme/issues/20
*/
export default (url) => {
    return {
      styleTag: null,
      innerStyles: '',
      use: async function () {
        if (!this.styleTag?.innerHTML) {
          this.styleTag = document.createElement('style');
          this.styleTag.type = 'text/css';
          this.innerStyles = (await import(/* @vite-ignore */ url)).default;
          this.styleTag.innerHTML = this.innerStyles;
          document.body.appendChild(this.styleTag);
          return;
        }
        this.styleTag.innerHTML = this.innerStyles;
      },
      unuse: function () {
        if (this.styleTag) {
          this.styleTag.innerHTML = '';
        }
      }
    };
  };