package com.phongdp112.backend.domain.mariadb;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "sensors")
@Getter
@Setter
public class Sensor extends AbstractAuditingEntity<String> {
    @Id
    @Column(name = "sensor_serial_number", nullable = false, unique = true, length = 50)
    private String sensorSerialNumber;

    @Column(name = "stm32_id", nullable = false)
    private Integer stm32Id;

    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @Column(name = "garden_id")
    private Integer gardenId;

    @Column(name = "sensor_name", nullable = false, length = 100)
    private String sensorName;
    @Column(name="is_turn")
    private boolean isTurn;
}
