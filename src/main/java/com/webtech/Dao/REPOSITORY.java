package com.webtech.Dao;

import com.google.appengine.api.datastore.*;
import com.jmethods.catatumbo.EntityManager;
import com.jmethods.catatumbo.EntityManagerFactory;

import java.util.*;
import com.webtech.CRUD;


interface REPOSITORY<T> extends CRUD<T>{


   EntityManagerFactory emf = EntityManagerFactory.getInstance();
   EntityManager em = emf.createDefaultEntityManager();
   T entityToObject(Entity entity);
   boolean itemExist(long id);
   Optional<Long> addObject(T obj);


}