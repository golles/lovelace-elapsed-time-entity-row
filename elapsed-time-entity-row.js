(()=>{"use strict";var t={306:t=>{t.exports=JSON.parse('{"name":"elapsed-time-entity-row","private":true,"version":"0.1.0","description":"","scripts":{"build":"webpack","watch":"webpack --watch --mode=development","update-card-tools":"npm uninstall card-tools && npm install thomasloven/lovelace-card-tools"},"repository":{"type":"git","url":"github.com:golles/lovelace-elapsed-time-entity-row"},"keywords":[],"author":"golles","license":"MIT","devDependencies":{"webpack":"5.10.0","webpack-cli":"4.2.0"},"dependencies":{"card-tools":"github:thomasloven/lovelace-card-tools"}}')}},e={};function o(s){if(e[s])return e[s].exports;var i=e[s]={exports:{}};return t[s](i,i.exports,o),i.exports}(()=>{const t=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),e=t.prototype.html;t.prototype.css;class s extends t{setConfig(t){this.config={hideSeconds:"false",...t}}_elapsedSecondsToString(t){t=Number(t);const e="true"===this.config.hideSeconds.toLowerCase(),o=this.hass.localize("ui.common.and"),s=Math.floor(t/86400),i=Math.floor(t%86400/3600),n=Math.floor(t%3600/60),a=Math.floor(t%60),c=[];s>0&&c.push(this.hass.localize("ui.components.relative_time.duration.day","count",s)),i>0&&c.push(this.hass.localize("ui.components.relative_time.duration.hour","count",i)),(n>0||0==n&&e)&&c.push(this.hass.localize("ui.components.relative_time.duration.minute","count",n)),e||c.push(this.hass.localize("ui.components.relative_time.duration.second","count",a));let r="";return c.forEach((function(t,e,s){e===s.length-2?r+=`${t} ${o}`:e===s.length-1?r+=` ${t}`:r+=`${t}, `})),r}render(){const t=this.hass.states[this.config.entity],o=this.config.attribute?t.attributes[this.config.attribute]||0:t.state||0,s=this._elapsedSecondsToString(o);return e`
      <hui-generic-entity-row
          .hass=${this.hass}
          .stateObj=${t}
          .config=${this.config}
      >
        <div class="text-content">${s}</div>
      </hui-generic-entity-row>
    `}}if(!customElements.get("elapsed-time-entity-row")){customElements.define("elapsed-time-entity-row",s);const t=o(306);console.info(`%c${t.name}: ${t.version}`,"font-weight: bold")}})()})();