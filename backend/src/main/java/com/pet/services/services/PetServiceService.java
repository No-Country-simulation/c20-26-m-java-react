package com.pet.services.services;

import com.pet.models.PetService;
import com.pet.services.BaseService;

import java.util.List;

public interface PetServiceService extends BaseService<PetService, Long> {

    List<PetService> searchServices(String name, String category);
}