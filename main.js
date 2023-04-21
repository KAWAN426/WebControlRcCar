let deviceName = 'HMSoft';
let serviceUUID = 0xFFE0;
let characteristicUUID = 0xFFE1;

let device;
let characteristic;
let server;
let service;

async function connect() {
  device = await navigator.bluetooth.requestDevice({
    filters: [{ services: [serviceUUID] }]
  })
  server = await device.gatt.connect();
  service = await server.getPrimaryService(serviceUUID);
  characteristic = await service.getCharacteristic(characteristicUUID);
  console.log(server, service, characteristic)
}

async function sendData() {
  let data = "sssssssssss";
  await characteristic.writeValue(new TextEncoder().encode(data)).then(() => {
    console.log('Data sent: ' + data);
  });
}

document.getElementById('connectBtn').addEventListener('click', connect)

document.getElementById('sendBtn').addEventListener('click', sendData)