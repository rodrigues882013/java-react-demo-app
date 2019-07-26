package com.app.services;

import java.util.List;

public interface IService<T> {
    T findOne(int id);
    List<T> findAll();
    T create(T item);
    T update(int id, T item);
    void delete(int id);
}
