package com.glammart.services;

import com.glammart.entities.Address;

public interface AddressService {
	Address saveAddress(Address address);
	Address findAddress(int id);
}
