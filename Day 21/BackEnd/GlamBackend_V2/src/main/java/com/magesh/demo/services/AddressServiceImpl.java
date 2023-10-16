package com.magesh.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.magesh.demo.daos.AddressDao;
import com.magesh.demo.entities.Address;

@Service
public class AddressServiceImpl implements AddressService {

	@Autowired AddressDao dao;
	
	@Override
	public Address saveAddress(Address address) {
		// TODO Auto-generated method stub
		return dao.save(address);
	}

	@Override
	public Address findAddress(int id) {
		// TODO Auto-generated method stub
		return dao.getById(id);
	}

}
