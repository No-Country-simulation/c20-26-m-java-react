package com.pet.enumerations.exceptions;

public class PetSitterNotAvailableException extends ConflictException{
    public PetSitterNotAvailableException(String message) {
        super(message);
    }
}
