package com.phongdp112.backend.service;

import com.phongdp112.backend.dto.response.Stm32Response;
import com.phongdp112.backend.repository.mariadb.Stm32Repository;
import com.phongdp112.backend.security.CustomAuthenticationToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Stm32Service {
    @Autowired
    private Stm32Repository stm32Repository;

    public ResponseEntity<List<Stm32Response>> findAllWithGarden() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            Integer userId = ((CustomAuthenticationToken) authentication).getUserId();

            List<Stm32Response> response = stm32Repository.findAllWithGarden(userId);

           System.out.println(response);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            // Xử lý lỗi và trả về phản hồi lỗi
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ArrayList<>());
        }
    }
}
