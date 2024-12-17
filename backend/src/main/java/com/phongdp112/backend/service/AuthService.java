package com.phongdp112.backend.service;

import com.phongdp112.backend.domain.mariadb.User;
import com.phongdp112.backend.dto.request.LoginRequest;
import com.phongdp112.backend.dto.request.RegisterRequest;
import com.phongdp112.backend.repository.mariadb.UserRepository;
import com.phongdp112.backend.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public ResponseEntity<String> login(LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            // Kiểm tra mật khẩu
            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                // Nếu mật khẩu hợp lệ, tạo JWT và trả về
                String token = jwtTokenProvider.generateToken(user.getEmail());
                return ResponseEntity.ok(token); // Trả về JWT token trong response
            } else {
                // Mật khẩu không đúng
                System.out.println("Mật khẩu không đúng");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } else {
            // Người dùng không tồn tại
            System.out.println("Người dùng không ton tai");

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
    public User register(RegisterRequest registerRequest) {
        // Kiểm tra nếu username đã tồn tại
        if (userRepository.findByEmail(registerRequest.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }
        if(userRepository.findByUsername(registerRequest.getUsername()).isPresent()) {
            throw new RuntimeException("Username already exists");
        }

        // Mã hóa mật khẩu trước khi lưu
        User newUser = new User();
        newUser.setUsername(registerRequest.getUsername());
        newUser.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        newUser.setEmail(registerRequest.getEmail());
        newUser.setPhone(registerRequest.getPhone());
        return userRepository.save(newUser);
    }
}
