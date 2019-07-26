package com.app.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class UtilsService {
    public static final String ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin";
    public static final String ACCESS_CONTROL_ALLOW_CREDENTIALS ="Access-Control-Allow-Credentials";
    public static final String ACCESS_CONTROL_ALLOW_METHODS = "Access-Control-Allow-Methods";
    public static final String ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers";
    public static final String ACCESS_CONTROL_MAX_AGE = "Access-Control-Max-Age";
    public static final String ALLOW_METHODS = "GET,POST,PUT,DELETE,OPTIONS";
    public static final String ALLOW_HEADERS = "Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization";
    public static final Integer MAX_AGE = 3600;
    public static final boolean ALLOW_CREDENTIALS = true;

    @Value("http://${app.host}:${app.port}")
    public String APP_HOST;


}
