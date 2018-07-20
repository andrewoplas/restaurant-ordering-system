package com.webtech;

import java.util.List;



public interface CRUD<T>{

     T create(T obj);

     void update(T obj);

     boolean delete(String id);

     List<T> getItems();
     
     T getItem(String id);    
}