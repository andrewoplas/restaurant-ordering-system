package com.webtech.Dao;

import java.util.List;

import com.jmethods.catatumbo.EntityManager;
import com.jmethods.catatumbo.EntityManagerFactory;

public interface REPOSITORY<T> {
	EntityManagerFactory emf = EntityManagerFactory.getInstance();
	EntityManager em = emf.createDefaultEntityManager();
	
	 T create(T obj);

     void update(T obj);

     boolean delete(String id);

     List<T> getItems();
     
     T getItem(String id);    

}