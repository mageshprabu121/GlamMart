package com.magesh.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.magesh.demo.daos.OrderDefailsDao;
import com.magesh.demo.entities.Order;
import com.magesh.demo.entities.OrderDetails;

@Service
public class OrderDetailsServiceImpl implements OrderdetailService {

	@Autowired OrderDefailsDao dao;
	@Override
	public void saveOrderDetails(OrderDetails od) {
		// TODO Auto-generated method stub
		dao.save(od);
	}

	@Override
	public OrderDetails findById(int id) {
		// TODO Auto-generated method stub
		return dao.getById(id);
	}

	@Override
	public List<OrderDetails> findByOrder(Order order) {
		// TODO Auto-generated method stub
		return dao.findByOrder(order);
	}

}
