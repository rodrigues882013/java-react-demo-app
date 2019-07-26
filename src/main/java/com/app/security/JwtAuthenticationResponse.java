package com.app.security;

import java.io.Serializable;

/**
 * After request was done and credential provided was checked with success we can return for him
 * the token generated
 */
public class JwtAuthenticationResponse implements Serializable {

    private static final long serialVersionUID = 1250166508152483573L;

    private final String token;

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public JwtAuthenticationResponse(String token) {
        this.token = token;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public String getToken() {
        return this.token;
    }
}
