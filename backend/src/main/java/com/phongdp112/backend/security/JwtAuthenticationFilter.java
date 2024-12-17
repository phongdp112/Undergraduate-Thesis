package com.phongdp112.backend.security;

import com.phongdp112.backend.repository.mariadb.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.ArrayList;
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtTokenProvider jwtTokenProvider;
    @Autowired
    private UserRepository  userRepository;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String jwt = extractJwtFromRequest(request);
        System.out.println(jwt);
        System.out.println(jwtTokenProvider.validateToken(jwt));
        if (jwt != null && jwtTokenProvider.validateToken(jwt)) {
            String email = jwtTokenProvider.getUsernameFromToken(jwt);
            Integer userId = userRepository.findByEmail(email).orElseThrow().getId();
            // Nếu token hợp lệ, set authentication vào SecurityContext
            SecurityContextHolder.getContext().setAuthentication(
                    new  CustomAuthenticationToken(email, userId,null, new ArrayList<>())
            );
        }

        filterChain.doFilter(request, response);
    }

    private String extractJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7); // Loại bỏ "Bearer "
        }
        return null;
    }
}
