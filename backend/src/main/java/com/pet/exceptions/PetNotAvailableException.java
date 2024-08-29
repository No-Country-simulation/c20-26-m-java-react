package com.pet.exceptions;

//Seria pet not available o pet owner not available?
public class PetNotAvailableException extends ConflictException{
    public PetNotAvailableException(String message) {
        super(message);
    }
}
