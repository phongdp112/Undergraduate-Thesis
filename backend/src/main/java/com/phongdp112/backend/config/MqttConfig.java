package com.phongdp112.backend.config;

import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;

@Configuration
public class MqttConfig {

    @Value("${mqtt.broker-url}")
    private String brokerUrl;

    @Value("${mqtt.client-id}")
    private String clientId;

    @Value("${mqtt.username}")
    private String username;

    @Value("${mqtt.password}")
    private String password;

    @Bean
    public MqttClient mqttClient() throws MqttException {
        MqttClient mqttClient = new MqttClient(brokerUrl, clientId);
        MqttConnectOptions options = new MqttConnectOptions();
        // Cấu hình nếu cần username và password
        // options.setUserName(username);
        // options.setPassword(password.toCharArray());
        options.setAutomaticReconnect(true);
        options.setCleanSession(true);

        try {
            mqttClient.connect(options);
            if (mqttClient.isConnected()) {
                System.out.println("Kết nối đến MQTT Broker thành công!");
            } else {
                System.out.println("Kết nối không thành công!");
            }
        } catch (MqttException e) {
            System.err.println("Lỗi kết nối đến MQTT Broker: " + e.getMessage());
            throw new MqttException(MqttException.REASON_CODE_CLIENT_EXCEPTION);
        }

        return mqttClient;
    }
}
