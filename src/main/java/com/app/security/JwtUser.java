package com.app.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.app.models.Authority;
import com.app.models.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/**
 * This class is a custom implementation of UserDetail from spring security
 */
public class JwtUser implements UserDetails {
    private final Integer id;
    private final String username;
    private final String password;
    private final Collection<? extends GrantedAuthority> authorities;
    private final boolean enabled;
    private final User user;

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public JwtUser(User user) {
        this.id =  user.getId();
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.authorities = mapToGrantedAuthorities(user.getAuthorities());
        this.enabled = user.getActive();
        this.user = user;
    }


    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    @JsonIgnore
    public Integer getId() {
        return id;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @JsonIgnore
    @Override
    public String getPassword() {
        return password;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public String getUsername() {
        return username;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public boolean isEnabled() {
        return enabled;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @JsonIgnore
    private static List<GrantedAuthority> mapToGrantedAuthorities(List<Authority> authorities) {
        return authorities.stream()
                .map(authority -> new SimpleGrantedAuthority(authority.getName().name()))
                .collect(Collectors.toList());
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @JsonIgnore
    public User getUser() {
        return user;
    }
}
