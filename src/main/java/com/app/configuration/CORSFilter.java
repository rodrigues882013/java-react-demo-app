package com.app.configuration;

import com.app.services.UtilsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;



@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CORSFilter implements Filter {

    @Autowired
    public UtilsService utilsService;


    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    public CORSFilter() {
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;

        response.setHeader(UtilsService.ACCESS_CONTROL_ALLOW_ORIGIN, utilsService.APP_HOST);
        response.setHeader(UtilsService.ACCESS_CONTROL_ALLOW_CREDENTIALS, String.format("%b", UtilsService.ALLOW_CREDENTIALS));
        response.setHeader(UtilsService.ACCESS_CONTROL_ALLOW_METHODS, UtilsService.ALLOW_METHODS);
        response.setHeader(UtilsService.ACCESS_CONTROL_MAX_AGE, String.format("%d", UtilsService.MAX_AGE));
        response.setHeader(UtilsService.ACCESS_CONTROL_ALLOW_HEADERS, UtilsService.ALLOW_HEADERS);

        if(request.getMethod().equals(HttpMethod.OPTIONS.name())){
            response.setStatus(HttpStatus.NO_CONTENT.value());
        } else{
            chain.doFilter(req, res);
        }
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public void destroy() {

    }
}
