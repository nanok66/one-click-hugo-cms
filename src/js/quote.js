<script>
function getPrice(type) {
  var obj = document.getElementById(type);
  var price = obj.options[obj.selectedIndex].getAttribute("data-price");
  if (price == null)
    price = 0;
  return parseInt(price);
}

function updatePrice() {
  document.getElementById("price").innerHTML = "Total: $" +
    (getPrice("station") + getPrice("sani") + getPrice("tank size")+ getPrice("pressure switch") + getPrice("liquid sensor") + getPrice("control panel") + getPrice("dry fire"));
}
</script>

<form action="testemail@gmail.com" method="post" style="font-size:200%; margin: 0; height:100%; overflow: hidden;">
  <fieldset>
    <select name="Stations" id="station" style="font-size:70%;" onChange="updatePrice()">
      <option value="Choose Number of Stations">Choose Number of Stations</option>
      <option value="Single Station" data-price="8000">Single Station</option>
      <option value="Double Station" data-price="10000">Double Station</option>
      <option value="Triple Station" data-price="12000">Triple Station</option>
    </select>
  </fieldset>
<fieldset>
    <select name="Detergent Tank" id="tank size" style="font-size:70%;" onChange="updatePrice()">
      <option value="Choose Detergent Tank Size">Choose Detergent Tank Size</option>
      <option value="dettank15" data-price="0">15 gallon tank (repurposed sanke)</option>
      <option value="dettank25" data-price="300">25 gallon tank</option>
    </select>
  </fieldset>
  <fieldset>
    <select name="Sani" id="sani" style="font-size:70%;" onChange="updatePrice()">
      <option value="Choose Sanitizer Method">Choose Sanitizer Method</option>
      <option value="Injector" data-price="0">Sanitizer Injecting (no tank)</option>
      <option value="tank15" data-price="1400">Sanitizer Recycling - 15 gallon Tank</option>
      <option value="tank25" data-price="2200">Sanitizer Recycling - 25 gallon Tank</option>
    </select>
  </fieldset>
  <fieldset>
    <select name="Pressure Switch" id="pressure switch" style="font-size:70%;" onChange="updatePrice()">
      <option value="No Pressure Switch" data-price="0">No Pressure Switch</option>
      <option value="Pressure Switch" data-price="250">Pressure Switch</option>
    </select>
  </fieldset>
   <fieldset>
    <select name="Liquid Sensor" id="liquid sensor" style="font-size:70%;" onChange="updatePrice()">
      <option value="No Liquid Sensor" data-price="0">No Liquid Sensor</option>
      <option value="Liquid Sensor" data-price="350">Liquid Sensor</option>
    </select>
  </fieldset>
  <fieldset>
    <select name="Control Panel" id="control panel" style="font-size:70%;" onChange="updatePrice()">
      <option value="Plastic Control Panel" data-price="0">Plastic Control Panel</option>
      <option value="Stainless Control Panel" data-price="400">Stainless Control Panel</option>
      </select>
    </fieldset>
  <fieldset>
    <select name="Dry Fire Protection" id="dry fire" style="font-size:70%;" onChange="updatePrice()">
      <option value="No Dry Fire Protection" data-price="0">No Dry Fire Protection</option>
      <option value="Dry Fire Protection" data-price="150">Dry Fire Protection</option>
    </select>
  </fieldset>
  <fieldset>
    <div id="price">Total: $0
    </div>
