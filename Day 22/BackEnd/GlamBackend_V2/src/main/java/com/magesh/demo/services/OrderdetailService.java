package com.magesh.demo.services;

import java.util.List;

import com.magesh.demo.entities.Order;
import com.magesh.demo.entities.OrderDetails;

public interface OrderdetailService {

	void saveOrderDetails(OrderDetails od);
	OrderDetails findById(int id);
	List<OrderDetails> findByOrder(Order order);
}
