package com.magesh.demo.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.magesh.demo.entities.Address;

@Repository
public interface AddressDao extends JpaRepository<Address, Integer> {

}
