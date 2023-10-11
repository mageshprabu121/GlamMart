package com.glammart.services;

import java.util.List;

import com.glammart.entities.Order;
import com.glammart.entities.OrderDetails;

public interface OrderdetailService {

	void saveOrderDetails(OrderDetails od);
	OrderDetails findById(int id);
	List<OrderDetails> findByOrder(Order order);
}
