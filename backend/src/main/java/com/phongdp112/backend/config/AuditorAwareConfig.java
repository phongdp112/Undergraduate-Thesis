package com.phongdp112.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

@Configuration
public class AuditorAwareConfig {

    @Bean
    public AuditorAware<String> auditorProvider() {
        return () -> {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

            // Nếu không có người dùng đăng nhập (ví dụ: tạo tài khoản)
            if (authentication == null || !authentication.isAuthenticated() || "anonymousUser".equals(authentication.getPrincipal())) {
                return Optional.of("system"); // Trả về "system" khi không có người dùng hiện tại
            }
            // Lấy thông tin username từ SecurityContext
            return Optional.ofNullable(authentication.getName());
        };
    }
}
