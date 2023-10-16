package com.magesh.demo.services;

import java.util.List;

import com.magesh.demo.entities.Customer;

public interface CustomerService {
	void registerCustomer(Customer cust);
	List<Customer> allCustomers();
	Customer findById(int id);
	Customer validate(String userid,String pwd);
	boolean verifyUserId(String userid);
	void updateProfile(Customer cust);
}
