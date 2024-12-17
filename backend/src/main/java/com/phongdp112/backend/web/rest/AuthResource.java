package com.phongdp112.backend.web.rest;

import com.phongdp112.backend.domain.mariadb.User;
import com.phongdp112.backend.dto.request.LoginRequest;
import com.phongdp112.backend.dto.request.RegisterRequest;
import com.phongdp112.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/authenticate")
public class AuthResource {
     @Autowired
     private AuthService authService;
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        return authService.login(loginRequest);
    }
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {
        try {
            authService.register(registerRequest);
            return ResponseEntity.ok("User registered successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(400).body("Registration failed: " + e.getMessage());
        }
    }

}



