package com.app.controllers;

import com.app.helpers.AppLogger;
import com.app.security.JwtAuthenticationRequest;
import com.app.security.JwtAuthenticationResponse;
import com.app.security.JwtTokenUtil;
import com.app.security.JwtUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mobile.device.Device;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;

@RestController
public class AuthController {

    @Value("${jwt.header}")
    private String tokenHeader;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AppLogger logger;

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @RequestMapping(value = "${api.authentication.login}", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest, Device device)
            throws AuthenticationException {

        logger.logInfo("Authenticating user");

        // Perform the security
        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getUsername(),
                        authenticationRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Reload password post-security so we can generate token
        final JwtUser userDetails = (JwtUser) userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

        try {
            logger.logInfo("User authenticated with success");
            String token = jwtTokenUtil.generateToken(userDetails, device);
            return ResponseEntity.ok(new JwtAuthenticationResponse(token));

        } catch (UnsupportedEncodingException e) {
            logger.logError(e.getMessage());
            return (ResponseEntity<?>) ResponseEntity.status(500);
        }


    }
}
