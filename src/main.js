import { LitElement, html } from "card-tools/src/lit-element";

class ElapsedTimeEntityRow extends LitElement {

  setConfig(config) {
    const defaultConfig = {hideSeconds: 'false'};
    this.config = {...defaultConfig, ...config};
  }

  _elapsedSecondsToString(number) {
    number = Number(number);
    const hideSeconds = this.config.hideSeconds.toLowerCase() === 'true';
    const andString = this.hass.localize('ui.common.and');

    const days = Math.floor(number / (3600 * 24));
    const hours = Math.floor(number % (3600 * 24) / 3600);
    const minutes = Math.floor(number % 3600 / 60);
    const seconds = Math.floor(number % 60);

    const stringArray = [];
    if (days > 0) stringArray.push(this.hass.localize('ui.components.relative_time.duration.day', 'count', days));
    if (hours > 0) stringArray.push(this.hass.localize('ui.components.relative_time.duration.hour', 'count', hours));
    if (minutes > 0 || (minutes == 0 && hideSeconds)) stringArray.push(this.hass.localize('ui.components.relative_time.duration.minute', 'count', minutes));
    if (!hideSeconds) {
      stringArray.push(this.hass.localize('ui.components.relative_time.duration.second', 'count', seconds));
    }

    let string = '';
    stringArray.forEach(function(value, i, array) {
      if (i === array.length - 2){ 
        string += `${value} ${andString}`;
      } else if (i === array.length - 1){ 
        string += ` ${value}`;
      } else {
        string += `${value}, `;
      }
    });

    return string;
  }

  render() {
    const entity = this.hass.states[this.config.entity];
    const state = this.config.attribute
      ? entity.attributes[this.config.attribute] || 0
      : entity.state || 0
    ;
    const elapsedTime = this._elapsedSecondsToString(state);

    return html`
      <hui-generic-entity-row
          .hass=${this.hass}
          .stateObj=${entity}
          .config=${this.config}
      >
        <div class="text-content">${elapsedTime}</div>
      </hui-generic-entity-row>
    `;
  }
}

if (!customElements.get('elapsed-time-entity-row')) {
  customElements.define('elapsed-time-entity-row', ElapsedTimeEntityRow);
  const pkg = require('../package.json');
  console.info(`%c${pkg.name}: ${pkg.version}`, 'font-weight: bold')
}
