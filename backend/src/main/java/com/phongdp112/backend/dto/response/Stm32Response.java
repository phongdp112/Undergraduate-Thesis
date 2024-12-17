package com.phongdp112.backend.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
@Getter
@Setter
@AllArgsConstructor
public class Stm32Response {
        private String stm32SerialNumber;
        private String gardenName;
        private String stm32Name;
        @JsonProperty("isConnected")
        private boolean isConnected;
        private LocalDate lastConnected;
        private Integer deviceQuantity;

}
