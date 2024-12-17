package com.phongdp112.backend.web.rest;


import com.phongdp112.backend.dto.response.Stm32Response;
import com.phongdp112.backend.repository.mariadb.Stm32Repository;
import com.phongdp112.backend.service.Stm32Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/stm32")
public class Stm32Resource {
    private final Stm32Service stm32Service;

    public Stm32Resource( Stm32Service stm32Service) {
        this.stm32Service = stm32Service;
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<Stm32Response>> getAll() {
        return stm32Service.findAllWithGarden();
    }
}
