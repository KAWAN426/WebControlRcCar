#include <SoftwareSerial.h> 

SoftwareSerial BTSerial(4, 5); // 소프트웨어 시리얼 (TX,RX) 
//BluetoothSerial SerialBT;
void setup(){
Serial.begin(9600);
Serial.println("Hello!");  
BTSerial.begin(9600);
//if (Serial.available() > 0) {
//    String input = Serial.readString();
//    if (input == "check") {
//      if (BTSerial.connected()) {
//        Serial.println("Bluetooth is connected");
//      } else {
//        Serial.println("Bluetooth is not connected");
//      }
//    }
//  }
}

void loop(){
  while (BTSerial.available()){ 
    byte data = BTSerial.read();
    Serial.write(data);
  }  

  while (Serial.available()){
    byte data = Serial.read();
    BTSerial.write(data); 
  }
}
