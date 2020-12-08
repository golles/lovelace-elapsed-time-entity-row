# elapsed-time-entity-row

Display an elapsed time string from a entity state or attribute.
![Example](https://user-images.githubusercontent.com/2211503/101518945-dc54aa80-3982-11eb-9079-e3705d3d18d0.png)

## Installation
Install `elapsed-time-entity-row.js` as a `module`.

```yaml
resources:
  - url: /local/elapsed-time-entity-row.js
    type: module
```

## Usage example
**Note:** This is *not* a card. It's a row for an [entities](https://www.home-assistant.io/lovelace/entities/) card.
This will be localized for all supported languages in Home Assistant.

```yaml
title: Elapsed time example
type: entities
entities:
  - sensor.host_uptime
  - type: custom:elapsed-time-entity-row
    entity: sensor.host_uptime
  - sensor.runtime
  - type: custom:elapsed-time-entity-row
    entity: sensor.runtime
    hideSeconds: 'true'
    icon: mdi:clock-outline
  - type: custom:elapsed-time-entity-row
    entity: fan.air_purifier
    attribute: use_time
    name: Tijd gebruikt
    icon: mdi:heart-pulse
    hideSeconds: 'true'
```

Sensors in this example
```yaml
sensor:
  - platform: command_line
    name: runtime
    command: echo "$(($(date +%s) - $(date -d "$(head -n1 /config/home-assistant.log | cut -d' ' -f-2)" +%s)))"

  - platform: command_line
    name: host_uptime
    command: 'sed "s/\..*//" /proc/uptime'
```

## Options
| Name | Type | Required | Description |
|:-----|:-----|:-----|:-----|
| type | string | **yes** | Must be `custom:elapsed-time-entity-row` |
| hideSeconds | string | No | To hide the seconds: `true` anything else will be considerd as `false`
| icon, name, secondary_info etc | string | No | Any of the standard options should work normally
