package com.magesh.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.magesh.demo.daos.PaymentDao;
import com.magesh.demo.entities.Payment;

@Service
public class PaymentServiceImpl implements PaymentService {

	@Autowired PaymentDao dao;
	
	@Override
	public Payment savePayment(Payment payment) {
		// TODO Auto-generated method stub
		return dao.save(payment);
	}

	@Override
	public Payment findPaymentById(int id) {
		// TODO Auto-generated method stub
		return dao.getById(id);
	}

}
