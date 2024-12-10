package com.phongdp112.backend.repository.postgresql;

import com.phongdp112.backend.domain.postgresql.ActuatorDataDTO;
import com.phongdp112.backend.domain.postgresql.SensorDataDTO;
import org.springframework.jdbc.core.JdbcTemplate;

import java.time.ZonedDateTime;
import java.util.List;

public class SensorDataRepository {
    private final JdbcTemplate jdbcTemplate;

    public SensorDataRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    public List<SensorDataDTO> getSensorData(String sensorSerialNumber, ZonedDateTime from, ZonedDateTime to) {
        String sql = "SELECT sensor_serial_number, type_id, value, create_at " +
                "FROM sensor_data " +
                "WHERE sensor_serial_number = ? AND create_at BETWEEN ? AND ?";

        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            SensorDataDTO dto = new SensorDataDTO();
            dto.setSensorSerialNumber(rs.getString("sensor_serial_number"));
            dto.setTypeId(rs.getInt("type_id"));
            dto.setValue(rs.getString("value"));
            dto.setCreatedAt(rs.getObject("create_at", ZonedDateTime.class));
            return dto;
        }, sensorSerialNumber, from, to); // Các tham số được truyền trực tiếp
    }
}
