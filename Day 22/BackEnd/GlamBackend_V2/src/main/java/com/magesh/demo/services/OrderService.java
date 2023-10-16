package com.magesh.demo.services;

import java.util.List;

import com.magesh.demo.entities.Customer;
import com.magesh.demo.entities.Order;

public interface OrderService {

	Order saveOrder(Order order);
	List<Order> getAllOrders();
	List<Order> getCustomerOrders(Customer customer);
	Order findById(int id);
}
