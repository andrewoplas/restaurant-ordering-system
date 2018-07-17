package com.webtech;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RosApplication {

	public static void main(String[] args) {
		SpringApplication.run(RosApplication.class, args);
	}

	@Bean
	public DatastoreService cloudDatastoreService() {
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		return datastore;
	}
}
