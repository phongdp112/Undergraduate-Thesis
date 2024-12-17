package com.phongdp112.backend.domain.mariadb;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "map_type")
@Getter
@Setter
public class MapType extends AbstractAuditingEntity<Integer> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "type_id", nullable = false)
    private Integer typeId;

    @Column(name = "device_serial_number", nullable = false)
    private String deviceSerialNumber;

    @Column(name = "type_category", nullable = false)
    private Integer typeCategory;

}