package com.magesh.demo.services;

import com.magesh.demo.entities.Payment;

public interface PaymentService {
	Payment savePayment(Payment payment);
	Payment findPaymentById(int id);
}
