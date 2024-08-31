package com.pet.services;

import com.pet.models.PetService;

import java.util.List;

public interface PetServiceService extends BaseService<PetService, Long> {

    List<PetService> searchServices(String name, String category);
}