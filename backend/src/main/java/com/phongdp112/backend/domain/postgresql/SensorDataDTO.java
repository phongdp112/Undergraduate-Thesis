package com.phongdp112.backend.domain.postgresql;

import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;
@Getter
@Setter
public class SensorDataDTO {
    String sensorSerialNumber;
    Integer typeId;
    String value;
    ZonedDateTime createdAt;
}
