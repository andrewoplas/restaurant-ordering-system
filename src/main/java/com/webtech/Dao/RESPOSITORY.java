package com.webtech.Dao;

import com.google.appengine.api.datastore.*;
import java.util.*;
import com.webtech.CRUD;


interface RESPOSITORY<T> extends CRUD<T>{

   T entityToObject(Entity entity);
   boolean itemExist(long id);
   Optional<Long> addObject(T obj);

   
}