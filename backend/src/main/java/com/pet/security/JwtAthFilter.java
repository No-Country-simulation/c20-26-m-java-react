package com.pet.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;
import java.io.IOException;
import java.util.Date;

@Component
public class JwtAthFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {

        // Obtener el encabezado de autorización de la solicitud
        final String authHeader = request.getHeader("Authorization");
        final String userEmail;
        final String jwtToken;

        // Verificar si el encabezado de autorización es nulo o no comienza con "Bearer "
        if(authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        // Extraer el token JWT del encabezado de autorización
        jwtToken = authHeader.substring(7);

        // Recuperar el email del token
        userEmail = getEmailFromToken(jwtToken);

        // Verificar si el email no es nulo y no hay una autenticación previa en el contexto de seguridad
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            // Cargar los detalles del usuario utilizando el email
            UserDetails userDetails = userDetailsService.loadUserByUsername(userEmail);

            // Validar el token
            final boolean isValid = validateToken(jwtToken, userDetails);

            // Si el token es válido, configurar la autenticación en el contexto de seguridad
            if (isValid) {
                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        // Continuar con el siguiente filtro en la cadena
        filterChain.doFilter(request, response);
    }

    // Metodo para recuperar el email del token JWT
    private String getEmailFromToken(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey("your_secret_key") // Usa tu clave secreta
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject(); // Suponiendo que el email está en el campo "sub"
    }

    // Metodo para validar el token JWT
    private boolean validateToken(String token, UserDetails userDetails) {
        try {
            Claims claims = Jwts.parser()
                    .setSigningKey("your_secret_key") // Usa tu clave secreta
                    .parseClaimsJws(token)
                    .getBody();
            String username = claims.getSubject();
            // Verificar si el username del token coincide con el username del UserDetails y si el token no ha expirado
            return (username.equals(userDetails.getUsername()) && !claims.getExpiration().before(new Date()));
        } catch (SignatureException e) {
            return false;
        }
    }
}