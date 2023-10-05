package com.glammart.services;

import java.util.List;

import com.glammart.entities.Customer;
import com.glammart.entities.Order;

public interface OrderService {

	Order saveOrder(Order order);
	List<Order> getAllOrders();
	List<Order> getCustomerOrders(Customer customer);
	Order findById(int id);
}
