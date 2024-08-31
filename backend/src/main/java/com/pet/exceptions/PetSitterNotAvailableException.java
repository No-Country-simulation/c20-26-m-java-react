package com.pet.exceptions;

public class PetSitterNotAvailableException extends ConflictException{
    public PetSitterNotAvailableException(String message) {
        super(message);
    }
}
