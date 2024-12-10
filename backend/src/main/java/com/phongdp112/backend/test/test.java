package com.phongdp112.backend.controller;

import com.phongdp112.backend.service.MqttService;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mqtt")
public class test {

    private final MqttService mqttService;

    @Autowired
    public test(MqttService mqttService) {
        this.mqttService = mqttService;
    }

    // Publish data to a sensor topic
    @PostMapping("/publish")
    public String publish(@RequestParam String userId,
                          @RequestParam String stm32Id,
                          @RequestParam String sensorId,
                          @RequestBody String payload) {
        mqttService.publish(userId, stm32Id, sensorId, payload);
        return "Data published successfully!";
    }

    // Subscribe to a specific sensor topic
    @GetMapping("/subscribe")
    public String subscribe(@RequestParam String userId,
                            @RequestParam String stm32Id,
                            @RequestParam String sensorId) {
        try {
            mqttService.subscribe(userId, stm32Id, sensorId);
            return "Subscribed to topic successfully!";
        } catch (MqttException e) {
            return "Failed to subscribe: " + e.getMessage();
        }
    }

    // Unsubscribe from a sensor topic
    @GetMapping("/unsubscribe")
    public String unsubscribe(@RequestParam String userId,
                              @RequestParam String stm32Id,
                              @RequestParam String sensorId) {
        try {
            mqttService.unsubscribe(userId, stm32Id, sensorId);
            return "Unsubscribed from topic successfully!";
        } catch (MqttException e) {
            return "Failed to unsubscribe: " + e.getMessage();
        }
    }
}
