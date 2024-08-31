package com.pet.enumerations.exceptions;

public class PetOwnerNotAvailableException extends ConflictException{
    public PetOwnerNotAvailableException(String message) {
        super(message);
    }
}
