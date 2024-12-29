---
title: Nations report (Lebanon)
---

## The Nations report (Lebanon)

```js
import {customScatterPlot} from "./components/custom-scatter-plot.js";
```

```js
const nations = await FileAttachment("./data/nations.json").json();
const selectedNation = nations.find((n)=>n.name === 'Lebanon');
```
<div class="grid grid-cols-2">
  <div class="card">
    <h4>Income</h4>
    ${customScatterPlot(selectedNation.income)}
  </div>
  <div class="card">
    <h4>Population</h4>
    ${customScatterPlot(selectedNation.population)}
  </div>
</div>

```js
Inputs.table(nations)
```
