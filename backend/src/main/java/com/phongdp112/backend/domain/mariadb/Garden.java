package com.phongdp112.backend.domain.mariadb;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "gardens")
@Getter
@Setter
public class Garden extends AbstractAuditingEntity<Integer> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @Column(name = "garden_name", nullable = false, length = 100)
    private String gardenName;

    @Column(name = "garden_location", length = 255)
    private String gardenLocation;

}
