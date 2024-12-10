package com.phongdp112.backend.domain.mariadb;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "stm32s")
@Getter
@Setter
public class Stm32 extends AbstractAuditingEntity<Integer>{
    @Id
    @Column(name = "stm32_serial_number", nullable = false, unique = true, length = 50)
    private String stm32SerialNumber;

    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @Column(name = "garden_id")
    private Integer gardenId;

    @Column(name = "stm32_name", length = 100)
    private String stm32Name;
}
