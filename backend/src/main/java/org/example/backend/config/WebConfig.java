package org.example.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Ta metoda konfiguruje CORS globalnie dla wszystkich kontrolerów w aplikacji.
        registry.addMapping("/**") // Zastosuj do wszystkich endpointów ("/**")
                .allowedOrigins("http://localhost:3000", "http://localhost:3001") // Zezwalaj na zapytania z tych adresów
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Zezwalaj na te metody HTTP
                .allowedHeaders("*") // Zezwalaj na wszystkie nagłówki
                .allowCredentials(true); // Zezwalaj na przesyłanie ciasteczek/danych uwierzytelniających
    }
}