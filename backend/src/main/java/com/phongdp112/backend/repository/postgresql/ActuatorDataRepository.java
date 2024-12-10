package com.phongdp112.backend.repository.postgresql;

import com.phongdp112.backend.domain.postgresql.ActuatorDataDTO;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

public class ActuatorDataRepository {
    private final JdbcTemplate jdbcTemplate;

    public ActuatorDataRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    public List<ActuatorDataDTO> getActuatorData(String actuatorSerialNumber, ZonedDateTime from, ZonedDateTime to) {
        String sql = "SELECT actuator_serial_number, type_id, value, create_at " +
                "FROM actuator_data " +
                "WHERE actuator_serial_number = ? AND create_at BETWEEN ? AND ?";

        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            ActuatorDataDTO dto = new ActuatorDataDTO();
            dto.setActuatorSerialNumber(rs.getString("actuator_serial_number"));
            dto.setTypeId(rs.getInt("type_id"));
            dto.setValue(rs.getString("value"));
            dto.setCreatedAt(rs.getObject("create_at", ZonedDateTime.class));
            return dto;
        }, actuatorSerialNumber, from, to); // Các tham số được truyền trực tiếp
    }
}
