package com.pet.exceptions;

public class PetOwnerNotAvailableException extends ConflictException{
    public PetOwnerNotAvailableException(String message) {
        super(message);
    }
}
