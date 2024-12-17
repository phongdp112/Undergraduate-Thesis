package com.phongdp112.backend.service;

import org.eclipse.paho.client.mqttv3.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;

@Service
public class MqttService {

    private final MqttClient mqttClient;

    @Autowired
    public MqttService(MqttClient mqttClient) {
        this.mqttClient = mqttClient;
    }
    public void publishConnected(String stm32Serial,String payload) {
        String topic = "/stm32/"+stm32Serial+"/connected";
        try {
            // Create an MQTT message
            MqttMessage message = new MqttMessage(payload.getBytes());
            message.setQos(1);  // Quality of Service (QoS) level
            message.setRetained(false);  // The message will not be retained by the broker

            // Publish the message
            mqttClient.publish(topic, message);
            System.out.println("Data sent to topic: " + topic);

        } catch (MqttException e) {
            System.err.println("Failed to publish message: " + e.getMessage());
        }
    }
    // Publish data to MQTT topic
    public void publish(String userId, String stm32Id, String sensorId, String payload) {
        String topic = "user/" + userId + "/stm32/" + stm32Id + "/sensor/" + sensorId;
        try {
            // Create an MQTT message
            MqttMessage message = new MqttMessage(payload.getBytes());
            message.setQos(1);  // Quality of Service (QoS) level
            message.setRetained(false);  // The message will not be retained by the broker

            // Publish the message
            mqttClient.publish(topic, message);
            System.out.println("Data sent to topic: " + topic);

        } catch (MqttException e) {
            System.err.println("Failed to publish message: " + e.getMessage());
        }
    }

    // Subscribe to a topic and handle incoming messages
    public void subscribe(String userId, String stm32Id, String sensorId) throws MqttException {
        String topic = "user/" + userId + "/stm32/" + stm32Id + "/sensor/" + sensorId;

        // Subscribe to the topic
        mqttClient.subscribe(topic, (receivedTopic, message) -> {
            String receivedData = new String(message.getPayload());
            System.out.println("Received data from topic " + receivedTopic + ": " + receivedData);

            // Further processing of incoming data (e.g., save to database, trigger actions)
            // You can use a service to process this data and store it in your backend
        });

        System.out.println("Subscribed to topic: " + topic);
    }

    // Subscribe to multiple topics for a given user
    public void subscribeToAllSensors(String userId, List<String> stm32Ids) throws MqttException {
        for (String stm32Id : stm32Ids) {
            // Assuming each STM32 has multiple sensors, loop through each sensor
            for (int sensorId = 1; sensorId <= 5; sensorId++) { // Replace 5 with actual sensor count
                subscribe(userId, stm32Id, String.valueOf(sensorId));
            }
        }
    }

    // Unsubscribe from a topic
    public void unsubscribe(String userId, String stm32Id, String sensorId) throws MqttException {
        String topic = "user/" + userId + "/stm32/" + stm32Id + "/sensor/" + sensorId;
        mqttClient.unsubscribe(topic);
        System.out.println("Unsubscribed from topic: " + topic);
    }
}
