package com.phongdp112.backend.domain.mariadb;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "garden_access")
@Getter
@Setter
public class GardenAccess extends AbstractAuditingEntity<Integer> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "user_id", nullable = false)
    private Integer userId;

    @Column(name = "garden_id", nullable = false)
    private Integer gardenId;

}
