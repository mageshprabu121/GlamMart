package com.glammart.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.glammart.entities.Payment;

public interface PaymentDao extends JpaRepository<Payment, Integer> {

}
