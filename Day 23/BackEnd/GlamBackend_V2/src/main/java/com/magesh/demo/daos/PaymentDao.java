package com.magesh.demo.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.magesh.demo.entities.Payment;

public interface PaymentDao extends JpaRepository<Payment, Integer> {

}
