package com.webtech;

import java.util.List;

public interface CRUD<T>{

	List<T> create(T obj);

	List<T> update(T obj);

	List<T> delete(String id);

	List<T> getItems();
     
	T getItem(String id);    
}