package com.magesh.demo.services;

import com.magesh.demo.entities.Address;

public interface AddressService {
	Address saveAddress(Address address);
	Address findAddress(int id);
}
