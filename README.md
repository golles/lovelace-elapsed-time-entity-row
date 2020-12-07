# elapsed-time-entity-row

Display an elapsed time string from a entity state or attribute.
![Example](https://user-images.githubusercontent.com/2211503/101376069-6b44c280-38b0-11eb-868f-f26f3a04be56.png)

## Installation
Install `elapsed-time-entity-row.js` as a `module`.

```yaml
resources:
  - url: /local/elapsed-time-entity-row.js
    type: module
```

## Usage example

**Note:** This is *not* a card. It's a row for an [entities](https://www.home-assistant.io/lovelace/entities/).

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
    hide: seconds
    icon: mdi:clock-outline
  - type: custom:elapsed-time-entity-row
    entity: fan.air_purifier
    attribute: use_time
    name: Tijd gebruikt
    icon: mdi:heart-pulse
    hide: seconds
```

## Options
| Name | Type | Required | Description |
|:-----|:-----|:-----|:-----|
| type | string | **yes** | Must be `custom:elapsed-time-entity-row` |
| hide | string | No | only possible value here is `seconds` to hide the seconds from the string
| icon, name, secondary_info etc | string | No | Any of the standard options should work normally
