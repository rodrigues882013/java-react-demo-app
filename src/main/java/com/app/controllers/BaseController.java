package com.app.controllers;

import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BaseController <T> {

    ResponseEntity<T> get(int id);
    ResponseEntity<List<T>> list();
    ResponseEntity<T> create(T item);
    ResponseEntity<T> update(int id, T item);
    ResponseEntity<?> delete(int id);

}
