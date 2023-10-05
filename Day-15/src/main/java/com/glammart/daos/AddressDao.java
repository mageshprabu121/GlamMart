package com.glammart.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.glammart.entities.Address;

@Repository
public interface AddressDao extends JpaRepository<Address, Integer> {

}
