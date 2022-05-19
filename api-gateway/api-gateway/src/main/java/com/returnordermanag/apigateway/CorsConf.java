//package com.returnordermanag.apigateway;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
//import org.springframework.web.filter.CorsFilter;
//
//public class CorsConf {
//
//	
//	private CorsConfiguration buildConfig() {
//	    
//        CorsConfiguration corsConfiguration = new CorsConfiguration();
//        //corsConfiguration.addAllowedOrigin("*");
//        //  Cross domain configuration error , take .allowedOrigins Replace with .allowedOriginPatterns that will do .
//        //  Set the domain name that allows cross domain requests 
//        corsConfiguration.addAllowedOriginPattern("*");
//        corsConfiguration.addAllowedHeader("*");
//        //  Set allowed methods 
//        corsConfiguration.addAllowedMethod("*");
//        //  Whether to allow certificates 
//        corsConfiguration.setAllowCredentials(true);
//        //  Cross domain allow time 
//        corsConfiguration.setMaxAge(3600L);
//        return corsConfiguration;
//    }
//	
//	
//	  @Bean
//	    public CorsFilter corsFilter() {
//	    
//	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//	        source.registerCorsConfiguration("/**", buildConfig());
//	        return new CorsFilter((CorsConfigurationSource) source);
//	    }
//}
