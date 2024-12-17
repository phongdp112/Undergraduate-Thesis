package com.phongdp112.backend.domain.mariadb;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "actuators")
@Getter
@Setter
public class Actuator extends AbstractAuditingEntity<String>{

    @Id
    @Column(name = "actuator_serial_number", nullable = false, unique = true, length = 50)
    private String actuatorSerialNumber;
    @Column(name = "stm32_id", nullable = false)
    private Integer stm32Id;

    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @Column(name = "garden_id")
    private Integer gardenId;

    @Column(name = "actuator_name", nullable = false, length = 100)
    private String actuatorName;

    @Column(name="is_turn")
    private boolean isTurn;
}
